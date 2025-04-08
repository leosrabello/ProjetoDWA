function ErrorMessage({ msg, onClose }) {
    return (
      <div className="bg-red-500/80 fixed top-4 right-4 text-white p-4 rounded shadow z-50">
        <div className="flex justify-between items-center gap-4">
          <p>{msg}</p>
          <button onClick={onClose} className="font-bold hover:text-black">X</button>
        </div>
      </div>
    );
  }
  
  export default ErrorMessage;
  