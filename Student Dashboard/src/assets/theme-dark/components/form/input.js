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

// व्यवसाय-NidhiReact Base Styles
import colors from "assets/theme-dark/base/colors";
import typography from "assets/theme-dark/base/typography";
import borders from "assets/theme-dark/base/borders";

// व्यवसाय-NidhiReact Helper Functions
import rgba from "assets/theme-dark/functions/rgba";

const { info, inputBorderColor, dark, grey, white } = colors;
const { size } = typography;
const { borderWidth } = borders;

const input = {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      color: dark.main,

      "&:hover:not(.Mui-disabled):before": {
        borderBottom: `${borderWidth[1]} solid ${rgba(inputBorderColor, 0.6)}`,
      },

      "&:before": {
        borderColor: rgba(inputBorderColor, 0.6),
      },

      "&:after": {
        borderColor: info.main,
      },

      input: {
        color: white.main,

        "&::-webkit-input-placeholder": {
          color: grey[100],
        },
      },
    },
  },
};

export default input;
