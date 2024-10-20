import React from 'react';
import LoginForm from './LoginForm';
import SocialLoginButtons from '../../Components/SocialLoginButtons';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate= useNavigate();
  return (
    <div className="flex ">
      <div className="flex items-center flex-1 flex-col pl-20 pt-10">
        <LoginForm />
        
        <p className="font-semibold pt-2">Don't have an Account? <button onClick={()=>{navigate("/signup")}} className="text-blue-700">Sign Up Here!</button></p>
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