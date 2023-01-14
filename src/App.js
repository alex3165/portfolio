import React, { Component } from "react";
import "./App.css";
import { Footer } from "./Footer";
import { Main } from "./Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main
          style={{
            flex: 1,
            maxWidth: 600,
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ padding: 20, margin: 60 }}>
            <h2 style={{ marginLeft: 60 }}>Head of Engineering</h2>
            <h2>Technical Lead</h2>
            <h2 style={{ marginLeft: 100 }}>Software Engineer</h2>
          </div>

          <p
            style={{
              lineHeight: "30px",
              fontSize: 16,
              marginBottom: "100px 0px",
              margin: "30px",
              textAlign: "left",
              color: "#222f3e",
            }}
          >
            My name is Alexandre Rieux and I am currently Head of Engineering at{" "}
            <a
              style={{ fontWeight: 600, color: "#c29980" }}
              target="_blank"
              href="https://hertilityhealth.com/"
              alt="Hertility website"
            >
              Hertilityhealth
            </a>{" "}
            where I am responsible for leading a team of 6 talented software
            engineers.
            <br />
            <br />
            As an experienced engineering leader with over 8 years in the field,
            I have honed my technical skills across various aspects of software
            engineering, including frontend, fullstack, and platform
            engineering. My passion lies in creating innovative digital products
            that address challenges in the areas of healthtech and greentech.
            <br />
            <br />
            In my current role, I have actively contributed to the company's
            growth of 450% by expanding the team from 2 to 6 members. I have
            successfully established an engineering culture and implemented a
            modern distributed software platform.
            <br />
            <br />
            In the past, I have effectively set up frontend architecture and
            delivered multiple high-quality React web applications, which I
            successfully deployed to millions of users. I have also built highly
            scalable event-driven platforms, capable of handling a high volume
            of events daily. In another business, I have expertly built a data
            and engineering team, with a career framework and new infrastructure
            for a healthtech consultancy firm.
            <br />
            <br />
            My ability to communicate effectively and my empathy for others
            allow me to understand people's feeling and bring people toward
            achievements. I am a highly curious and thoughtful problem solver,
            who leads and motivates teams towards successful achievements.
          </p>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
