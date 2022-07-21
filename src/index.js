import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./styles.css";

const newRoot = createRoot(document.getElementById("root"));

newRoot.render(<App />);
