import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
export default function Footer(props) {
  return (
    <>
      <footer className="footer">
        <span style={{ color: "#0074ff" }}>
          <FontAwesomeIcon icon={faCode} />
        </span>
        &nbsp;Developed by{" "}
        <a
          href="https://etchsaleh.github.io"
          target="_blank"
          className="link nav-light"
        >
          <b>etchsaleh</b>
        </a>
      </footer>
    </>
  );
}
