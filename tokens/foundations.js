module.exports = {
  // *****************************************************************
  // SCREEN SIZES
  // Screen width values, set in pixels, where the design has the
  // option to change. Use with global media queries
  // *****************************************************************
  screens: {
    xs: { value: "320px", type: "dimension" },
    sm: { value: "640px", type: "dimension" },
    md: { value: "768px", type: "dimension" },
    lg: { value: "1024px", type: "dimension" },
    xl: { value: "1280px", type: "dimension" },
    "2xl": { value: "1536px", type: "dimension" },
    "3xl": { value: "1800px", type: "dimension" },
  },
  // *****************************************************************
  // SPACING
  // Divisional values to separate elements from each other. Use for
  // padding, margin, and gap values.
  // Be mindful of the box-model, as this has an impact on how spacing
  // is rendered and whether it its additive or subtractive
  // *****************************************************************
  spacing: {
    0: { value: "0", type: "dimension" },
    0.5: { value: "1px", type: "dimension" },
    1: { value: "2px", type: "dimension" },
    2: { value: "4px", type: "dimension" },
    3: { value: "8px", type: "dimension" },
    4: { value: "12px", type: "dimension" },
    5: { value: "16px", type: "dimension" },
    6: { value: "20px", type: "dimension" },
    7: { value: "28px", type: "dimension" },
  },
  // *****************************************************************
  // TYPOGRAPHY
  // Typeface, weight and style values are inherited from primitives
  // Set type values that deal with leading (line-height),
  // tracking (letter spacing), and font size here.
  // *****************************************************************
  leading: {
    none: { value: "1" },
    tightest: { value: "1.2" },
    tight: { value: "1.3" },
    normal: { value: "1.4" },
  },
  tracking: {
    normal: { value: "0", type: "dimension" },
    tight: { value: "-1px", type: "dimension" },
    wide: { value: "1px", type: "dimension" },
    xwide: { value: "1.5px", type: "dimension" },
  },
  text: {
    xs: { value: "clamp(0.625rem, 0.5921rem + 0.1645vw, 0.75rem)" },
    sm: { value: "clamp(0.875rem, 0.8421rem + 0.1645vw, 1rem)" },
    base: { value: "clamp(1rem, 0.9671rem + 0.1645vw, 1.125rem)" },
    lg: { value: "clamp(1.375rem, 1.0789rem + 1.4803vw, 2.5rem)" },
    xl: { value: "clamp(2.875rem, 2.7763rem + 0.4934vw, 3.25rem)" },
    "2xl": { value: "clamp(4.25rem, 3.9704rem + 1.398vw, 5.3125rem)" },
  },
  // *****************************************************************
  // DEPTH
  // Z-index values
  // *****************************************************************
  depth: {
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
