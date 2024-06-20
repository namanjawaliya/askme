type ChatSectionProps = {
  chats: { text: string; action: string }[];
};

const ChatSection: React.FC<ChatSectionProps> = ({ chats }) => {
  return (
    <div className="flex flex-col">
      {chats.map(({ text, action }, index) => (
        <div
          key={index}
          className={`max-w-xl p-2 rounded-md ${
            action === "user" ? "self-start text-left" : "self-end text-right"
          }`}
        >
          <p className="text-md">{text}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatSection;
