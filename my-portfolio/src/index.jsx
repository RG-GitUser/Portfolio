import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import 'semantic-ui-css/semantic.min.css'

import { createRoot } from 'react-dom/client';

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
);

export default App; 

