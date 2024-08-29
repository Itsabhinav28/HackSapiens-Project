/**
=========================================================
* व्यवसाय-NidhiReact - v2.2.0
=========================================================

* Product Page: JAATproduct/material-dashboard-react
* Copyright 2023 RAM (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// व्यवसाय-NidhiReact base styles
import typography from "assets/theme-dark/base/typography";
import colors from "assets/theme-dark/base/colors";

// व्यवसाय-NidhiReact helper functions
import rgba from "assets/theme-dark/functions/rgba";

const { size } = typography;
const { white } = colors;

const dialogContentText = {
  styleOverrides: {
    root: {
      fontSize: size.md,
      color: rgba(white.main, 0.8),
    },
  },
};

export default dialogContentText;
