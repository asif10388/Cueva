import React from 'react';
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password:''})
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className = "sign-in">
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit = {this.handleSubmit}>
                    <FormInput type="email" name="email" value = {this.state.email}  handleChange = {this.handleChange} label = "email" required/>
                    {/* <label>Email</label> */}

                    <FormInput type="password" name="password" value = {this.state.password} handleChange = {this.handleChange} label = "password" required/>
                    {/* <label>Password</label> */}

                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;