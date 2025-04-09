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
            console.log('film object', data)
            console.log('film array', data.Search)


            // film riordinati per anno di uscita
            const sortedMovies = data.Search.sort((a, b) => parseInt(a.Year) - parseInt(b.Year))

            console.log('sorted movies', sortedMovies)

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
    },[])




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
                        <Col key={movie.imdbID} xs={12} sm={6} md={4} lg={4} xl={2} className="px-0 mb-1 mb-md-0 mx-sm-0">
                           <Card className="border-0 p-1 bg-dark selezione">
                                <Link to={'/movieDetails/' + movie.imdbID} >
                                    <Card.Img variant="top" src={movie.Poster} alt={movie.Title} className="w-100 locandine"/>
                                </Link>
                            <Card.Title className="flex-grow-1 fs-6 text-light">{movie.Title}</Card.Title>
                            </Card>
                        </Col>
                ))

            }
            </>
        )
}

export default SingleRowOne