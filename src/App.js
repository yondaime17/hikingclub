import Header from "./components/header/Header";
import "./styles.css";
import grass from "./media/img/grass.png";
import Team from "./components/team/Team";
import { useState } from "react";
import Contact from "./components/contact/Contact";
import JoinClub from "./components/joinClub/JoinClub";
import Projects from "./components/projects/Projects";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="App">
      <Header setPage={setPage} page={page} />
      <div className="content">
        {page === "team" ? (
          <Team />
        ) : page === "contact" ? (
          <Contact />
        ) : page === "projects" ? (
          <Projects />
        ) : page === "join_club" ? (
          <JoinClub />
        ) : (
          <h2 className="slogan">
            <strong>გახდი მოლაშქრე!</strong>
          </h2>
        )}
      </div>
      <h6 className="copyright">
        © Copyright 2023 Hiking Guides Association of Ajara
      </h6>
      <div className="art">
        <img src={grass} alt="Ajara Hiking Club" />
      </div>
    </div>
  );
}
