import React from "react";
import Calendar from "react-calendar";
import { makeStyles } from "@material-ui/core/styles";
import "react-calendar/dist/Calendar.css";

const useStyles = makeStyles(theme => ({
  calendar: {
    
  
    borderWidth: `0 !important`,
    Width: `30em !important`,
    height: `20em !important`,
    "& .react-calendar__viewContainer": {
      "& .react-calendar__tile--active": {
        borderRadius: "4px",
        backgroundColor: `white !important`,
        color: `#f6ba06 !important`
      },
      "& .react-calendar__tile--now": {
        color: `white!important`,
      backgroundColor: `black !important`
      }
    },
    "& .react-calendar__navigation": {
      backgroundColor: "#1f2222",
      "& .react-calendar__navigation__arrow": {
        color: "white",
        "&:enabled": {
          "&:hover, &:focus": {
            backgroundColor: `#1f2222 !important`
          }
        }
      },
      "& .react-calendar__navigation__label": {
        color: "#000",
        "&:enabled": {
          "&:hover, &:focus": {
            backgroundColor: `#1f2222 !important`
          }
        }
      }
    }
  }
}));

export default function App() {
  const classes = useStyles();
  return <Calendar className={classes.calendar}  />;
}
