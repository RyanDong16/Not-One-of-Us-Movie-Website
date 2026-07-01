import { Link } from "react-router-dom";
import "../css/NotFound.css";

const NotFound = () => {
    return (
        <section className="not-found-section">
            <div className="not-found-content">
                <p className="not-found-kicker">404 Error</p>

                <h1>
                    Not One of <span>Us</span>
                </h1>

                <h2>Page Not Found</h2>

                <p className="not-found-message">
                    This page disappeared into the dark. The trail went cold, and there is nothing waiting here.
                </p>

                <Link to="/" className="not-found-link">
                    Return Home
                </Link>
            </div>
        </section>
    );
};

export default NotFound;