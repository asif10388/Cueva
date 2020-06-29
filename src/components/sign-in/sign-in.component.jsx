import React from 'react';
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email:'', password:''})
        } catch (error) {
            console.log(error);
        }
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
                    <FormInput type="email" name="email" value = {this.state.email}  handleChange = {this.handleChange} label = "email" />
                    {/* <label>Email</label> */}

                    <FormInput type="password" name="password" value = {this.state.password} handleChange = {this.handleChange} label = "password" />
                    {/* <label>Password</label> */}

                    <CustomButton type="submit">
                        Sign In
                    </CustomButton>
                    <CustomButton onClick = {signInWithGoogle} isGoogleSignIn>     
                        Sign In With Google
                    </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;