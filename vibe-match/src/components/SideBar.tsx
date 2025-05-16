const SideBar = () => {
  return (
      <aside className="side-menu">
        <p className="side-menu-intro">Match your mood below:</p>
        <a href="/genres" className="side-menu-button">
          Choose your genre here
        </a>
        <a href="/tempo" className="side-menu-button">
          Choose your tempo here
        </a>
        <a href="/danceability" className="side-menu-button">
          Want a Dance? Or not? Choose here
        </a>
        {/* <a href="/era" className="side-menu-button">
          Choose your era here
        </a> */}
        <a href="/help" className="side-menu-button">
          Need some help? Inspiration?
        </a>
      </aside>
  );
}

export default SideBar;