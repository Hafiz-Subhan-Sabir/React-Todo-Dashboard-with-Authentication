// import React, { useState } from "react"

// const App : React.FC = ()=> {
//   type FormData = {
//     name : string;
//     email: string;
//     password: string;
//   };
//   const onhandle = (e:React.ChangeEvent<HTMLInputElement>)=>{
//     e.preventDefault();
//     setformData({...formData, [e.target.name] : e.target.value});
//   };
//   const onsubmission = (e:React.FormEvent) =>{
//     e.preventDefault()
//     if(!formData.name || !formData.email || !formData.password){
//       seterror("All Fields are requried! Fill it.");
//       return;
//     }
//     if(!formData.email.includes('@')){
//       seterror("Enter a valid Email Address!");
//       return;
//     }
//     seterror(undefined);
//     console.log("Form Submitted: ",formData);
//   }
//   const [formData, setformData] = useState<FormData>({ name :" ", email: " ", password: ""});
//   const [error, seterror] = useState<string | undefined>(undefined);
//   return (
//     <div>
//       <h2 className="text-xl font-bold">Sign Up</h2>
//       {error && <p className="text-red-500 text-sm">{error}</p>}
//       <form onSubmit={onsubmission} className="bg-gray-400 hover:bg-white-400">
//         <label>Name</label>
//         <input name="name" value={formData.name} onChange={onhandle} type="text" placeholder="Enter Name"/>
//         <label>Email</label>
//         <input name="email" value={formData.email} onChange={onhandle} type="email" placeholder="Enter Email"/>
//         <label>Password</label>
//         <input name="password" value={formData.password} onChange={onhandle} type="password" placeholder="Enter Password"/>
//         <button type="submit" className="bg-green-400 cursor-pointer text-yellow-400 rounded-lg">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App;

// import React,{useState, useEffect} from "react";
// type Posts = {
//   id: number;
//   title: string;
//   body: string;
// };

// const App : React.FC = ()=>{
//   const [post, setPost] = useState<Posts[]>([]);
//   const [error, setError] = useState<string>();  
//   const [loading, setLoading] = useState<boolean>(true); 
//   useEffect(()=>{
//     const fetchposts = async ()=>{
//       try{
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//         if(!res.ok) throw new Error("Failed to load Data.");
//         const data : Posts[] = await res.json();
//         setPost(data); 
//       }
//       catch(err){
//         setError((err as Error).message);
//       }
//       finally{
//         setLoading(false);
//       }
//     }
//     fetchposts();
//   }, [])
//   if(loading) return <p className="text-blue-500 m-40 p-20 h-[120] w-40" >Data is loading....</p>
//   if(error) return <p className="text-red-500 m-40 p-20 h-[120] w-40" >{error}</p>
//   return(
//     <div className="p-10 m-10 rounded-md bg-blue-300">
//       <h1 className="text-4xl bold"></h1>
//         <ul className="grid col-2 gap-4">
//           {post.slice(0,6).map((p)=>(
//             <li
//             key={p.id}
//             className="p-4 bg-white rounded-lg shadow hover:scale-105 hover:shadow-lg transition duration-300"
//           >
//             <h2 className="font-semibold text-lg">{p.title}</h2>
//             <p className="text-gray-600 text-sm mt-2">{p.body}</p>
//           </li>
//           ))}
//         </ul>
//     </div>
//   );
// }
// export default App;

// Reuseable hook of useFetch



// import { useEffect, useState } from "react";

// type Users = {
//   id: number;
//   name: string;
//   title: string;
//   body: string;
// };

// const useFetch = (api_link: string) => {
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [data, setData] = useState<Users[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(api_link);
//         if (!res.ok) throw new Error("Failed to fetch data");
//         const json: Users[] = await res.json();
//         setData(json);
//       } catch (err) {
//         setError((err as Error).message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [api_link]);

//   return { loading, error, data };
// };

// export default useFetch;

// UseReducer

// import React, {useReducer} from "react";
// type State = {
//   count : number;
// }

// type Action = 
//    {type : "Increment"} | {type : "Decrement"} | {type : "Reset"} ; 

// const reducer = (state: State, action: Action) : State=>{
//   switch(action.type){
//     case "Increment":
//       return {count : state.count + 1};
//     case "Decrement":
//       return {count: state.count -1};
//     case "Reset": 
//       return {count: 0};
//     default:
//       return state;
//   }
// }
// const App : React.FC = ()=>{
//   const [state, dispatch] = useReducer(reducer, {count:0});
//   return(
//    <div className="p-4 text-center">
//       <h1 className="text-xl">Count: {state.count}</h1>
//       <button onClick={() => dispatch({ type: "Increment" })} className="px-3 py-1 m-1 bg-green-500 text-white rounded">+</button>
//       <button onClick={() => dispatch({ type: "Decrement" })} className="px-3 py-1 m-1 bg-red-500 text-white rounded">-</button>
//       <button onClick={() => dispatch({ type: "Reset" })} className="px-3 py-1 m-1 bg-gray-500 text-white rounded">Reset</button>
//     </div> 
//   )
// };

// export default App;

// createContext, useContext, Provider 

// import React, {createContext, useState, useContext, Children} from "react";

// type ThemeProps = {
//   darkMode : boolean;
//   toggletheme : () => void;
// };

// const ThemeContext = createContext<ThemeProps | null>(null);

// const ThemeProvider : React.FC <{children : React.ReactNode}> = ()=>{
//   const [darkMode, setDarkMode] = useState(false);
//   const toggletheme = () => setDarkMode((prev) => !prev);
//   return(
//     <div>
//       <ThemeContext.Provider value={{darkMode, toggletheme}} >
//         {Children}
//       </ThemeContext.Provider>
//     </div>
//   )
// };

// export default ThemeProvider;

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) throw new Error("useTheme must be inside ThemeProvider");
//   return context;
// }

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthContextProvide } from "./context/AuthContext";
// import Layout from "./layout/Outlet";
// import { ProtectedRoute } from "./layout/ProtectedRoute";


// import Home from "./pages/Home";
// import About from "./pages/About";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";

// const App: React.FC = ()=> {
//   return(
//     <AuthContextProvide>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Layout/>}>
//           <Route index element={<Home/>}/>
//           <Route path="about" element={<About/>}/>
//           <Route path="login" element={<Login/>}/>

//           <Route element={<ProtectedRoute/>}>
//             <Route path="dashboard" element={<Dashboard/>}/>
//           </Route>  
//           </Route> 
//         </Routes>
//       </Router>
//     </AuthContextProvide>
//   )
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./layout/Layout";
import ProtectedRoute from "./layout/ProtectedRoute";
import Todos from "./pages/TodoDashboard";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Login />} />

        {/* Layout routes */}
        <Route element={<Layout />}>
          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/todos" element={<Todos />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;