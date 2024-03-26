import Login from "@components/Registration/Login";
import loginSvg from "@public/assets/loginSvg3.svg";

function Registration(prop) {
  let { setTokenVerifierTrigger, tokenVerifierTrigger, setUserId } = prop;
  return (
    <div className="w-screen h-screen custom-bg">
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="flex items-center w-[80%] h-[80%] justify-evenly rounded-2xl overflow-hidden">
          <img src={loginSvg.src} alt="" className="custom-bg w-[50%] h-[100%]" />
          <Login
            setTokenVerifierTrigger={setTokenVerifierTrigger}
            tokenVerifierTrigger={tokenVerifierTrigger}
            setUserId={setUserId}
          />
        </div>
      </div>
    </div>
  );
}

export default Registration;
