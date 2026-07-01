import "../css/CrewPage.css";
import CrewPhoto from "/src/assets/Crew Photos/DSCF6997-2.jpg";
import JulianHeadshot from "/src/assets/Crew Photos/Julian Headshot.jpg";
import AlanaHeadshot from "/src/assets/Crew Photos/520A2983.jpg";
import KevinHeadshot from "/src/assets/Crew Photos/Kevin Favorite.jpg";
import MaximoHeadshot from "/src/assets/Crew Photos/520A2928.jpg";
import EduardoHeadshot from "/src/assets/Crew Photos/520A2899.jpg";

const CrewPage = () => {
    return (
        <div className="crew-wrapper">
            <h1>Crew</h1>

            <img
                src={CrewPhoto}
                alt="Full Cast Photos"
                className="full-cast-photo"
            />

            <div className="crew-page">
                <section className="crew-member">
                    <img
                        src={JulianHeadshot}
                        alt="Julian Rodriguez"
                        className="crew-headshot"
                    />

                    <div className="crew-info">
                        <h2>Writer / Director</h2>
                        <h3>Julian Rodriguez</h3>

                        <p>
                            Julian Rodriguez is a filmmaker based in San Diego with a passion for telling stories that thrill 
                            and inspire audiences. Throughout his academic career, Rodriguez has written and directed 
                            numerous films in a variety of genres including horror, drama, and comedy. As a student, he had 
                            the opportunity to be a Film Publicity and Promotions Intern at Allied Global Marketing, in which 
                            he promoted major blockbusters on radio, television, and at live events. Rodriguez also taught 
                            filmmaking to children and teenagers at Media Arts Center San Diego.
                        </p>

                        <p>
                            Overall, Julian Rodriguez is driven towards entertaining audiences and making every short film feel epic.
                        </p>
                    </div>
                </section>

                <section className="crew-member">
                    <img
                        src={AlanaHeadshot}
                        alt="Alana Davis"
                        className="crew-headshot"
                    />

                    <div className="crew-info">
                        <h2>Producer</h2>
                        <h3>Alana Davis</h3>

                        <p>
                            Alana Davis is a graduate from SDSU’S Television, film and New Media Program. During her time at SDSU 
                            she has worked on a number of different projects, as a cinematographer, director and producer. Her 
                            entire life, Alana has had a passion for film making. Creating stories to make people feel seen is 
                            one of the biggest reasons why film making is important to her.
                        </p>
                    </div>
                </section>

                <section className="crew-member">
                    <img
                        src={KevinHeadshot}
                        alt="Kevin Valderrama-Garcia"
                        className="crew-headshot"
                    />

                    <div className="crew-info">
                        <h2>Cinematographer</h2>
                        <h3>Kevin Valderrama-Garcia</h3>

                        <p>
                            Kevin Valderrama-Garcia is in his final semester at San Diego State University majoring in Television, 
                            Film and New Media Production. He has been part of numerous film projects taking on different roles 
                            like editing, production design, DIT, sound and cinematography. He had the privilege to work alongside 
                            many talented people at San Diego State University. Kevin’s passion for filmmaking began when he picked 
                            up photography back in 2021. Kevin’s love for photography has allowed him to truly appreciate the purpose 
                            of films. Kevin believes films are meant to help us feel less alone.
                        </p>
                    </div>
                </section>

                <section className="crew-member">
                    <img
                        src={MaximoHeadshot}
                        alt="Maximo Gutierrez"
                        className="crew-headshot"
                    />

                    <div className="crew-info">
                        <h2>Production Designer</h2>
                        <h3>Maximo Gutierrez</h3>

                        <p>
                            Maximo Gutierrez is in his final semester of the Television, Film, and New Media Studies- Production major 
                            at San Diego State University. Outside of various roles he’s taken on in the film program, his biggest 
                            passion is animation. He’s amassed 30,000 subscribers posting small animations on his personal YouTube 
                            channel, Maximized Animation, hosted and contributed to several large-scale reanimation projects, and 
                            worked with the university’s Aztec Game Lab to create their ninth computer game, Saguaro. He seeks to create 
                            stories that feel emotionally resonant to audiences and brings a striking visual identity to any project he 
                            works on.
                        </p>
                    </div>
                </section>

                <section className="crew-member">
                    <img
                        src={EduardoHeadshot}
                        alt="Eduardo Salas Mata"
                        className="crew-headshot"
                    />

                    <div className="crew-info">
                        <h2>Editor</h2>
                        <h3>Eduardo Salas Mata</h3>

                        <p>
                            Eduardo Salas Mata is a film production student at San Diego State University. He was nominated for an event 
                            promotion at the IBS Conference, recognizing his creativity and storytelling work in media production. In 
                            addition to his academic projects, Eduardo has produced a podcast and an audio drama titled The Unknown, where 
                            he explores narrative storytelling through sound and performance. His work reflects a strong interest in creative 
                            media and innovative ways of engaging audiences through film and audio.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CrewPage;