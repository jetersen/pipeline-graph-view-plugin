import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./app";
import { resetEnvironment } from "../common/reset-environment";

resetEnvironment();
const root = document.getElementById("root");
ReactDOM.render(<App />, root);
