import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import  AuthComp  from "./context/AuthContext";
import  TodoContextPro  from "./context/TodoContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthComp>
      <TodoContextPro>
        <App />
      </TodoContextPro>
    </AuthComp>
  </StrictMode>,
)
