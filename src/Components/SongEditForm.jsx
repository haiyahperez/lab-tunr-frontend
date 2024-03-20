import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function SongEditForm() {
    const { id } = useParams();

    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false
    });

    useEffect(() => {
        fetch(`${API}/songs/${id}`)
        .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setSong(data);
          })
          .catch((error) => console.error(error));
      }, [id]);

    const editSong = () => {
        fetch(`${API}/songs/${id}`, {
            method: "PUT",
            body: JSON.stringify(song),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then(() => navigate(`/songs/${id}`))
            .catch((error) => console.error("catch", error));
        };

    const handleTextChange = (event) => {
        setSong({ ...song, [event.target.id]: event.target.value });
      };
    
      const handleCheckboxChange = () => {
        setSong({ ...song, is_favorite: !song.is_favorite });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        editSong();
    };

    return (
        <div className="New">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    value={song.name}
                    type="text"
                    onChange={handleTextChange}
                    required
                />
                <label htmlFor="artist">Artist:</label>
                <input
                    id="artist"
                    value={song.artist}
                    type="text"
                    onChange={handleTextChange}
                    required
                />
                 <label htmlFor="album">Album:</label>
                <input
                    id="album"
                    value={song.album}
                    type="text"
                    onChange={handleTextChange}
                    required
                />
                 <label htmlFor="time">Duration:</label>
                <input
                    id="time"
                    value={song.time}
                    type="text"
                    onChange={handleTextChange}
                    required
                />
                 <label htmlFor="is_favorite">Favorite:</label>
                <input
                    id="is_favorite"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={song.is_favorite}
                />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
}

export default SongEditForm;