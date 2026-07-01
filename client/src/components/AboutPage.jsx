import "../css/AboutPage.css";
import moviePoster from "../assets/About Photos/NOOU Poster brightened.jpg";

const AboutPage = () => {
    return (
        <div className="about-section">
            <h1>About</h1>

            <div className="about-content">
                <div className="about-text">
                    <h2>Logline</h2>

                    <p>
                        Forced to clean up bodies for his mobster uncle, a driven teenager suddenly gets accepted to his dream college,
                        but his uncle will kill him if he leaves home.
                    </p>
                </div>

                <img
                    src={moviePoster}
                    alt="Not One of Us movie poster"
                    className="movie-poster"
                />
            </div>
        </div>
    );
};

export default AboutPage;