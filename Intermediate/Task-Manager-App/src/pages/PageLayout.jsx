import MainComponent from "../components/MainComponent";
import Sidebar from "../components/Sidebar";

const PageLayout = () => {
  return (
    <div className="flex md:gap-5 bg-inherit justify-center  md:m-10">
      <Sidebar />
      <MainComponent />
    </div>
  );
};

export default PageLayout;
