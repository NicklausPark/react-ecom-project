import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
<<<<<<< HEAD
import "./sign-in-and-sign-out.styles.scss";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
=======
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-in-and-sign-out.styles.scss";

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
>>>>>>> updated sign-in and sign-up components and firebase utils
  </div>
);

export default SignInAndSignUpPage;
