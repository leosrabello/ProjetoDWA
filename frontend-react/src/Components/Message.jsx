import { useEffect, useState } from "react";

function Message({ msg, onClose }) {

  const [isExiting, setIsExiting] = useState(false);
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  
    useEffect(() => {
      const timer = async () => {
        await sleep(4000);
        setIsExiting(true);
        await sleep(300);
        onClose();
      };
  
      timer();
    }, [onClose]);
  
  
    const isClosing = async() => {
      setIsExiting(true);
      await(new Promise(resolve => setTimeout(resolve, 300)));
      onClose();
    };
  
    return (
      <div className={isExiting ? "bg-green-500/80 fixed top-4 right-4 text-white p-4 rounded shadow z-50 animate-slide-up" : "bg-green-500/80 fixed top-4 right-4 text-white p-4 rounded shadow z-50 animate-slide-down"}>
        <div className="flex justify-between items-center gap-4">
          <p>{msg}</p>
          <button onClick={() => isClosing()} className="font-bold hover:text-black">X</button>
        </div>
      </div>
    );
  }
  
  export default Message;
  