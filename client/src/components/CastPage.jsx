import "../css/CastPage.css";

const CastPage = () => {
    return (
        <div className="cast-page">
            <h1>Cast</h1>

            <h2>Benny de Luca</h2>
                <h3>Giancarlo Lugo</h3>
                    <img
                        src="/assets/Cast Photos/Giancarlo Lugo headshot1a.jpg"
                        alt="Giancarlo Lugo"
                        className="cast-headshot"
                    />

            <h2>Ralph de Luca</h2>
                <h3>Jack Lefelf</h3>
                    <img
                        src="/assets/Cast Photos/JackLefelt.JPEG"
                        alt="Jack Lefelf"
                        className="cast-headshot"
                    />

            <h2>Gio</h2>
                <h3>Rudy Rodriguez</h3>
                    <img
                        src="/assets/Cast Photos/Rudy Rodriguez.jpg"
                        alt="Rudy Rodriguez"
                        className="cast-headshot"
                    />

            <h2>Ms. Cortez</h2>
                <h3>Lisa Ginel</h3>
                    <img
                        src="/assets/Cast Photos/Lisa-Ginel.jpg"
                        alt="Lisa Ginel"
                        className="cast-headshot"
                    />

            <h2>Peter de Luca</h2>
                <h3>George Scro</h3>
                    <img
                        src="/assets/Cast Photos/George Scro.jpg"
                        alt="George Scro"
                        className="cast-headshot"
                    />
        </div>
    )

}

export default CastPage;