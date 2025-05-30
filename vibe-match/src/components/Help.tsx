import Header from "./Header";
import SideBar from "./SideBar";

const Help = () => {
    return (
            <div className="app-container">
                <SideBar />
                <div className="main-content">
                    <Header />
                    <main className="help-grid">
                        <h2 className="help-subtitle">Not sure what to do? </h2>
                        <p className="help-para">
                            Vibe Match will curate a playlist to match your mood, so you don't
                            have to keep skipping songs that aren't what you're feeling. You
                            can set what vibe you want by
                            searching the name of a song and let us do the heavy lifting!{" "}
                        </p>
                        <p className="help-para">
                            The sidebar to your left will let you choose a category to
                            complement your vibe, and if you click the button below it will
                            take you back to the song input. Happy vibing! 🎶{" "}
                        </p>
                        <a href="/" id="back-button" className="help-back">
                            Want to go back to songs?
                        </a>
                    </main>
                </div>
            </div>
    );
};

export default Help;
