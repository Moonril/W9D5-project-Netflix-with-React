import { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const URL = 'http://www.omdbapi.com/?apikey=469ff3dc&s='

const pirates = 'pirates of the caribbean' 
const starWars = 'star wars'
const dino = 'jurassic park'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 6,
    slidesToSlide: 1
  },
  desktop: {
    breakpoint: { max: 1200, min: 992 },
    items: 4,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 992, min: 768 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
}


const styles = {

    cardImage: {
        objectFit: 'cover',
        width: '20vw',
        height: '40vh'
    }

}



class MyCarousel extends Component {

    state = {
        movies: []
    }

    getMovies = (saga) => {

        fetch(URL + saga)
        .then((response)=>{
            if(response.ok){
                return response.json()
            } else {
                throw new Error('errrore nella fetch')
            }
        })
        .then((data) => {
            // array di film
            console.log('film object', data)
            console.log('film array', data.Search)
            this.setState({
                movies: data.Search,
                
            }) 



            
        })
        .catch((err) => {
            console.log('errore', err)
        })
    }

    componentDidMount() {
        this.getMovies(dino)
 
    }




    render (){
        return (
          <Carousel
            responsive={responsive}
            infinite={false}
            arrows
            showDots={false}
            keyBoardControl
            containerClass="carousel-container"
            itemClass="carousel-item-padding-10-px"
          >
            {this.state.movies.map((movie, index) => (
              <img key={movie.imdbID} src={movie.Poster} alt={`slide ${index + 1}`} className="img-fluid" style={styles.cardImage} />
            ))}
          </Carousel>
        )

    }
}

export default MyCarousel