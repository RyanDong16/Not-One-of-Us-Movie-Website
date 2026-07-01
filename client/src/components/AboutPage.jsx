import { useEffect, useState } from "react";
import "../css/AboutPage.css";
import moviePoster from "../assets/About Photos/NOOU Poster brightened.jpg";

const aboutImageModules = import.meta.glob(
    [
        "../assets/Gallery Photos/Production Stills/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
    ],
    {
        eager: true,
        query: "?url",
        import: "default",
    }
);

const productionStills = Object.entries(aboutImageModules)
    .sort(([pathA], [pathB]) =>
        pathA.localeCompare(pathB, undefined, { numeric: true })
    )
    .map(([, imageUrl]) => imageUrl);

const AboutPage = () => {
    const [orderedStills, setOrderedStills] = useState(productionStills);
    const [isSliding, setIsSliding] = useState(false);

    useEffect(() => {
        if (orderedStills.length <= 1) {
            return;
        }

        const interval = setInterval(() => {
            setIsSliding(true);

            setTimeout(() => {
                setOrderedStills((currentImages) => {
                    const [firstImage, ...remainingImages] = currentImages;
                    return [...remainingImages, firstImage];
                });

                setIsSliding(false);
            }, 800);
        }, 10000);

        return () => clearInterval(interval);
    }, [orderedStills.length]);

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

            <section className="production-stills-section">
                <h2>Production Stills</h2>

                <div className="production-stills-window">
                    <div className={`production-stills-row ${isSliding ? "sliding" : ""}`}>
                        {orderedStills.map((imageUrl, index) => (
                            <img
                                key={`${imageUrl}-${index}`}
                                src={imageUrl}
                                alt={`Production still ${index + 1}`}
                                className="production-still-image"
                                loading="lazy"
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;