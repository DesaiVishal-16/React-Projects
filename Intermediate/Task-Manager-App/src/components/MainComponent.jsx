import Header from "./Header";
import useTheme from "../context/useTheme";
import { useState } from "react";
import Modal from "../Model/Modal";

const MainComponent = () => {
  const { theme } = useTheme();

  const [isOpenModal, setIsOpenModal] = useState(false);
  function handleOpenModal() {
    setIsOpenModal(!isOpenModal);
  }
  function handleCloseModal() {
    setIsOpenModal(false);
  }
  return (
    <div
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      className="bg-zinc-800 border-2 border-gray-600 rounded-lg w-full md:w-5/6 overflow-hidden p-5 md:p-10 my-20 mx-2 md:w-full lg:my-0"
    >
      <Header onOpen={handleOpenModal} />

      <div className="modal">
        {isOpenModal && <Modal onClose={handleCloseModal} />}
      </div>
    </div>
  );
};

export default MainComponent;
