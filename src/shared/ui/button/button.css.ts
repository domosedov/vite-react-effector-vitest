import { style } from "@vanilla-extract/css";

export const button = style({
  backgroundColor: "blue",
  color: "white",
  paddingTop: "0.5rem",
  paddingRight: "2rem",
  paddingBottom: "0.5rem",
  paddingLeft: "2rem",
  borderRadius: "0.25rem",
  borderWidth: 0,
  transitionProperty: "all",
  transitionDuration: "0.5s",
  cursor: "pointer",

  ":hover": {
    backgroundColor: "red",
  },
});
