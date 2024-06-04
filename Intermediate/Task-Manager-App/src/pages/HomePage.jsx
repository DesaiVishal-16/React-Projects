import MainComponent from "../components/MainComponent";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  return (
    <div className="flex gap-5 text-white lg:m-10">
      <Sidebar />
      <MainComponent />
    </div>
  );
};

export default HomePage;
