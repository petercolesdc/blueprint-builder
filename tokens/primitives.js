module.exports = {
  // *****************************************************************
  // COLORS
  // Color palette, set via HEX values that can be converted at
  // build time to any other format (we prefer HSLA)
  // *****************************************************************
  neutral: {
    100: { value: "#F2F3F4", type: "color" },
    200: { value: "#BDC1CA", type: "color" },
    300: { value: "#A4AAB7", type: "color" },
    400: { value: "#8B93A3", type: "color" },
    500: { value: "#5A657B", type: "color" },
    600: { value: "#2F3541", type: "color" },
    black: { value: "#000000", type: "color" },
    white: { value: "#ffffff", type: "color" },
  },
  red: {
    "@": { value: "#E91C24", type: "color" },
    800: { value: "#AD050C", type: "color" },
    100: { value: "#FFEBEE", type: "color" },
  },
  pink: {
    "@": { value: "#A20238", type: "color" },
    800: { value: "#51011C", type: "color" },
    100: { value: "#FFCCDD", type: "color" },
  },
  indigo: {
    "@": { value: "#470063", type: "color" },
    800: { value: "#200430", type: "color" },
    100: { value: "#EDCCFF", type: "color" },
  },
  purple: {
    "@": { value: "#7739d9", type: "color" },
    800: { value: "#411980", type: "color" },
    100: { value: "#E9DBFF", type: "color" },
  },
  blue: {
    "@": { value: "#086Ae3", type: "color" },
    800: { value: "#00408C", type: "color" },
    100: { value: "#CCE3FF", type: "color" },
  },
  cyan: {
    "@": { value: "#85f0f8", type: "color" },
    800: { value: "#00737A", type: "color" },
    100: { value: "#C7FDFF", type: "color" },
  },
  green: {
    "@": { value: "#33A85C", type: "color" },
    800: { value: "#2A8346", type: "color" },
    100: { value: "#DFFBE5", type: "color" },
  },
  yellow: {
    "@": { value: "#FEDC86", type: "color" },
    800: { value: "#FDB90D", type: "color" },
    100: { value: "#FFF1CC", type: "color" },
  },
  orange: {
    "@": { value: "#FE9234", type: "color" },
    800: { value: "#F55200", type: "color" },
    100: { value: "#FFE4CC", type: "color" },
  },
  // *****************************************************************
  // GRADIENTS
  // Set by referencing colors from the palette using {color.token}
  // syntax. Angles are set via the 'angle' prop and assigned in
  // the same manner. The private prop prevents angles from outputting
  // to the rendered files
  // *****************************************************************
  gradient: {
    angle: {
      45: { value: "45deg", private: true },
      60: { value: "60deg", private: true },
      120: { value: "120deg", private: true },
      150: { value: "150deg", private: true },
      220: { value: "220deg", private: true },
    },
    1: {
      value:
        "linear-gradient({gradient.angle.60}, {neutral.100} 0%, {indigo.100} 53%, {pink.100} 100%)",
    },
    2: {
      value:
        "linear-gradient({gradient.angle.120}, {yellow.100} 0%, {orange.100} 53%, {neutral.100} 100%)",
    },
  },
  // *****************************************************************
  // TYPOGRAPHY
  // Set typefaces (family) and weight values
  // Size, leading, tracking, feature-sets etc... should be set
  // at foundation level per application as required
  // *****************************************************************
  font: {
    sans: {
      type: "fontFamily",
      value: ["NexaText", "ui-sans-serif", "system-ui", "sans-serif"],
    },
    mono: {
      type: "fontFamily",
      value: ["Hack", "ui-monospace", "SFMono-Regular", "monospace"],
    },
  },
  fontWeight: {
    light: { value: "300" },
    normal: { value: "400" },
    bold: { value: "700" },
    extrabold: { value: "800" },
  },
  fontFeatures: {
    "@": {
      value: "'kern' 1, 'calt' 1, 'zero' 1, 'locl' 1, 'liga' 1",
    },
    numeric: {
      value: "'kern' 1, 'tnum' 1, 'zero' 1, 'ordn' 1, 'frac' 1",
    },
  },
  // *****************************************************************
  // STROKES
  // Can be applied to borders, outlines, or divide values
  // *****************************************************************
  stroke: {
    "@": { value: "1px", type: "dimension" },
    sm: { value: "2px", type: "dimension" },
    md: { value: "3px", type: "dimension" },
    lg: { value: "5px", type: "dimension" },
  },
  radius: {
    "@": { value: "2px", type: "dimension" },
    xs: { value: "4px", type: "dimension" },
    sm: { value: "8px", type: "dimension" },
    md: { value: "16px", type: "dimension" },
    lg: { value: "32px", type: "dimension" },
    full: { value: "9999px", type: "dimension" },
  },
  // *****************************************************************
  // DEPTH
  // Z-index elevation values
  // *****************************************************************
  elevation: {
    "@": { value: "0" },
    10: { value: "10" },
    20: { value: "20" },
    30: { value: "30" },
    40: { value: "40" },
    50: { value: "50" },
    diminished: { value: "-1" },
  },
  // *****************************************************************
  // Transitions
  // Set durations and easing for animation
  // *****************************************************************
  transition: {
    quickly: { value: "0.05s ease" },
    slowly: { value: "0.02s ease" },
  },
};
