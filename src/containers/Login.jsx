import React from "react";
import api from "../api";
import LoginPage from "../components/LoginPage/LoginPage";
import DashboardPage from "../components/DashboardPage/DashboardPage";

class Login extends React.Component {

    state = {
        response: null
    }

    login = data => {
        api.login(data)
        .then(data => {
            if (data.data) {
                this.setState({response: data.data})
            }
        })
    }

    render () {
        const {response} = this.state;
        return (
            <React.Fragment>
                {!response && <LoginPage login={this.login} />}
                {response && <DashboardPage response={response} />}
            </React.Fragment>
        )
    }
}

export default Login;