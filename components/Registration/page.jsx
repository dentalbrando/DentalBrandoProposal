import Login from "@components/Registration/Login";
import loginSvg from "@public/assets/loginSvg2.svg";
import ChangePassword from "./ChangePassword";

function Registration(prop) {
  let { setTokenVerifierTrigger, tokenVerifierTrigger, setUserId } = prop;
  return (
    <div className="w-screen h-screen custom-bg">
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="flex items-center w-[80%] h-[80%] rounded-2xl overflow-hidden custom-bg bg-white shadow-xl">
          <img src={loginSvg.src} alt="" className="w-7/12 h-[100%]" />
          {/* <Login
            setTokenVerifierTrigger={setTokenVerifierTrigger}
            tokenVerifierTrigger={tokenVerifierTrigger}
            setUserId={setUserId}
          /> */}
          <ChangePassword />
        </div>
      </div>
    </div>
  );
}

export default Registration;
