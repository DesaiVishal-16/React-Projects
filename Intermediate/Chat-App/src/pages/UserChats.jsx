import ContactDetails from "../components/ContactDetails";
import MainChat from "../components/MainChat";
import SidebarChat from "../components/SidebarChat";
import { useChatStore } from "../context/chatStore";

const UserChats = () => {
   const { chatId } = useChatStore();
      console.log(chatId);
  return (
    <div className="user-chats flex flex-grow h-full">
      <SidebarChat /> 
      
      {chatId && (
        <>
          <MainChat />
          <ContactDetails />
        </>
      )}
      
    </div>
  );
};

export default UserChats;
