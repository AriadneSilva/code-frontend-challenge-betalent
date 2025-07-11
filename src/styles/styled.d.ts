import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      background?: string;
      text: string;
      tableHeader?: string;
      tableText?: string;
      border: string;
      white: string;
    };
    font: {
      family: {
        base: string;
        heading: string;
      };
      size: {
        h1: string;
        h2: string;
        h3: string;
        base: string;
      };
      weight: {
        regular: number;
        medium: number;
      };
    };
  }
}

//  font: {
//     family: {
//       base: "'Roboto', sans-serif",
//       heading: "'Helvetica', sans-serif",
//     },
//     size: {
//       h1: "20px",
//       h2: "16px",
//       h3: "16px",
//       base: "14px",
//     },
//     weight: {
//       regular: 400,
//       medium: 500,
//     },
//   },
