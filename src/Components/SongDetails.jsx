import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function SongDetails() {
    const { id } = useParams();
    const [songDetails, setSongDetails] = useState({ 
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false })

    useEffect(() => {
        fetch(`${API}/songs/${id}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setSongDetails(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return(
        <div>
            <h1>Title: {songDetails.name}</h1>
            <h2>Artist: {songDetails.artist}</h2>
            <h2>Album: {songDetails.album}</h2>
        </div>
    )
}

export default SongDetails;