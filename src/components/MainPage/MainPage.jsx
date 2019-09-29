import React from "react";
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import LampBox from "../LampBox/LampBox";
import RightSideBox from "../RightSideBox/RightSideBox";

import "./styles.css";

const MainPage = ({data}) => (
    <React.Fragment>
        <div className="row">
            <div className="col-md-4 col-sm-4 offset-md-2" style={{marginTop: "100px"}} >
                <div className="main__time" >09:14
                </div>
                <div className="main__day">Friday</div>
                <div className="main__date">June 7</div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4 col-sm-4 offset-md-2" style={{marginTop: "30px"}} >
                <div style={{display: "flex", flexFlow: "row", fontSize: "32px"}}>
                    <LampBox icon={<PeopleAltOutlinedIcon  fontSize="inherit" />} text="Patients" number="4" style={{width: "100px"}} />
                    <LampBox icon={<CalendarTodayIcon fontSize="inherit"/>} text="Appointments" number="3" style={{width: "100px"}} />
                    <LampBox icon={<MessageOutlinedIcon fontSize="inherit" />} text="Messages" number="0" style={{width: "100px"}} />
                </div>
            </div>
            <div className="col-md-5 col-sm-5">
                <RightSideBox data={data} />
            </div>
        </div>
    </React.Fragment>
);

export default MainPage;