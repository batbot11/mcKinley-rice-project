import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';

import "./styles.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      marginLeft: "10%",
      color: "#ff9e1a",
      fontWeight: 700,
      fontSize: "24px"
    },
  }),
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="#fff" position="static">
        <Toolbar>
          <Typography className={classes.title}>
            seers
          </Typography>
          <div className="buttons__container">
              <div className="single__button--active">
                <HomeOutlinedIcon className="button__icon" />
                <Button style={{fontSize: "10px"}} color="inherit">Home</Button>
              </div>
              <div className="single__button">
                <PeopleAltOutlinedIcon className="button__icon" />
                <Button style={{fontSize: "10px"}} color="inherit">Patients</Button>
              </div>
              <div className="single__button">
                <CalendarTodayIcon className="button__icon" />
                <Button style={{fontSize: "10px"}} color="inherit">Appointments</Button>
              </div>
              <div className="single__button">
                <MessageOutlinedIcon className="button__icon" />
                <Button style={{fontSize: "10px"}} color="inherit">Messages</Button>
              </div>


          </div>

          <div className="navbar__dot" />

        </Toolbar>
      </AppBar>
    </div>
  );
 }