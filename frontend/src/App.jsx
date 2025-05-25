import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/movies`)
        setMovies(response.data)
        setLoading(false)
      } catch (err) {
        setError('Error fetching movies')
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className="container">
      <h1>Movie List</h1>
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <h2>{movie.title}</h2>
            <p>Release Year: {movie.releaseYear}</p>
            <p>Rating: {movie.rating || 'Not rated'}</p>
            <p>Review: {movie.review || 'No review yet'}</p>
          </div>
        ))}
      </div>
    </div>
  )
}