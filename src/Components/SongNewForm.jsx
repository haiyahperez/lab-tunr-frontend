import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function SongNewForm() {
    const navigate = useNavigate()
    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false
    });

    const addSong = () => {
        fetch(`${API}/songs`, {
            method: "POST",
            body: JSON.stringify(song),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(() => {
                navigate('/songs');
            })
            .catch((error) => console.error("catch", error));
    };

    const handleTextChange = (event) => {
        setSong({ ...song, [event.target.id]: event.target.value});
    };

    const handleCheckboxChange = () => {
        setSong({...song, is_favorite: !song.is_favorite });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addSong();
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
                    placeholder="Song Name"
                    required
                />
                <label htmlFor="artist">Artist:</label>
                <input
                    id="artist"
                    value={song.artist}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Artist"
                    required
                />
                 <label htmlFor="Album">Album:</label>
                <input
                    id="album"
                    value={song.album}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Album Name"
                    required
                />
                 <label htmlFor="time">Duration:</label>
                <input
                    id="time"
                    value={song.time}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="time"
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

export default SongNewForm;