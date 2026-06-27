import "../css/Home.css";

const Home = () => {
    return (
        <section className="home-section">
            <div className="home-spotlight"></div>

            <img
                src="/assets/Home Photos/Not One of Us Social Card.jpg"
                alt="Not One of Us"
                className="home-title-card"
            />

            <h1 className="home-title">
                <span>Not One Of</span>
                <span className="home-title-red">Us</span>
            </h1>

            <p className="home-tagline">
                TAGLINE
            </p>

            <a
                className="film-link-btn"
                href="https://www.youtube.com/watch?v=cAPhktecank"
                target="_blank"
                rel="noreferrer"
            >
                Watch Film
            </a>
        </section>
    );
};

export default Home;