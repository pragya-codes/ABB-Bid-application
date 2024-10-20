import React from 'react';
import LoginForm from './LoginForm';
import SocialLoginButtons from '../../Components/SocialLoginButtons';

function LoginPage() {
  return (
    <div className="flex ">
      <div className="flex flex-1 flex-col pl-20 pt-10">
        <LoginForm />
        <SocialLoginButtons />
      </div>
      <div className=" flex-1 ">
        <img
          loading="lazy"
          src="./src/assets/signup.png"
          alt="SignUp page illustration"
          className="object-contain scale-75 "
        />
      </div>
    </div>
  );
}

export default LoginPage;