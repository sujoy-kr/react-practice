import {useEffect, useState} from "react";
import {Search} from "./components/Search.jsx";
import {Spinner} from "./components/Spinner.jsx";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
    method: "GET",
    headers: new Headers({
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`
    })
}

const App = () => {
    const [searchText, setSearchText] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [movieList, setMovieList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchMovies = async () => {
        setIsLoading(true);
        setErrorMessage('');
        try {
            const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
            const response = await fetch(endpoint, API_OPTIONS);

            if (!response.ok) {
                throw new Error("Could not fetch movies");
            }

            const data = await response.json();

            if (!data.results) {
                throw new Error("Could not fetch movies");
            }

            setMovieList(data.results);

            console.log(data);

        } catch (error) {
            console.error(`Error fetching movies: ${error}`);
            setErrorMessage('Error fetching movies. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchMovies()
    }, []);

    return (
        <main>
            <div className="pattern"/>
            <div className="wrapper">
                <header>
                    <img src="hero.png" alt="Hero Thumbnail"/>
                    <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without The Hassle.</h1>
                    <Search searchText={searchText} setSearchText={setSearchText}/>
                </header>
                <section className='all-movies mt-4'>
                    <h2>All Movies</h2>
                    {isLoading ? (
                        <Spinner/>
                    ) : errorMessage ? (
                        <p className='text-red-500'>{errorMessage}</p>
                    ) : (
                        <ul>
                            {movieList.map(movie => (
                                <li key={movie.id} className='text-white'>{movie.title}</li>
                            ))}
                        </ul>
                    )}
                </section>
            </div>
        </main>
    )
}

export default App
