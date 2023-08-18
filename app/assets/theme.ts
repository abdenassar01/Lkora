export const light: ThemeType = {
  background: "#F7F7F7",
  main: "#0074e9",
  text: "white",
  textInverted: "#0d1c30",
  helperText: "#B6B6B6",
};

export const dark: ThemeType = {
  background: "#18191A",
  main: "#0074e9",
  text: "#242526",
  textInverted: "#E4E6EB",
  helperText: "#B6B6B6",
};

export type ThemeType = {
  background: string;
  main: string;
  text: string;
  textInverted: string;
  helperText: string;
};
