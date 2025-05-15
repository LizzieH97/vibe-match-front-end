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
                            can set how long the playlist is, what vibe you want or even just
                            put a song in and let us do the heavy lifting!{" "}
                        </p>
                        <p className="help-para">
                            The sidebar to your left will let you choose a category to
                            complement your vibe, and if you click the button below it will
                            take you back to the song input. Happy vibing! 🎶{" "}
                        </p>