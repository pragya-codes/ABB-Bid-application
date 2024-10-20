import React from "react";

import SocialLoginButtons from "../../Components/SocialLoginButtons";
import SignUpForm from "./SignUpForm";

function SignUpPage() {
  return (
    <div className="flex">
      <div className="flex flex-col ml-28 ">
        <SignUpForm />
        <SocialLoginButtons />
      </div>
      <div >
        <img
          loading="lazy"
          src="./src/assets/signup.png"
          alt="SignUp page illustration"
          className="object-contain scale-75"
        />
      </div>
    </div>
  );
}

export default SignUpPage;
