import MainComponent from "../components/MainComponent";
import Sidebar from "../components/Sidebar";

const PageLayout = () => {
  return (
    <div className="flex gap-5 bg-inherit  md:m-10">
      <Sidebar />
      <MainComponent />
    </div>
  );
};

export default PageLayout;
