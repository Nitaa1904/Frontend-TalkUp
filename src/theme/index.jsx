import { createTheme } from "flowbite-react";

const customTheme = createTheme({
  // button
  button: {
    base: "font-medium text-center transition-colors inline-block",
    color: {
      primary: "bg-primary text-white hover:opacity-90",
      secondary:
        "bg-white text-primary border border-primary hover:bg-gray-50",
    },
    size: {
      sm: "px-4 py-2 text-sm rounded-full",
      md: "px-6 py-2 text-base rounded-full",
      lg: "px-8 py-4 text-lg rounded-full",
    },
  },

  // label
  label: {
    root: {
      base: "text-md font-normal font-inter",
      disabled: "opacity-50",
      colors: {
        primary: "text-gray-900",
        error: "text-red-700",
      },
    },
  },

  // text input
  textInput: {
    base: "block w-full",
    field: {
      base: "rounded-lg border",
      input: {
        base: "px-3 py-2",
        sizes: {
          sm: "text-sm",
          md: "text-base",
        },
        colors: {
          primary: "border-gray-50 bg-white",
          error: "border-red-500 bg-red-50",
        },
      },
    },
  },

  // navbar
  navbar: {
    root: {
      base: `
        top-0 left-0 w-full z-50 transition-all duration-300 
        !bg-white shadow-none
      `,
      scrolled: "fixed bg-white shadow-md",
      container: "w-full max-w-screen-xl mx-auto px-4 py-4",
    },
    brand: {
      base: "flex items-center space-x-3",
      img: "h-6",
    },
    toggle: {
      base: "!text-secondary hover:!bg-gray-100 transition",
    },
    collapse: {
      base: `
        font-inter md:flex md:items-center md:space-x-8 md:flex-1 
        md:justify-end transition-all duration-300 ease-in-out
      `,
    },
    link: {
      base: `
        block py-3 px-4 text-sm transition !text-secondary 
        border-b border-default last:border-b-0 
        md:border-0 md:px-0 md:py-0 md:mt-2 md:mb-2 
        hover:text-white hover:bg-primary 
        md:hover:text-secondary md:hover:bg-transparent 
        md:hover:font-bold
      `,
      active: {
        on: "font-bold",
        off: "font-normal",
      },
    },
  },

  // footer
  footer: {
    root: {
      base: "!bg-primary text-white font-inter !rounded-none",
      container: `
        w-full max-w-screen mx-auto px-6 py-10 md:py-14 
        flex flex-col items-center
      `,
    },
    brand: {
      base: "flex justify-center mb-4",
      img: "h-12",
    },
    linkGroup: {
      base: `
        flex flex-wrap justify-center items-center gap-6 
        text-sm font-medium
      `,
      link: "text-white hover:text-gray-200 transition-colors",
    },
  },
});

export default customTheme;