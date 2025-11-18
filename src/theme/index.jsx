import { createTheme } from "flowbite-react";

const customTheme = createTheme({
  // avatar
  avatar: {
    root: {
      base: "flex justify-center items-center space-x-4 rounded",
      bordered: "p-1 ring-2",
      rounded: "rounded-full",
      color: {
        primary: "ring-black bg-black",
        secondary: "ring-gray-800 bg-white",
      },
      img: {
        off: "relative overflow-hidden bg-black",
        on: "rounded-full",
        placeholder: "absolute w-auto h-auto text-white -bottom-1",
      },
      size: {
        xs: "w-6 h-6",
        sm: "w-8 h-8",
        md: "w-10 h-10",
        lg: "w-12 h-12",
        xl: "w-16 h-16",
      },
    },
  },
  
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
    field: {
      input: {
        base: "w-full px-4 py-2.5 text-sm rounded-full border border-border bg-white text-gray-700 placeholder-gray-500 focus:ring-1 focus:ring-focus focus:border-focus focus:outline-none",
        colors: {
          primary: "border-border focus:ring-focus focus:border-focus",
          error: "border-red-500 bg-red-50 focus:ring-red-500 focus:border-red-500",
        },
        sizes: {
          sm: "text-sm py-2",
          md: "text-base py-2.5",
        },
      },
    },
  },

  // table
  table: {
    root: {
      base: "w-full text-left text-sm",
      shadow: "",
      wrapper: "relative bg-white rounded-lg border border-gray-200 overflow-hidden"
    },
    body: {
      base: "group/body divide-y divide-gray-200",
      cell: {
        base: "px-6 py-4 text-sm text-gray-900"
      }
    },
  head: {
    base: "group/head",
    cell: {
      base: "!bg-[#F1F4F9] px-6 py-3 text-left text-sm font-medium !text-gray-600 uppercase"
    }
  },
    row: {
      base: "group/row bg-white",
      hovered: "hover:!bg-gray-50/50",
      striped: ""
    }
  },
  
  // sidebar
  sidebar: {
    root: {
      base: "h-full !bg-white",
      inner: "h-full overflow-y-auto overflow-x-hidden !bg-white px-3 py-4"
    },
    collapse: {
      button: "group flex w-full items-center rounded-lg p-2 text-base font-normal !text-gray-900 transition duration-75 hover:!bg-[#9B2C2C]/10 hover:!text-[#9B2C2C]",
      icon: {
        base: "h-6 w-6 !text-gray-500 transition duration-75 group-hover:!text-[#9B2C2C]",
        open: {
          off: "",
          on: "!text-gray-900"
        }
      },
    },
    item: {
      base: "flex items-center rounded-lg p-2 text-base font-normal !text-gray-900 hover:!bg-[#9B2C2C]/10 hover:!text-[#9B2C2C] group transition-colors duration-150",
      active: "!bg-[#9B2C2C] !text-white",
      icon: {
        base: "h-6 w-6 flex-shrink-0 !text-gray-500 transition duration-75 group-hover:!text-[#9B2C2C]",
        active: "!text-white"
      },
      content: {
        base: "flex-1 whitespace-nowrap px-3"
      }
    },
    items: {
      base: "!bg-white"
    },
    itemGroup: {
      base: "space-y-2 !bg-white !border-0"
    }
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