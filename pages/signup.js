import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import MyContext from "store/my-context";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { HiInformationCircle } from "react-icons/hi";
import Modal from "components/Modal";
import Image from "next/image";

//.
//.
//.

export default function Signup() {
  //.
  const { signHandler } = useContext(MyContext);
  const [showPassword, setShowPassword] = useState("password");
  const [showModal, setShowModal] = useState(false);

  const [nameValue, setNameValue] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState("");

  const [passwordOneValue, setPasswordOneValue] = useState("");
  const [passwordOneError, setPasswordOneError] = useState("");
  const [passwordTwoValue, setPasswordTwoValue] = useState("");
  const [passwordTwoError, setPasswordTwoError] = useState("");

  const nameChange = (e) => {
    setNameValue(e.target.value);
    e.target.value < 1 ? setNameError("Name is required") : setNameError("");
  };

  const nameBlur = () => {
    nameValue < 1 ? setNameError("Name is required") : setNameError("");
  };

  const emailChange = (e) => {
    setEmailValue(e.target.value);
    e.target.value < 1 ? setEmailError("Name is required") : setEmailError("");
  };

  const emailBlur = () => {
    emailValue < 1 ? setEmailError("Email is required") : setEmailError("");
  };

  const passwordOneChange = (e) => {
    setPasswordOneValue(e.target.value);
    e.target.value < 1
      ? setPasswordOneError("Name is required")
      : setPasswordOneError("");
  };

  const passwordOneBlur = () => {
    passwordOneValue < 1
      ? setPasswordOneError("Password is required")
      : setPasswordOneError("");
  };

  const passwordTwoChange = (e) => {
    setPasswordTwoValue(e.target.value);
    e.target.value < 1
      ? setPasswordTwoError("Name is required")
      : setPasswordTwoError("");
    e.target.value !== passwordOneValue
      ? setPasswordTwoError("Password didnot match")
      : setPasswordTwoError("");
  };

  const passwordTwoBlur = () => {
    passwordTwoValue < 1
      ? setPasswordTwoError("Password is required")
      : setPasswordTwoError("");
  };

  const showPasswordHandler = () => {
    showPassword === "password"
      ? setShowPassword("text")
      : setShowPassword("password");
  };

  return (
    <div className="h-full bg-gradient-to-br from-red-700 to-red-400 w-full py-16 ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="signinlogo">BIG-PIC</h1>

        <div className="bg-white shadow rounded lg:w-2/6 md:w-9/12  smw-11/12 p-10 mt-5">
          <p className="signinheader">Create a new account</p>
          <button
            className="bg-red-600 rounded-md px-2  py-1 flex text-white"
            onClick={() => setShowModal(true)}
          >
            Important
            <HiInformationCircle className="text-white text-xl mt-1" />
          </button>
          <Modal show={showModal} onClose={() => setShowModal(false)}>
            <Image
              src="/images/thankyou.webp"
              className="mx-auto"
              width={200}
              height={200}
              alt="emoji"
            />
            Hello, thanks for checking out my web app. I made this a dummy form
            due to people who might be much concern of their privacy. You can
            play with the form and see how interactive it is. Thanks ❤❤
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
            <label className="formlabel"> Name </label>
            <input
              type="text"
              className="forminput"
              placeholder="John Doe"
              onChange={nameChange}
              onBlur={nameBlur}
              value={nameValue}
            />
            <p className="formerror">{nameError}</p>
          </div>
          <div>
            <label className="formlabel"> Email </label>
            <input
              type="email"
              className="forminput"
              placeholder="john@gmail.com "
              onChange={emailChange}
              onBlur={emailBlur}
              value={emailValue}
            />
            <p className="formerror">{emailError}</p>
          </div>
          <div className="mt-6 w-full">
            <label htmlFor="myInput" className="formlabel">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword}
                placeholder="Enter a strong password"
                className="forminput"
                value={passwordOneValue}
                onChange={passwordOneChange}
                onBlur={passwordOneBlur}
              />
              <p className="formerror">{passwordOneError}</p>
              <button
                type="button"
                onClick={showPasswordHandler}
                className="absolute top-5 right-4 text-xl"
              >
                {showPassword === "password" && <AiOutlineEye />}
                {showPassword === "text" && <AiOutlineEyeInvisible />}
              </button>
            </div>
          </div>
          <div className="mt-6 w-full">
            <label htmlFor="myInput" className="formlabel">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showPassword}
                placeholder="Confirm your password"
                className="forminput"
                value={passwordTwoValue}
                onChange={passwordTwoChange}
                onBlur={passwordTwoBlur}
              />
              <p className="formerror">{passwordTwoError}</p>
              <button
                type="button"
                onClick={showPasswordHandler}
                className="absolute top-5 right-4 text-xl"
              >
                {showPassword === "password" && <AiOutlineEye />}
                {showPassword === "text" && <AiOutlineEyeInvisible />}
              </button>
            </div>
          </div>
          <Link href="/" passHref>
            <button onClick={signHandler} className="formbutton">
              Create my account
            </button>
          </Link>
          <p className="belowbutpara">
            Already have an account?
            <Link href="/login">
              <a className="belowbutton"> Login here</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
