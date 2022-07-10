import React from "react";
import { makeStyles } from "@mui/styles";
// this is our component
export default function Question6() {
  const useStyles = makeStyles(() => ({
    root: {
      backgroundColor: "blue",
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <Field className={classes.root} />
    </div>
  );
}

const Field = ({ className }) => {
  return (
    <div>
      <div className={className}>I am specific child</div>
    </div>
  );
};
