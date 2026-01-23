import { useEffect } from "react";
import UserChats from "./UserChats";
import SignUpLogin from "./SignUpLogin";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/authService";
import { useUserStore } from "../context/userStore";

const PageLayout = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });
    return () => {
      unSub();
    };
  }, [fetchUserInfo]);
  if (isLoading)
    return (
      <div className="loading text-4xl text-gray-100 flex justify-center items-center h-screen font-semibold rounded-xl px-4 py-2">
        Loading...
      </div>
    );
  console.log(currentUser);
  return (
    <div className="page-layout flex justify-center h-screen pt-10">
      <div className="user-interface flex bg-gray-900 bg-opacity-75 backdrop-blur-lg  w-5/6 h-5/6 rounded-xl overflow-hidden">
        {currentUser ? <UserChats /> : <SignUpLogin />}
      </div>
    </div>
  );
};

export default PageLayout;
