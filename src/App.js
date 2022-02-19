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
              lineHeight: "28px",
              fontSize: 14,
              marginBottom: "100px 0px",
              margin: "30px",
              textAlign: "left",
              color: "#222f3e",
            }}
          >
            <span
              style={{
                fontSize: 40,
                fontWeight: 500,
                fontFamily: "Montserrat",
                color: "black",
              }}
            >
              Hi
            </span>
            , I am Alex and I am currently Tech Lead at{" "}
            <a
              style={{ fontWeight: 600 }}
              href="https://carnallfarrar.com/"
              alt="CF website"
            >
              CF
            </a>{" "}
            where I lead a team of 12 engineers and scientists with a vision to
            build data products that improve the{" "}
            <a
              style={{ fontWeight: 600 }}
              href="https://www.nhs.uk/"
              alt="NHS website"
            >
              NHS
            </a>
            . My main professional driver is to make sure the work I do have
            positive societal impact. I have an extensive background in multiple
            area of the software engineering process. I started my career as a
            designer then shifted into Frontend engineering working for startups
            and more established companies. I, later, extended my skills to
            Backend and Platform engineering and I have now leadership
            experience with strong technical foundations.
          </p>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
