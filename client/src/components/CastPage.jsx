import "../css/CastPage.css";

const CastPage = () => {
    return (
        <div className="cast-wrapper">
            <h1>Cast</h1>

            <div className="cast-page">
                <section className="cast-member">
                    <img
                        src="/src/assets/Cast Photos/Giancarlo Lugo headshot1a.jpg"
                        alt="Giancarlo Lugo"
                        className="cast-headshot"
                    />

                    <div className="cast-info">
                        <h2>Benny de Luca</h2>
                        <h3>Giancarlo Lugo</h3>
                    </div>
                </section>

                <section className="cast-member">
                    <img
                        src="/src/assets/Cast Photos/JackLefelt.JPEG"
                        alt="Jack Lefelf"
                        className="cast-headshot"
                    />

                    <div className="cast-info">
                        <h2>Ralph de Luca</h2>
                        <h3>Jack Lefelf</h3>
                    </div>
                </section>

                <section className="cast-member">
                    <img
                        src="/src/assets/Cast Photos/Rudy Rodriguez.jpg"
                        alt="Rudy Rodriguez"
                        className="cast-headshot"
                    />

                    <div className="cast-info">
                        <h2>Gio</h2>
                        <h3>Rudy Rodriguez</h3>
                    </div>
                </section>

                <section className="cast-member">
                    <img
                        src="/src/assets/Cast Photos/Lisa-Ginel.jpg"
                        alt="Lisa Ginel"
                        className="cast-headshot"
                    />

                    <div className="cast-info">
                        <h2>Ms. Cortez</h2>
                        <h3>Lisa Ginel</h3>
                    </div>
                </section>

                <section className="cast-member">
                    <img
                        src="/src/assets/Cast Photos/George Scro.jpg"
                        alt="George Scro"
                        className="cast-headshot"
                    />

                    <div className="cast-info">
                        <h2>Peter de Luca</h2>
                        <h3>George Scro</h3>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CastPage;