import { DefaultTheme } from "styled-components";

export const getTableStyles = (theme: DefaultTheme) => ({
  headRow: {
    style: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.white,
      fontSize: "14px",
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px",
    },
  },
  headCells: {
    style: {
      justifyContent: "center",
      fontFamily: theme.font.family.heading,
      fontSize: theme.font.size.h2,
      fontWeight: theme.font.weight.medium,
      textTransform: "uppercase" as const,
    },
  },
  cells: {
    style: {
      color: theme.colors.text,
      backgroundColor: theme.colors.background,
      justifyContent: "center",
      fontFamily: theme.font.family.heading,
      fontSize: theme.font.size.h3,
      fontWeight: theme.font.weight.medium,
    },
  },
  rows: {
    style: {
      backgroundColor: theme.colors.background,
      height: "49px",
    },
  },
});

