import React from "react";

const label = {
  textAlign: "left",
  fontSize: 16,
};

const column = {
  flex: 1,
  listStyleType: "none",
  textAlign: "left",
};

const item = {
  margin: "10px 0px",
};

const wrapper = {
  margin: "10px",
  color: "#333",
};

export const Main = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      flex: "1",
      margin: "60px auto",
      maxWidth: 720,
    }}
  >
    <div style={wrapper}>
      <h2 style={label}>Projects:</h2>
      <ul style={column}>
        <li style={item}>
          <a
            href="https://monumap.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Monumap
          </a>
          : Travel inspirations from UNESCO sites
        </li>
        <li style={item}>
          <a
            href="https://giistr.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Giistr
          </a>
          : Find Github issues to contribute to
        </li>
        <li style={item}>
          <a
            href="https://github.com/trainline/react-skeletor"
            target="_blank"
            rel="noopener noreferrer"
          >
            React-skeletor
          </a>
          : React skeleton loading library
        </li>
        <li style={item}>
          <a
            href="https://github.com/alex3165/react-mapbox-gl"
            target="_blank"
            rel="noopener noreferrer"
          >
            React-mapbox-gl
          </a>
          : React Mapbox webgl library
        </li>
      </ul>
    </div>
    <div style={wrapper}>
      <h2 style={label}>Articles:</h2>
      <ul style={column}>
        <li style={item}>
          <a
            rel="noopener noreferrer"
            href="https://codeburst.io/five-tips-i-wish-i-knew-when-i-started-with-typescript-c9e8609029db"
            target="_blank"
          >
            Five tips I wish I knew when I started with Typescript
          </a>
        </li>
        <li style={item}>
          <a
            rel="noopener noreferrer"
            href="https://codeburst.io/build-rich-map-experiences-with-mapbox-and-react-fa13d2c814de"
            target="_blank"
          >
            Build rich map experiences with Mapbox and React
          </a>
        </li>
        <li style={item}>
          <a
            rel="noopener noreferrer"
            href="https://codeburst.io/achieve-skeleton-loading-with-react-a12404678030"
            target="_blank"
          >
            Achieve skeleton loading with React
          </a>
        </li>
      </ul>
    </div>
  </div>
);
