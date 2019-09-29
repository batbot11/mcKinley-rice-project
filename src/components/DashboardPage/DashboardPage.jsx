import React from "react";
import Navbar from "../Navbar/Navbar";
import MainPage from "../MainPage/MainPage";

const DashboardPage = ({response}) => (
    <React.Fragment>
        <Navbar/>
        <MainPage data={response} />
    </React.Fragment>
);

export default DashboardPage;