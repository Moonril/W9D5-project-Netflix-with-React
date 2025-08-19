import { Col, Container, Row, Card, Badge, Spinner, Alert } from 'react-bootstrap'
import { Link, useParams, useNavigate, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const URL = 'https://www.omdbapi.com/?apikey=469ff3dc&i='
const URLComments = 'https://striveschool-api.herokuapp.com/api/comments/'
const APIKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlN2QzNTFkNDM2ZTAwMTVkYTI3MTkiLCJpYXQiOjE3NDM2ODI4NjksImV4cCI6MTc0NDg5MjQ2OX0.antMXaShZo-QOGkmltLTzqOhABGF7TFwjaHPULTikjI"

const MovieDetails = function () {


 
    

    const [movie, setMovie] = useState({})
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const params = useParams()
    console.log(params.movieId) //id nella search
    const navigate = useNavigate()


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

   /*  const getComments = () => {

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
            console.log('getcomments', data)
    
            setComments(data)
            setIsLoading(false)
        })
        .catch((err) => {
            console.log('errore', err)
    
            setIsLoading(false)
            setIsError(true)
        })
    } */


    // manca tutto il check per l'id
    useEffect(()=>{

        /* const foundMovie = movie.imdbID.toString() === params.movieId
        
        if(!foundMovie){
            setIsLoading(false)
            navigate('/404')
            } else {
                setMovie(foundMovie)
        }
        
        console.log('foundMovie', foundMovie) */
        /* if(!params){
            navigate('/404')
            return
            
        } */
        
        getMovie()


        /* getComments() */
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
                <Col key={movie.imdbID} xs={11} md={10} lg={8} className="px-0 mb-1 mb-md-0 mx-sm-0">
                    <Card className="border-0 p-1 bg-dark d-flex flex-col flex-lg-row" >
                        <Card.Img variant="top" src={movie.Poster === "N/A" ? 'https://http.cat/images/404.jpg' : movie.Poster} alt={movie.Title} className="w-100 locandina p-0 p-md-5"/>
                        <Card.Body>
                            <Card.Text className='fs-6 text-secondary m-0'>{movie.Year} &middot; {movie.Runtime} &middot; <i className="bi bi-badge-hd"></i> &middot; <span className='fs-6'>{movie.Rated}</span></Card.Text>
                            <Card.Title className="fs-2 text-light pt-3 d-flex justify-content-between">{movie.Title}</Card.Title>
                            <Card.Text className='fs-5 text-secondary'>{movie.Genre}</Card.Text>
                            <Card.Text className='text-light text-center pt-3'>{movie.Plot}</Card.Text>
                            <Card.Text className='pt-2 m-0 text-secondary'>
                                Writer: {movie.Writer}</Card.Text>
                            <Card.Text className='text-secondary'>Director: {movie.Director}</Card.Text>
                            <Card.Text className='text-secondary'>Actors: {movie.Actors}</Card.Text>

                        </Card.Body>
                    </Card>
                    <div className='text-light text-center d-flex flex-column justify-content-center border border-1'>

                    {
                        comments.map((comment)=>(
                            <div key={comment._id}>
                                <div>{comment.comment} - {comment.rate}/5</div>
                            </div>

                    ))
                    }
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default MovieDetails