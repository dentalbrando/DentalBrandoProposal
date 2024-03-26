import Login from "@components/Registration/Login";
// import loginSvg from "@public/assets/loginSvg.svg";
import loginSvg from "@public/assets/loginSvg2.svg";

function Registration(prop) {
  let { setTokenVerifierTrigger, tokenVerifierTrigger, setUserId } = prop;
  return (
    <div className="w-screen h-screen custom-bg">
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="flex items-center w-[80%] h-[80%] justify-evenly p-5 custom-bg rounded-2xl">
          <img src={loginSvg.src} alt="" width={"50%"} className="" />
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
