import { useEffect, useState } from "react";
import { Card, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const URL = "https://www.omdbapi.com/?apikey=469ff3dc&s="; // usa https!

const ProvaCarousel = function (props) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getMovies = () => {
    fetch(URL + props.saga)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("errore nella fetch");
      })
      .then((data) => {
        const sortedMovies = (data?.Search ?? []).sort(
          (a, b) => parseInt(a.Year) - parseInt(b.Year)
        );
        setMovies(sortedMovies);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("errore", err);
        setIsLoading(false);
        setIsError(true);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getMovies();
  }, [props.saga]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    arrows: true,          // frecce su desktop
    swipeToSlide: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      { breakpoint: 576, settings: { slidesToShow: 2, slidesToScroll: 2, arrows: false } },
      { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      { breakpoint: 992, settings: { slidesToShow: 4, slidesToScroll: 2 } },
      { breakpoint: 1200, settings: { slidesToShow: 5, slidesToScroll: 2 } },
    ],
  };

  if (isLoading) {
    return (
      <div className="text-center">
        <Spinner variant="primary" animation="border" />
      </div>
    );
  }

  if (isError) {
    return (
      <Alert variant="danger" className="text-center">
        <i className="bi bi-bug"></i> Errore nella fetch <i className="bi bi-bug"></i>
      </Alert>
    );
  }

  if (!movies.length) return null;

  return (
    <Slider {...settings} className="single-row-one-slider my-3">
      {movies.slice(0, 12).map((movie) => (
        <div key={movie.imdbID}>
          <Card className="border-0 p-0 bg-dark selezione card-main position-relative">
            <Link to={"/movieDetails/" + movie.imdbID}>
              <Card.Img
                variant="top"
                src={movie.Poster}
                alt={movie.Title}
                className="card-img locandine"
              />
            </Link>

            {/* OVERLAY in hover */}
            <Card.Body className="fw-light text-white flex-column p-1 card-body-main px-2 rounded">
              <div className="fs-1 d-flex flex-row text-dark-emphasis justify-content-between p-1">
                <div>
                  <i className="bi bi-play-circle"> </i>
                  <i className="bi bi-plus-circle"> </i>
                  <i className="bi bi-hand-thumbs-up"></i>
                </div>
                <i className="bi bi-caret-down-square"></i>
              </div>
              <div>
                {movie.Title} &middot; <i className="bi bi-badge-hd"></i>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </Slider>
  );
};

export default ProvaCarousel
