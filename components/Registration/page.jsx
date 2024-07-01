import Login from "@components/Registration/Login";
import loginImage from "@public/assets/loginImage2.svg";
import ChangePassword from "./ChangePassword";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Registration(prop) {
  let { setTokenVerifierTrigger, tokenVerifierTrigger, setUserId } = prop;
  let [loginToggle, setLoginToggle] = useState(true);
  const dispatch = useDispatch();
 
  return (
    <div className="w-screen h-screen custom-bg">
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="flex items-center w-[80%] h-[80%] rounded-2xl overflow-hidden custom-bg bg-white shadow-xl">
          <div className="w-7/12 h-[100%] flex justify-center items-center p-24">
            <img src={loginImage.src} alt="" />
          </div>
          <div className="flex flex-col justify-center w-5/12 h-full custom-bg">
            {loginToggle ? (
              <Login
                setTokenVerifierTrigger={setTokenVerifierTrigger}
                tokenVerifierTrigger={tokenVerifierTrigger}
                setUserId={setUserId}
              />
            ) : (
              <ChangePassword />
            )}
            <button
              className="text-start text-blue-600 hover:underline px-3 text-xl py-5 mx-5 w-fit"
              onClick={() => setLoginToggle(!loginToggle)}
            >
              {loginToggle ? "Change Password" : "Go to Login Page"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
