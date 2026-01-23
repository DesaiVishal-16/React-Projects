import { IoVideocam } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { HiPhoto } from "react-icons/hi2";
import { MdPhotoCamera } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import EmojiPicker from "emoji-picker-react";
import { useState, useRef, useEffect } from "react";
import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/authService";
import { useChatStore } from "../context/chatStore";
import { useUserStore } from "../context/userStore";

const MainChat = () => {
  const [showEmo, setShowEmo] = useState(false);
  const [text, setText] = useState("");
  const [chat, setChat] = useState();
  const endRef = useRef(null);
  const { chatId, user } = useChatStore();

  const { currentUser } = useUserStore();

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data());
    });
    return () => {
      unsub();
    };
  }, [chatId]);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setShowEmo(false);
  };
  const handleSend = async () => {
    if (text === "" || !chatId || chatId === "usersChats") {
      console.log("invalid chat ID ewmpty meessage");
      return;
    }
    try {
      const chatRef = doc(db, "chats", chatId);
      const chatDoc = await getDoc(chatRef);
      const messageData = {
        senderId: currentUser.id,
        text,
        createdAt: new Date(),
      };
      if (!chatDoc.exists()) {
        await setDoc(chatRef, { message: [messageData] });
      }
      await updateDoc(chatRef),
        {
          message: arrayUnion({}),
        };
      const userIDs = [currentUser.id, user.id];

      for (const id of userIDs) {
        const userChatRef = doc(db, "userChats", id);
        const userChatsSnapshot = await getDoc(userChatRef);

        if (userChatsSnapshot.exists()) {
          const userChatsData = userChatsSnapshot.data();
          const chatIndex = userChatsData.chats.findIndex(
            (c) => c.chatId === chatId
          );

          if (chatIndex !== -1) {
            userChatsData.chats[chatIndex].lastMessage = text;
            userChatsData.chats[chatIndex].isSeen = id === currentUser.id;
            userChatsData.chats[chatIndex].updatedAt = Date.now();

            await updateDoc(userChatRef, {
              chats: userChatsData.chats,
            });
          }
        }
      }

      setText(""); // Clear the input after sending
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  return (
    <div className="main-chat text-white border-l-2 border-gray-500 w-1/2 flex flex-col">
      <nav className="main-chat-header px-5 py-5 border-b border-gray-500">
        <ul className="friend-name flex items-center gap-5 relative">
          <li className="">
            <img className="w-14 rounded-full" src="https://placehold.co/5x5" />
          </li>
          <li className="flex flex-col">
            <h4 className="text-xl text-gray-50 font-semibold">FirstName</h4>
            <span className="text-base text-gray-300">
              Lorem ipsum dolor sit amet co.
            </span>
          </li>
          <li className="flex items-center gap-4 absolute right-0">
            <FaPhoneAlt className="text-xl" />
            <IoVideocam className="text-2xl" />
            <IoIosInformationCircle className="text-2xl" />
          </li>
        </ul>
      </nav>

      <main className="flex flex-col flex-grow relative">
        <div className="messages flex-grow py-2 px-2 overflow-y-scroll hide-scrollbar scroll-smooth relative">
          {chat?.message?.map((message) => (
            <div
              key={message?.createAt}
              className="user-other flex items-center relative mb-12"
            >
              {message.img && (
                <img className="w-6 rounded-full" src={message.img} />
              )}
              <div className="flex flex-col relative top-10 left-2">
                <h4 className="text-gray-100 text-base bg-gray-800 border-none px-3 py-2 rounded-lg w-9/12">
                  {message.text}
                </h4>
              </div>
            </div>
          ))}{" "}
          <div ref={endRef}></div>
        </div>
        <div className="chating-field flex items-center gap-4 p-4 border-t border-gray-500">
          <HiPhoto className="text-4xl cursor-pointer" />
          <MdPhotoCamera className="text-4xl cursor-pointer" />
          <FaMicrophone className="text-xl cursor-pointer" />
          <input
            className="w-full py-2 px-5 bg-gray-700 border-none outline-none rounded-md"
            type="text"
            placeholder="Type Message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="emoji relative">
            <MdEmojiEmotions
              className="text-4xl cursor-pointer"
              onClick={() => setShowEmo(!showEmo)}
            />
            {showEmo && (
              <div className="absolute bottom-full right-0 z-10">
                <EmojiPicker onEmojiClick={handleEmoji} />
              </div>
            )}
          </div>
          <button
            onClick={handleSend}
            className="border-none rounded-md px-4 py-1 bg-blue-500 hover:bg-blue-400 text-lg font-semibold"
          >
            Send
          </button>
        </div>
      </main>
    </div>
  );
};

export default MainChat;
