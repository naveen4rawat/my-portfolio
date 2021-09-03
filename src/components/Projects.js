import React from "react";
import "../style/project.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import amazonclone from "../images/amazonclone.png";
import whatsappclone from "../images/whatsappclone.png";
import pathfinder from "../images/pathfinder.png";

function Projects() {
  return (
    <div className="projects" id="Projects">
      <h1>My Projects</h1>
      <div className="project">
        <div className="project_detail">
          <h1>Amazon Clone</h1>
          <p>
            I code this Amazon Clone using reactjs. You can add products to the
            basket in real time. Basket total auto update in real time. Login
            done by email. Payment gateway using stripe.js. The database take
            order details and user information.
          </p>
          <div className="project_icon">
            <div className="live_demo">
              <a href="https://clone-4d551.web.app/" target="_blank">
                <button>Live Demo</button>
              </a>
            </div>
            <a href="https://www.github.com/naveen4rawat" target="_blank">
              <GitHubIcon className="githubicon" />
            </a>
          </div>
        </div>
        <div className="project_image">
          <img src={amazonclone} alt="" />
        </div>
      </div>
      <div className="project">
        <div className="project_detail">
          <h1>Whatsapp Clone</h1>
          <p>
            I code this Whatsapp Clone using Nextjs. You can Sign In with Google
            authentication and chat with anyone with their email id. It support
            one to one messages. All chats update in real time.
          </p>
          <div className="project_icon">
            <div className="live_demo">
              <a href="https://whatsapp-2-0-ten.vercel.app" target="_blank">
                <button>Live Demo</button>
              </a>
            </div>
            <a
              href="https://github.com/naveen4rawat/whatsapp-2.0"
              target="_blank"
            >
              <GitHubIcon className="githubicon" />
            </a>
          </div>
        </div>
        <div className="project_image">
          <img src={whatsappclone} alt="" />
        </div>
      </div>
      <div className="project">
        <div className="project_detail">
          <h1>Path finder</h1>
          <p>
            This fun project is code with vanilla JavaScript(no framework). You
            can find the shortest path between two nodes and can create wall for
            path finder.
          </p>
          <div className="project_icon">
            <div className="live_demo">
              <a
                href="https://naveen4rawat.github.io/pathfinder"
                target="_blank"
              >
                <button>Live Demo</button>
              </a>
            </div>
            <a
              href="https://github.com/naveen4rawat/naveen4rawat.github.io"
              target="_blank"
            >
              <GitHubIcon className="githubicon" />
            </a>
          </div>
        </div>
        <div className="project_image">
          <img src={pathfinder} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
