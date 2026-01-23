import { createContext } from "react";
import PropTypes from "prop-types";
import { signUp, signUpWithGoogle, login } from "../firebase/authService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const handleSignUp = async (userName, email, pass, avatar) => {
    try {
      const user = await signUp(userName, email, pass, avatar);
      toast.success("Sucessfully SingUp");
      console.log(user);
      return user.user;
    } catch (error) {
      toast.warn("SignUp Failed");
      throw new Error(error.message);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      await signUpWithGoogle();
    } catch (error) {
      throw new Error(error.message);
    }
  };
  const handleLogin = async (email, pass) => {
    try {
      const credential = await login(email, pass);
      toast.success("Sucessfully Login");
      return credential.user;
    } catch (error) {
      toast.warn("Login Failed");
      throw new Error(error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{ handleSignUp, handleGoogleSignIn, handleLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
