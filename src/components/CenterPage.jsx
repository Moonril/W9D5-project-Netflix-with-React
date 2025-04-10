import { useEffect, useState } from "react"
import SingleRowOne from "./SingleRowOne"
import { Dropdown } from "react-bootstrap"

// volevo agigungere un cambio di stato per ogni genere ma non ho fatto a tempo :(((
const fantasyMovies = ['star wars', 'harry potter', 'lord of the rings']
const actionMovies = ['pirates of the caribbean', 'indiana jones', 'mission impossible']
const horrorMovies = ['friday the 13th', 'halloween', 'nightmare on elm street']



const CenterPage = function() {

    
    const [activeGenre, setActiveGenre] = useState('fantasy')



    useEffect(()=>{
        setActiveGenre(activeGenre)
    }, [activeGenre])
    
        return(
            <main className="p-1 flex-grow-1 bg-dark">
        {/* titolo */}
        <section className="container">
            <div className="row">
                <div className="col-9 d-flex justify-content-start p-0">
                    <h1 className="text-light me-1 mb-auto mb-0">Movies</h1>

                    <Dropdown className="my-auto ms-3">
                        <Dropdown.Toggle variant="dark" className="btn btn-secondary dropdown-toggle bg-transparent rounded-1 border-1 border-light">
                            Genres
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-menu bg-black rounded-1 ">
                            <Dropdown.Item className="dropdown-item text-light link-dark" onClick={()=>{setActiveGenre('fantasy')}}>Fantasy</Dropdown.Item>
                            <Dropdown.Item className="dropdown-item text-light link-dark" onClick={()=>{setActiveGenre('action')}}>Action</Dropdown.Item>
                            <Dropdown.Item className="dropdown-item text-light link-dark" onClick={()=>{setActiveGenre('horror')}}>Horror</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
    
                <div className="col-3 d-flex justify-content-end">
                    <button type="button" className="btn btn-outline-light rounded-1 my-auto"><i className="bi bi-list"></i></button>

                </div>

            </div>
        </section>
        <section className="container-fuid mx-5 my-3">

            {/* trending */}
            <h2 className="text-light fs-4 my-3">Trending - {
            activeGenre === 'horror' ? 'Horror' : 
            activeGenre === 'fantasy'? 'Fantasy' : 
            activeGenre === 'action' ? 'Action' : ''
                }</h2>
            <div className="row my-3">
                <SingleRowOne saga={
                activeGenre === 'fantasy' ? fantasyMovies[0] : 
                activeGenre === 'horror' ? horrorMovies[0] : 
                activeGenre === 'action' ? actionMovies[0] : 'fantasy'} />
                
            </div>
        
        
            {/* watch it */}
            <h2 className="text-light fs-4 my-3">Watch It Again</h2>
            <div className="row my-3">
             <SingleRowOne saga={
                activeGenre === 'fantasy' ? fantasyMovies[1] : 
                activeGenre === 'horror' ? horrorMovies[1] : 
                activeGenre === 'action' ? actionMovies[1] : 'fantasy'} />
            </div>
        
        
            {/* <!-- new release --> */}
            <h2 className="text-light fs-4 my-3">Old Releases</h2>
            <div className="row my-3">
            <SingleRowOne saga={
                activeGenre === 'fantasy' ? fantasyMovies[2] : 
                activeGenre === 'horror' ? horrorMovies[2] : 
                activeGenre === 'action' ? actionMovies[2] : 'fantasy'} />
            
            </div>
        </section>

    </main>
        )
    
}

export default CenterPage