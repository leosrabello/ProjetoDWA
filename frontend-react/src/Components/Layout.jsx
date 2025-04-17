import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { useMessage } from '../Context/MessageContext';
import Message from './Message';

function Layout() {
  const { message, clearMessage } = useMessage();
  console.log("Mensagem atual no Layout:", message);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Toast de mensagem */}
      {message && <Message msg={message} onClose={clearMessage} />}



      <Header />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
