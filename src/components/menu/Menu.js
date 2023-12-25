import "./Menu.css";

export default function Menu({ page, setPage }) {
  return (
    <nav>
      <button className="page_btn" onClick={() => setPage("team")}>
        <h4>გუნდი</h4>
        <span className={page === "team" ? "active_page" : ""}></span>
      </button>
      <button className="page_btn" onClick={() => setPage("projects")}>
        <h4>პროექტები</h4>
        <span className={page === "projects" ? "active_page" : ""}></span>
      </button>
      <button className="page_btn" onClick={() => setPage("contact")}>
        <h4>კონტაქტი</h4>
        <span className={page === "contact" ? "active_page" : ""}></span>
      </button>
      <button className="join" onClick={() => setPage("join_club")}>
        <h4>შემოგვიერთდი</h4>
      </button>
    </nav>
  );
}
