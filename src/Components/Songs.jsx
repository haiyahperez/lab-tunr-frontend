import { useState, useEffect } from "react";
import Song from "./Song";

const API = import.meta.env.VITE_BASE_URL;

function Songs() {
    const [songs, setSongs] = useState([]);
    useEffect(() => {
        fetch(`${API}/songs`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setSongs(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="Songs">
            <section>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Songs</th>
                        </tr>
                    </thead>
                    <tbody>
                    {songs.map((song) => {
                        return <Song key={song.id} song={song} />;
                    })}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default Songs;