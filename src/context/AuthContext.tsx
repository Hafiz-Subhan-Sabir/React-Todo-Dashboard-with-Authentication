import React,{useContext, createContext, useState} from "react";

interface User {
    name : string;
    email: string;
}

interface AuthContextProp{
    user: User | null;
    login: (u: User) => void;
    logout : () => void;
}

const AuthContext = createContext<AuthContextProp | null>(null);

const AuthComp : React.FC<{children: React.ReactNode}> = ({children}) =>{
    const [user, setUser] = useState<User| null>(null);
    const login = (u: User) =>{
        setUser(u);
    }
    const logout = () =>{
        setUser(null);
    }
    return(
        <>
        <AuthContext.Provider value={{user, login, logout}} >{children}</AuthContext.Provider>
        </>
    )
}

export default AuthComp;

export const useAuth = ()=>{
    const context = useContext(AuthContext);
    if(!context) throw new Error("UseAuth must be used inside AuthComp");
    return context;
}; 