import { createContext, useContext, useState } from 'react';

// 1. Criar o contexto
const ErrorContext = createContext();

// 2. Criar o provider
export function ErrorProvider({ children }) {
  const [errorMsg, setErrorMsg] = useState(null);

  function showError(msg) {
    setErrorMsg(msg);
  }

  function clearError() {
    setErrorMsg(null);
  }

  return (
    <ErrorContext.Provider value={{ errorMsg, showError, clearError }}>
      {children}
    </ErrorContext.Provider>
  );
}

// 3. Criar um hook para facilitar
export function useError() {
  return useContext(ErrorContext);
}
