import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { useMessage } from '../Context/MessageContext';
import { useError } from '../Context/ErrorContext';
import Message from './Message';
import ErrorMessage from './ErrorMessage';

function Layout() {
  const { message, clearMessage } = useMessage();
  const { errorMsg, clearError } = useError();

  return (
    <div className="min-h-screen flex flex-col relative">
      {message && <Message msg={message} onClose={clearMessage} />}
      {errorMsg && <ErrorMessage msg={errorMsg} onClose={clearError} />}

      <Header />
      <main className="flex-1 p-4">
        <Outlet context={{ searchTerm }} /> 
      </main>
      
      <Footer />
    </div>
  );
}

export default Layout;
