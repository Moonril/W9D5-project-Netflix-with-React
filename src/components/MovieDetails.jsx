import { Col, Container, Row, Card, Badge, Spinner } from 'react-bootstrap'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const URL = 'https://www.omdbapi.com/?apikey=469ff3dc&i='
const URLComments = 'https://striveschool-api.herokuapp.com/api/comments/:'
const APIKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlN2QzNTFkNDM2ZTAwMTVkYTI3MTkiLCJpYXQiOjE3NDM2ODI4NjksImV4cCI6MTc0NDg5MjQ2OX0.antMXaShZo-QOGkmltLTzqOhABGF7TFwjaHPULTikjI"

const MovieDetails = function () {


 
    

    const [movie, setMovie] = useState({})
    const [comments, setComments] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const params = useParams()
    console.log(params.movieId) //id nella search


    // devo fare una fetch con l'id per riottenere il film
    //come faccioa importare l'id nella fetch?
    // altra fetch per i commenti?
    const getMovie = () => {

    fetch(URL + params.movieId)
    .then((response) => {
        if(response.ok){
            return response.json()
        } else {
            throw new Error('response not ok')
        }
    })
    .then((data) => {
        console.log('data', data)

        setMovie(data)
        setIsLoading(false)
    })
    .catch((err) => {
        console.log('errore', err)

        setIsLoading(false)
        setIsError(true)
    })
}


    // prendiamo i commenti

    const getComments = () => {

        fetch(URLComments + params.movieId, {
            headers: {
                "Authorization": APIKey
            }
        })
        .then((response) => {
            if(response.ok){
                return response.json()
            } else {
                throw new Error('response not ok')
            }
        })
        .then((data) => {
            console.log('data', data)
    
            setComments(data)
            setIsLoading(false)
        })
        .catch((err) => {
            console.log('errore', err)
    
            setIsLoading(false)
            setIsError(true)
        })
    }



    useEffect(()=>{
        getMovie()
    },[])


    return (

        
        
        <Container fluid className="p-1 flex-grow-1 bg-dark p-3">

            {
                isLoading === true && (
                    <div className="text-center">
                        <Spinner variant="primary" animation="border"  />
                    </div>
                )
    
            }

{
                isError && (
                    <Alert variant='danger' className="text-center">
                        <i className="bi bi-bug"></i> Errore nella fetch <i className="bi bi-bug"></i>
                    </Alert>
                )
            }

            <Row className='justify-content-center'>
                <Col key={movie.imdbID} xs={12} className="px-0 mb-1 mb-md-0 mx-sm-0">
                    <Card className="border-0 p-1 bg-dark" >
                        <Card.Img variant="top" src={movie.Poster} alt={movie.Title} className="w-100 locandine"/>
                        <Card.Title className="flex-grow-1 fs-1 text-light pt-3">{movie.Title} <span className='fs-4 text-secondary'>{movie.Runtime}</span><span className='fs-4 text-secondary'> - {movie.Genre}</span></Card.Title>
                        <Card.Text className='text-light pt-3 text-center'>{movie.Plot}</Card.Text>
                        <Card.Text className='text-light pt-3 text-center'>Writer: {movie.Writer}</Card.Text>
                        <Card.Text className='text-light pt-3 text-center'>Director: {movie.Director}</Card.Text>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default MovieDetails