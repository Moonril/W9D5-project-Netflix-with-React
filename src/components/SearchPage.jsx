import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const URL = 'https://www.omdbapi.com/?apikey=469ff3dc&s='

const SearchPage = function (){

    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [debouncedSearch, setDebouncedSearch] = useState('')

    const getMovies = () => {

        fetch(URL + search)
        .then((response)=>{
            if(response.ok){
                return response.json()
            } else {
                throw new Error('errrore nella fetch')
            }
        })
        .then((data) => {
            // array movies
            //console.log('film object', data)
            //console.log('film array', data.Search)


            // filter by year
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
        const handler = setTimeout(() => {
            setDebouncedSearch(search)
        }, 500)

        return () => {
            clearTimeout(handler)
        }
            
        },[search])

    useEffect(()=>{
        if(debouncedSearch){
            getMovies()
        }
    }, [debouncedSearch])


    return(
        <main className="p-1 flex-grow-1 bg-dark">
            <Container>

            <Row className="justify-content-center">
                <Col xs={6}>
                    <h1 className="text-center text-light">Cerca</h1>
                    <Form className="text-center">
                        <Form.Control type='text' placeholder="lost.." value={search} onChange={(e) =>
                            setSearch(e.target.value)
                        } />
                        <Form.Label className="text-light border border-light p-2 mt-2 me-1">Cerca</Form.Label>
                        <Button className="text-light border border-light p-2 rounded-0 bg-transparent mb-1 ms-1" onClick={(e) => {
                            
                            setSearch({search: ''})
                        }}>Reset</Button>
                    </Form>
                </Col>
            </Row>

            <Row>

                

                {
                    movies.map((movie) => (

                <Col key={movie.imdbID}  xs={12} sm={6} md={4} lg={4} xl={2} className="px-0 mb-1 mb-md-0 mx-sm-0">
                           <Card className="border-0 p-1 bg-dark selezione">
                            {/* <img src="https://placecats.com/200/200" alt="" /> */}
                                <Link to={'/movieDetails/' + movie.imdbID} >
                                    <Card.Img variant="top" src={movie.Poster === "N/A" ? 'https://http.cat/images/404.jpg' : movie.Poster} alt={movie.Title} className="w-100 locandine"/>
                                </Link>
                            <Card.Title className="flex-grow-1 fs-6 text-light">{movie.Title}</Card.Title>
                            </Card>
                </Col>
                    ))
                }
            </Row>

                        
            </Container>

        </main>
    )
}

export default SearchPage