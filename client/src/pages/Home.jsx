import "../css/Home.css";

const Home = () => {
    return (
        <section className="home-section">
            <div className="home-spotlight"></div>

        
                    <p className="home-tagline">
                        Welcome to the official Not One of Us website.
                    </p>
    
                    <a
                        className="trailer-link-btn"
                        href="https://www.youtube.com/watch?v=cAPhktecank"
                        target="_blank"
                        rel="noreferrer"
                       >
                        Watch Trailer
                    </a>
            </section>
    )

}

export default Home;