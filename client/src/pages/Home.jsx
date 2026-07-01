import "../css/Home.css";
import cruiseFilmsLogo from "../assets/Home Photos/Cruise Films logo.png";
import homeTitleCard from "../assets/Home Photos/Not One of Us Social Card.jpg";

const Home = () => {
    return (
        <section className="home-section">
            <div className="home-spotlight"></div>

            <img
                src={homeTitleCard}
                alt="Not One of Us"
                className="home-title-card"
            />

            <h1 className="home-title">
                <span>Not One Of</span>
                <span className="home-title-red">Us</span>
            </h1>

            <p className="home-tagline">
                Dreams are worth dying for.
            </p>

            <a
                className="film-link-btn"
                href="https://www.youtube.com/watch?v=p42a0FgbbIQ"
                target="_blank"
                rel="noreferrer"
            >
                Watch Film
            </a>
        </section>
    );
};

export default Home;