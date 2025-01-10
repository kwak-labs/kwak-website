module.exports = {
  plugins: [
    require("flowbite/plugin"),
    require("daisyui"),
    require("@tailwindcss/typography"),
  ],
  content: [
    "./components/**/*.{vue,css}",
    "./pages/**/*.{vue,css}",
    "./layouts/**/*.{vue,css}",
    "./assets/**/*.{vue,css}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Nunito Sans", "sans-serif"],
      serif: ["ui-serif", "Georgia"],
      mono: ["Iosevka Aile Web", "monospace"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
    },
  },
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables

    themes: ["sunset"],
  },
};
