import { useState } from "react";
import ChatLayout from "../Layouts/ChatLayout";
import ChatSideBar from "../components/ChatSideBar";
import ChatContent from "../components/ChatContent";

export default function ChatPage() {
  const [navOpen, setNavOpen] = useState(false);
  const handleNavOpen = () => {
    setNavOpen(true);
    console.log(navOpen);
  };
  return (
    <ChatLayout>
      <ChatSideBar isOpen={navOpen} />
      <ChatContent onOpenNav={handleNavOpen} />
    </ChatLayout>
  );
}
