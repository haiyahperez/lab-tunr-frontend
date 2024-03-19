import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <h1>
                <Link to="/songs">All Songs</Link>
            </h1>
        </nav>
    );
}