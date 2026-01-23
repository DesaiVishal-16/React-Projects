import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase/authService";
import { useState } from "react";
import { useUserStore } from "../context/userStore";
import PropTypes from "prop-types";

const AddContact = ({ onClose }) => {
  const [user, setUser] = useState(null);
  const { currentUser } = useUserStore();

  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");

    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("userName", "==", username));
      const querySnapShot = await getDocs(q);

      if (!querySnapShot.empty) {
        setUser(querySnapShot.docs[0].data());
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleAdd = async () => {
    const chatRef = collection(db, "chats");
    const userChatRef = collection(db, "usersChats");

    try {
      const newchatRef = doc(chatRef);
      await setDoc(newchatRef, { createdAt: serverTimestamp(), message: [] });
      await updateDoc(doc(userChatRef, user.id), {
        chats: arrayUnion({
          chatId: userChatRef.id,
          lastMessage: "",
          receiverId: currentUser.id,
          updatedAt: Date.now(),
        }),
      });
      await updateDoc(doc(userChatRef, currentUser.id), {
        chats: arrayUnion({
          chatId: userChatRef.id,
          lastMessage: "",
          receiverId: user.id,
          updatedAt: Date.now(),
        }),
      });
      onClose();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-gray-900 opacity-85 flex flex-col gap-10 px-4 py-4 rounded-lg">
      <div>
        <form onSubmit={handleSearch} className="flex gap-5">
          <input
            className="rounded-sm p-2 text-black"
            type="search"
            name="username"
            placeholder="Username"
            aria-label="Username"
          />
          <button
            type="submit"
            className="text-base font-lg bg-blue-700 hover:bg-blue-500 px-2 rounded-lg"
          >
            Search
          </button>
        </form>
      </div>
      {user && (
        <div className="flex gap-5 items-center">
          <img
            className="w-8 h-8 object-cover rounded-full"
            src={user.avatar || "bg.jpg"}
            alt="User Avatar"
          />
          <h6 className="text-base text-gray-100 capitalize">
            {user.userName}
          </h6>
          <button
            onClick={handleAdd}
            className="text-base font-lg bg-blue-700 hover:bg-blue-500 px-2 py-0.5 ml-20 rounded-md"
          >
            Add User
          </button>
        </div>
      )}
    </div>
  );
};

AddContact.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default AddContact;
