import React from "react";
import CardWrapper from "../CardWrapper/CardWrapper"
import "./styles.css";

class LoginPage extends React.Component {

    state = {
        isButtonPressed: false,
        data: {
            email: "",
            password: ""    
        }
    }

    handleButtonClick = () => {
        this.setState({...this.state, isButtonPressed: true})
    }

    onInputChange = event => {
        this.setState({
            data: {
               ...this.state.data, [event.target.name]: event.target.value
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.login(this.state.data)
    }


    render () {
        const {isButtonPressed} = this.state;
        return (
        <React.Fragment>
            <div className="login__background" >
                {!isButtonPressed &&
                <React.Fragment>
                <h1 className="login__heading" >
                    Welcome  To McKinley & Rice 
                </h1>

                <button className="login__button" onClick={() => this.handleButtonClick()} >
                    Login
                </button>
                </React.Fragment>
            }

            {isButtonPressed && 
            <CardWrapper style={{width: "500px", height: "250px", 
            backgroundColor: "#fff", padding: "10px 20px",
            borderRadius: "10px"
            }} >
            <form onSubmit={this.onSubmit} >
                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
 
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
    
                
                <button type="submit" className="btn btn-primary float-right">Submit</button>
            </form>
                {/* <form onSubmit={this.onSubmit} >
                    <label htmlFor="email">
                        <input type="email" placeholder="Email" 
                        name="email" 
                        onChange={this.onInputChange}
                        />
                    </label>

                    <label htmlFor="password">
                        <input type="text" placeholder="Password" 
                        name="password"
                        onChange={this.onInputChange}
                        />
                    </label>

                    <button>Submit</button>


                </form> */}

            </CardWrapper>
            }

            </div>
        </React.Fragment>

        )
    }
}

export default LoginPage;