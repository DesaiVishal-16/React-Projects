import { useState } from "react";
import { useAuth } from "../context/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { handleLogin, handleGoogleSignIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin(email, pass);
    } catch (error) {
      throw new Error(error.message);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center relative right-20 bottom-2">
      <h1 className="text-gray-300 text-center text-lg pt-2">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col pl-16 mt-4 gap-6">
        <input
          className="outline-none w-96 bg-inherit border-b-2 rounded  text-white font-lg"
          type="text"
          placeholder="email"
          name="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="outline-none w-96 bg-inherit border-b-2 rounded text-white font-lg"
          type="password"
          placeholder="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />
        <button
          type="submit"
          className="text-base w-full font-semibold text-gray-100 bg-blue-800 py-1 px-2 hover:bg-blue-500 rounded-2xl"
        >
          Login
        </button>
        <button
          onClick={handleGoogleSignIn}
          className="text-base w-full font-semibold text-gray-100 bg-blue-800 py-1 px-2 hover:bg-blue-500 rounded-2xl"
        >
          Log in with Google
        </button>
        <button
          onClick={handleGoogleSignIn}
          className="text-base w-full font-semibold text-gray-100 bg-blue-800 py-1 px-2 hover:bg-blue-500 rounded-2xl"
        >
          Login as Guest
        </button>
      </form>
    </div>
  );
};

export default Login;
