import { Component } from "react";
import { Col } from "react-bootstrap";

const URL = 'http://www.omdbapi.com/?apikey=469ff3dc&s='

const pirates = 'pirates of the caribbean' 
const starWars = 'star wars'
const dino = 'jurassic park'

class SingleRow extends Component {

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
        this.getMovies(starWars)
        this.getMovies(pirates)
    }



    render(){
        return(
            <>
            {
                this.state.movies.map((movie) =>( 
                        <Col key={movie.imdbID} xs={12} sm={6} md={4} lg={2} className="px-0 mb-1 mb-md-0 mx-sm-0">
                            <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
                        </Col>

                )
                )

            }
            </>
        )
    }
}

export default SingleRow