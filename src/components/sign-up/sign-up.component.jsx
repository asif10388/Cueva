import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { Link } from "react-router-dom";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords Don't Match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      // <div className = "sign-up">
      //     <h1>I do not have an account</h1>
      //     <span>Sign up with your email and password</span>
      //     <form className ="sign-up-from" onSubmit = {this.handleSubmit}>

      //         <FormInput type="text" name="displayName" value = {displayName}  handleChange = {this.handleChange} label = "Display Name" required/>

      //         <FormInput type="email" name="email" value = {email}  handleChange = {this.handleChange} label = "email" required/>

      //         <FormInput type="password" name="password" value = {password} handleChange = {this.handleChange} label = "Password" required/>

      //         <FormInput type="password" name="confirmPassword" value = {confirmPassword} handleChange = {this.handleChange} label = "Confirm Password" required/>

      //         <CustomButton type="submit">
      //             Sign Up
      //         </CustomButton>
      //     </form>
      // </div>
      <section class="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
        <header class="max-w-lg mx-auto">
          <a href="https://www.google.com">
            <h1 class="text-4xl font-bold text-white text-center">
              Gadget Ahead
            </h1>
          </a>
        </header>

        <main class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
          <section>
            <h3 class="font-bold text-2xl">Welcome to Gadget Ahead</h3>
            <p class="text-gray-600 pt-2">Sign up for an account.</p>
          </section>

          <section class="mt-10">
            <form class="flex flex-col" onSubmit={this.handleSubmit}>
              <div class="mb-6 pt-3 rounded bg-gray-200">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2 ml-3"
                  for="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                  type="text"
                  name="displayName"
                  value={displayName}
                  onChange={this.handleChange}
                />
              </div>
              <div class="mb-6 pt-3 rounded bg-gray-200">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2 ml-3"
                  for="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                  value={this.state.email}
                  name="email"
                  onChange={this.handleChange}
                />
              </div>
              <div class="mb-6 pt-3 rounded bg-gray-200">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2 ml-3"
                  for="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  label="password"
                />
              </div>
              <div class="mb-6 pt-3 rounded bg-gray-200">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2 ml-3"
                  for="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                  onChange={this.handleChange}
                  label="password"
                  name="confirmPassword"
                  value={confirmPassword}
                />
              </div>
              <button
                class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </section>
        </main>

        <div class="max-w-lg mx-auto text-center mt-12 mb-6">
          <p class="text-white">
            Already have an account?{" "}
            <Link to="/signin" class="font-bold hover:underline text-white">
              Sign In
            </Link>
            .
          </p>
        </div>
      </section>
    );
  }
}

export default SignIn;
