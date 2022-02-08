import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";
import Link from "next/link";
import { useContext } from "react";
import MyContext from "store/my-context";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import Modal from "components/Modal";
import { HiInformationCircle } from "react-icons/hi";
import Image from "next/image";

export default function Login() {
  const { signHandler } = useContext(MyContext);
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState("password");

  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState("");

  const [passwordValue, setPasswordValue] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const emailChange = (e) => {
    setEmailValue(e.target.value);
    e.target.value < 1 ? setEmailError("Email is required") : setEmailError("");
  };
  const passwordChange = (e) => {
    setPasswordValue(e.target.value);
    e.target.value < 1
      ? setPasswordError("Password is required")
      : setPasswordError("");
  };

  const emailBlur = () => {
    emailValue < 1 ? setEmailError("Email is required") : setEmailError("");
  };
  const passwordBlur = () => {
    passwordValue < 1
      ? setPasswordError("Password is required")
      : setPasswordError("");
  };

  const showPasswordHandler = () => {
    showPassword === "password"
      ? setShowPassword("text")
      : setShowPassword("password");
  };

  return (
    <div className="overflow-hidden">
      <div className=" themainbackground">
        <div className="formbg">
          <h1 className="signinlogo">BIG-PIC</h1>
          <div className="formbackground ">
            <div className="thesigninheader">
              <p className="signinheader">Login your account</p>
              <button className="skipbutton" onClick={() => setShowModal(true)}>
                Important
                <HiInformationCircle className="text-white text-xl mt-1" />
              </button>
            </div>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
              <Image
                src="/images/thankyou.webp"
                className="mx-auto"
                width={200}
                height={200}
                alt="emoji"
              />
              Hello, thanks for checking out my web app. I made this a dummy
              form due to people who might be much concern of their privacy. You
              can play with the form and see how interactive it is. Thanks ❤❤
              <br />
              <button
                onClose={() => setShowModal(false)}
                className="mt-10 justify-self-end p-1 bg-red-600 text-white px-2 rounded-md shadow-md font-bold"
              >
                Close
              </button>
            </Modal>
            <Link href="/" passHref>
              <button className="formicon">
                <FcGoogle />
                <p className="continuesignin">Continue with Google</p>
              </button>
            </Link>
            <Link href="/" passHref>
              <button className="formicon mb-4">
                <BsTwitter className="text-blue-700" />
                <p className="continuesignin">Continue with Twitter</p>
              </button>
            </Link>
            <div>
              <hr />
              <p className="orform">OR</p>
              <hr />
            </div>

            <div>
              <label className="formlabel"> Email </label>
              <input
                type="email"
                className="forminput"
                placeholder="Emter your password"
                onChange={emailChange}
                onBlur={emailBlur}
                value={emailValue}
              />
              {<p className="formerror">{emailError}</p>}
            </div>
            <div className="mt-6 w-full">
              <label htmlFor="myInput" className="formlabel">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword}
                  placeholder="Enter your password"
                  className="forminput"
                  onChange={passwordChange}
                  onBlur={passwordBlur}
                  value={passwordValue}
                />
                {<p className="formerror">{passwordError}</p>}

                <button
                  type="submit"
                  onClick={showPasswordHandler}
                  className="absolute top-5 right-4 text-xl"
                >
                  {showPassword === "password" && <AiOutlineEye />}
                  {showPassword === "text" && <AiOutlineEyeInvisible />}
                </button>
              </div>
            </div>
            <Link href="/" passHref>
              <button className="formbutton" onClick={signHandler}>
                Login your account
              </button>
            </Link>

            <p className="belowbutpara">
              Don't have an account?
              <Link href="/signup">
                <a className="belowbutton"> Sign up here</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
