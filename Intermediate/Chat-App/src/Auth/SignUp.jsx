import { useState } from "react";
import { useAuth } from "../context/useAuth";
import { FcAddImage } from "react-icons/fc";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });
  const [error, setError] = useState(null); // Track any errors
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setAvatar({
        file,
        url: URL.createObjectURL(file),
      });
    } else {
      setError("Please select a valid image file.");
    }
  };

  const { handleSignUp, handleGoogleSignIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state before submission
    setIsLoading(true); // Set loading state
    try {
      await handleSignUp(userName, email, pass, avatar);
      // Optionally redirect the user to the chat app after successful sign-up
      // router.push('/chatapp'); or display a success message
    } catch (error) {
      setError(error.message); // Set the error message in state
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="flex flex-col justify-center items-center relative top-4 left-10">
      <h1 className="text-gray-300 text-center text-lg pt-2">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col pl-16 mt-4 gap-6">
        <input
          className="outline-none rounded w-60 md:w-96 bg-inherit border-b-2 text-white"
          type="text"
          placeholder="Display name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />

        <input
          className="outline-none w-60 md:w-96 bg-inherit border-b-2 rounded  text-white font-lg"
          type="text"
          placeholder="Email"
          name="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="outline-none w-60 md:w-96 bg-inherit border-b-2 rounded text-white font-lg"
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />

        <input
          className="hidden"
          onChange={handleFileChange}
          type="file"
          id="file"
          accept="image/*"
        />

        <label
          className="text-white text-lg flex gap-2 cursor-pointer"
          htmlFor="file"
        >
          <FcAddImage className="text-2xl" />
          Add Avatar

          {avatar.url && (
          <img src={avatar.url} alt="avatar preview" className="w-7 h-7" />
        )}
        </label>

        

        <button
          type="submit"
          className="text-base w-full font-semibold text-gray-100 bg-blue-800 py-1 px-2 hover:bg-blue-500 rounded-2xl"
          disabled={isLoading} // Disable button during loading
        >
          {isLoading ? "Signing Up..." : "Sign Up"}
        </button>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="text-base w-full font-semibold text-gray-100 bg-blue-800 py-1 px-2 hover:bg-blue-500 rounded-2xl"
          disabled={isLoading}
        >
          Sign Up with Google
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>} {/* Display errors */}
    </div>
  );
};

export default SignUp;

