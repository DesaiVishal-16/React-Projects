import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import Notification from "../components/notification/Notification";

const SignUpLogin = () => {
  return (
    <div className="flex flex-col mt-4 items-center gap-5 w-full min-h-screen">
      <Notification />
      <h1 className="text-4xl font-semibold text-gray-50">Chatify</h1>
      <p className="text-base text-gray-300 text-center w-9/12">
        A seamless and intuitive chat application designed for real-time
        communication, featuring user-friendly interfaces, instant
        notifications, and secure messaging to keep you connected effortlessly.
      </p>
      <div className="flex justify-center items-stretch w-full">
        <Login />
        <div className="vertical-line block h-full w-0.5 bg-gray-500 mt-8"></div>
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpLogin;
