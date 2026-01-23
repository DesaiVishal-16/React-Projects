import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { IoVideocam } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import { GrSearch } from "react-icons/gr";
import { RiUserAddLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import AddContact from "./AddContact";

import { useUserStore } from "../context/userStore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/authService";
import { useChatStore } from "../context/chatStore";

const SidebarChat = () => {
  const [openModal, setOpenModal] = useState(false);
  const [chats, setChats] = useState([]);
  const { currentUser } = useUserStore();
  const { chatId, changeChat } = useChatStore();
  console.log("chatId", chatId);

  useEffect(() => {
    if (!currentUser?.id) return;

    const unsub = onSnapshot(
      doc(db, "usersChats", currentUser.id),
      async (res) => {
        const data = res.data();
        if (!data || !data.chats) return;

        const items = data.chats;

        const promises = items.map(async (item) => {
          const userDocRef = doc(db, "users", item.receiverId);
          const userDocSnap = await getDoc(userDocRef);

          const user = userDocSnap.data();
          return { ...item, user };
        });

        const chatData = await Promise.all(promises);
        setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
      }
    );

    return () => {
      unsub();
    };
  }, [currentUser.id]);

  const addUser = () => {
    setOpenModal(!openModal);
  };
  const handleSelect = async (chat) => {
    changeChat(chat.chatId, chat.user);
  };

  return (
    <nav className="sidebar flex flex-col gap-2 text-white flex-grow  h-full">
      <div className="sidebar-header flex items-center justify-between gap-10 py-5 px-5">
        <div className="user-display-name flex gap-4 items-center">
          <img
            className="w-12 h-12 object-cover rounded-full"
            src={currentUser.avatar || "https://placehold.co/5x5"}
            alt="User Avatar"
          />
          <h1 className="text-base capitalize">{currentUser.userName}</h1>
        </div>
        <div className="icons flex justify-around items-center gap-5">
          <PiDotsThreeOutlineFill className="text-xl" />
          <IoVideocam className="text-xl" />
          <FaUserEdit className="text-xl" />
        </div>
      </div>
      <div className="search-add flex items-center gap-5 relative px-5 py-4">
        <div className="search relative flex-grow">
          <GrSearch className="text-lg text-gray-300 absolute top-1.5 left-2" />
          <input
            className="w-full rounded-sm pl-10 py-0.5 text-white bg-gray-800 border-none outline-none"
            type="search"
            placeholder="Search..."
          />
        </div>
        <button
          className="border-none rounded-sm p-1 bg-gray-800"
          onClick={addUser}
        >
          <RiUserAddLine className="text-xl" />
        </button>
        <div className="addUser-modal absolute top-20 left-6">
          {openModal && <AddContact onClose={() => setOpenModal(false)} />}
        </div>
      </div>
      <div className="friend-lists py-3 overflow-y-auto h-full hide-scrollbar scroll-smooth">
        <ul className="flex flex-col gap-5">
          {chats.map((chat) => (
            <li
              onClick={() => handleSelect(chat)}
              key={chat.id}
              className="flex gap-5 items-center border-b-2 border-gray-500 px-5 py-4 cursor-pointer"
            >
              <img
                className="w-10 h-10 object-cover rounded-full"
                src={chat.user?.avatar || "https://placehold.co/5x5"}
                alt="Chat User Avatar"
              />
              <div className="friend-name">
                <h4 className="text-base text-gray-100 capitalize">
                  {chat.user?.userName}
                </h4>
                <span className="text-sm text-gray-300">
                  {chat.lastMessage}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SidebarChat;
