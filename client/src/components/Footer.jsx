import "../css/Footer.css";
import InstagramLogo from "/src/assets/Footer Photos/white-instagram-logo-transparent.png";
import YouTubeLogo from "/src/assets/Footer Photos/white-youtube-logo-transparent.png";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-crime-line"></div>

            <div className="footer-content">
                <p className="footer-kicker">Official Film Website</p>

                <h1>
                    Not One of <span>Us</span>
                </h1>

                <p className="footer-tagline">
                    Dreams are worth dying for.
                </p>

                <div className="footer-social-links" aria-label="Social media links">
                    <div className="footer-social-row">
                        <span className="footer-social-name">Not One of Us</span>

                        <a
                            href="https://www.instagram.com/notoneofus_movie/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Open Not One of Us Instagram"
                        >
                            <img
                                src={InstagramLogo}
                                alt="Not One of Us Instagram"
                                className="NotOneofUs-Instagram"
                            />
                        </a>

                        <span className="footer-social-name">Cruise Films</span>

                        <a
                            href="https://www.instagram.com/cruise.films/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Open Cruise Films Instagram"
                        >
                            <img
                                src={InstagramLogo}
                                alt="Cruise Films Instagram"
                                className="CruiseFilms-Instagram"
                            />
                        </a>

                        <a
                            href="https://www.youtube.com/@CruiseFilms"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Open Cruise Films YouTube"
                        >
                            <img
                                src={YouTubeLogo}
                                alt="Cruise Films YouTube"
                                className="CruiseFilms-YouTube"
                            />
                        </a>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-legal">
                    <h2>Designed by Ryan Dong</h2>
                    <span className="footer-legal-gap" aria-hidden="true"></span>
                    <h2>2026 Cruise Films</h2>
                    <span className="footer-legal-gap" aria-hidden="true"></span>
                    <h2>All Rights Reserved</h2>
                </div>
            </div>
        </footer>
    );
};

export default Footer;