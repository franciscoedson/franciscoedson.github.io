import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
  {
    path: "/",
    title: "Home",
    content: pageLoader(() => import("./home.md"))
  },
  { 
    title: "Introdução",
    pages: [
      {
        path: "/introducao",
        title: "Introdução",
        content: pageLoader(() => import("./intro.md"))
      },
      {
        path: "/cor",
        title: "Cor",
        content: pageLoader(() => import("./cor.md"))
      },
    ]
  }
];

ReactDOM.render(
  <Catalog title="Catalog" pages={pages} />,
  document.getElementById("catalog")
);
