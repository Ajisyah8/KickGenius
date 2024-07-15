/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-secondary-white": "#fff",
        antiquewhite: "rgba(238, 221, 204, 0.21)",
        "color-primary-lightbrown": "#eeddcc",
        "color-primary-dark-brown": "#34251f",
        gray: {
          "100": "rgba(52, 37, 31, 0.9)",
          "200": "rgba(52, 37, 31, 0.12)",
        },
        gainsboro: "#ebdede",
        dimgray: {
          "100": "#665952",
          "200": "rgba(102, 89, 82, 0.09)",
        },
      },
      spacing: {},
      fontFamily: {
        lato: "Lato",
        "frank-ruhl-libre": "'Frank Ruhl Libre'",
      },
    },
    fontSize: {
      lg: "18px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      xl: "20px",
      base: "16px",
      "49xl": "68px",
      "22xl": "41px",
      "35xl": "54px",
      "59xl": "78px",
      "28xl": "47px",
      "43xl": "62px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
