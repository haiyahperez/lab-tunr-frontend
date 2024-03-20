import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function SongDetails() {
    const [song, setSong] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch(`${API}/songs/${id}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setSong(data);
            })
            .catch((error) => console.log(error));
    }, []);

    function deleteSong() {
        fetch(`${API}/songs/${id}`, {
          method: "DELETE",
        })
          .then(() => navigate(`/songs`))
          .catch((error) => console.error(error));
      }

    return(
        <div>
            <h1>Title: {song.name}</h1>
            <h2>Artist: {song.artist}</h2>
            <h2>Album: {song.album}</h2>
            <h2>Duration: {song.time}</h2>
            <h2>Favorite: {song.is_favorite ? (
                    <span>⭐️</span>
                ) : (
                    <span>❌</span>
                )}</h2>
            <button onClick={ () => navigate("/songs/:id/edit")}>Edit</button>
            <button onClick={ () => navigate("/songs") }>Back</button>
            <button onClick={deleteSong}>Delete</button>
        </div>
    )
}

export default SongDetails;