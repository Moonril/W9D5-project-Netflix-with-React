import { useEffect, useState } from "react";
import { Col, Card, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

// remove selected

const URL = 'http://www.omdbapi.com/?apikey=469ff3dc&s='


const SingleRowOne = function(props) {

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const getMovies = () => {

        fetch(URL + props.saga)
        .then((response)=>{
            if(response.ok){
                return response.json()
            } else {
                throw new Error('errrore nella fetch')
            }
        })
        .then((data) => {
            // array di film
            //console.log('film object', data)
            //console.log('film array', data.Search)


            // film riordinati per anno di uscita
            const sortedMovies = data.Search.sort((a, b) => parseInt(a.Year) - parseInt(b.Year))

            //console.log('sorted movies', sortedMovies)

            setMovies(sortedMovies)
            setIsLoading(false)
      
        })
        .catch((err) => {
            console.log('errore', err)

            setIsLoading(false)
            setIsError(true)
        })
    }

    useEffect(()=>{
        getMovies()
    },[props.saga])




        return(
            <>

            {/* spinner */}

            {
                isLoading === true && (
                    <div className="text-center">
                        <Spinner variant="primary" animation="border"  />
                    </div>
                )
            }

            {/* ERRORE */}
            {
                isError && (
                    <Alert variant='danger' className="text-center">
                        <i className="bi bi-bug"></i> Errore nella fetch <i className="bi bi-bug"></i>
                    </Alert>
                )
            }


            {
                movies.slice(0, 6).map((movie) =>( 
                        <Col key={movie.imdbID} xs={6} md={4} lg={4} xl={3} className="px-0 mb-1 mb-md-0 mx-sm-0">
                           <Card className="border-0 p-1 bg-dark selezione card position-relative">
                                <Link to={'/movieDetails/' + movie.imdbID} >
                                    <Card.Img variant="top" src={movie.Poster} alt={movie.Title} className="card-img locandine"/>
                                </Link>
                            
                            <Card.Body className="fw-light text-white flex-column p-1 card-body px-2 rounded">
                                <div className="fs-1 d-flex flex-row text-dark-emphasis justify-content-between p-1">
                                    <div>
                                       <i className="bi bi-play-circle"> </i><i className="bi bi-plus-circle"> </i><i class="bi bi-hand-thumbs-up"></i> 
                                    </div>
                                     <i className="bi bi-caret-down-square"></i>
                                </div>
                                <div>{movie.Title} &middot; <i class="bi bi-badge-hd"></i></div>
                                
                                
                            </Card.Body>
                            </Card>
                        </Col>
                ))

            }
            </>
        )
}

export default SingleRowOne