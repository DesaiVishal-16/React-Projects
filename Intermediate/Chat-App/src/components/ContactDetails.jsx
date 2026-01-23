import { IoMdArrowDropupCircle, IoMdArrowDropdownCircle } from "react-icons/io";
import { BsFileArrowDownFill } from "react-icons/bs";
import { auth } from "../firebase/authService";

const ContactDetails = () => {
  return (
    <div className="contact-details flex-grow py-5 overflow-y-scroll overflow-x-hidden border-l-2 border-gray-500 hide-scrollbar scroll-smooth pb-10">
      <div className="contact-details-header border-b border-gray-500 pb-5">
        <ul className="friend-name flex flex-col justify-center items-center gap-5">
          <li className="img">
            <img className="w-20 rounded-full" src="https://placehold.co/5x5" />
          </li>
          <li className="flex flex-col text-center gap-4">
            <h4 className="text-2xl text-gray-50 font-semibold">FirstName</h4>
            <span className="text-base text-gray-300">
              Lorem ipsum dolor sit amet co.
            </span>
          </li>
        </ul>
      </div>
      <div className="settings">
        <ul className="flex flex-col">
          <li className="border-b-2 border-gray-600 flex justify-between items-center py-4 px-5">
            <span className="text-base text-gray-100">Chat Setting</span>
            <IoMdArrowDropupCircle className="text-xl text-gray-100" />
          </li>
          <li className="border-b-2 border-gray-600 flex justify-between items-center py-4 px-5">
            <span className="text-base text-gray-100">Chat Setting</span>
            <IoMdArrowDropupCircle className="text-xl text-gray-100" />
          </li>
          <li className="border-b-2 border-gray-600 flex justify-between items-center py-4 px-5">
            <span className="text-base text-gray-100">Chat Setting</span>
            <IoMdArrowDropupCircle className="text-xl text-gray-100" />
          </li>
        </ul>
      </div>
      <div className="shred-photos flex flex-col border-b-2 border-gray-600 pb-4">
        <h1 className="flex justify-between items-center px-5 py-4">
          <span className="text-gray-100 text-base">Shared Photo</span>
          <IoMdArrowDropdownCircle className="text-xl text-gray-100" />
        </h1>
        <ul className="flex flex-col gap-4">
          <li className="flex justify-between items-center px-5">
            <div className="flex gap-3">
              <img className="w-5 rounded-sm" src="bg.jpg" />
              <span className="text-sm text-gray-100">photo_1.jpg</span>
            </div>
            <BsFileArrowDownFill className="text-xl text-gray-100 rounded-full" />
          </li>
          <li className="flex justify-between items-center px-5">
            <div className="flex gap-3">
              <img className="w-5 rounded-sm" src="bg.jpg" />
              <span className="text-sm text-gray-100">photo_1.jpg</span>
            </div>
            <BsFileArrowDownFill className="text-xl text-gray-100 rounded-full" />
          </li>
          <li className="flex justify-between items-center px-5">
            <div className="flex gap-3">
              <img className="w-5 rounded-sm" src="bg.jpg" />
              <span className="text-sm text-gray-100">photo_1.jpg</span>
            </div>
            <BsFileArrowDownFill className="text-xl text-gray-100 rounded-full" />
          </li>
          <li className="flex justify-between items-center px-5">
            <div className="flex gap-3">
              <img className="w-5 rounded-sm" src="bg.jpg" />
              <span className="text-sm text-gray-100">photo_1.jpg</span>
            </div>
            <BsFileArrowDownFill className="text-xl text-gray-100 rounded-full" />
          </li>
        </ul>
      </div>
      <div className="shred-files border-b-2 border-gray-600">
        <h1 className="flex justify-between items-center py-4 px-5">
          <span className="text-base text-gray-100">Shared Files</span>
          <IoMdArrowDropupCircle className="text-xl text-gray-100" />
        </h1>
      </div>
      <div className="block-signout-btn mt-5 px-2 py-2 flex flex-col gap-3">
        <button className="text-gray-100 font-semibold text-base border-none w-full rounded-sm bg-red-900 hover:bg-red-700">
          Block User
        </button>
        <button
          onClick={() => auth.signOut()}
          className="text-gray-100 font-semibold text-base border-none w-full rounded-sm bg-blue-800 hover:bg-blue-500"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default ContactDetails;
