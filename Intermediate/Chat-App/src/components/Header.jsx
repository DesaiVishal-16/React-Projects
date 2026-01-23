import { useState } from "react";
import { AiOutlineWechat } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  function handleNavigation() {
    if (login) {
      navigate("/");
      setLogin(false);
    } else {
      navigate("login");
      setLogin(true);
    }
  }
  return (
    <nav className="bg-blue-950 flex justify-between items-center py-2 md:py-3 px-4 md:px-10">
      <div className="flex gap-4">
        <h1 className="text-xl md:text-3xl text-white">Chatify</h1>
        <AiOutlineWechat className="text-3xl md:text-4xl fill-white" />
      </div>

      <button
        onClick={handleNavigation}
        className="text-lg font-semibold md:text-xl text-white bg-blue-500  py-1 px-2 md:py-2 md:px-4 hover:bg-blue-700 rounded-md"
      >
        {login ? "SignUp" : "Login"}
      </button>
    </nav>
  );
};

export default Header;
