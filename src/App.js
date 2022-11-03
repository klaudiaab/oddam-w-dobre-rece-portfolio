import { useState, useEffect } from "react";
import React from "react";
// import { db } from "./firebase";
// import { collection, getDocs } from "firebase/firestore";
import { Routes, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {


  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
      <Routes>
        <Route path="/logowanie" element={<Login></Login>}></Route>
      </Routes>
      <Routes>
        <Route path="/rejestracja" element={<Register></Register>}></Route>
      </Routes>
    </>
  );
}

export default App;

// function App() {
//   const [users, setUsers] = useState([]);
//   const usersCollectionRef = collection(db, "foundations");

//   useEffect(() => {
//     const getUsers = async () => {
//       const data = await getDocs(usersCollectionRef);
//       setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//       console.log(data);
//     };
//     getUsers();
//   }, []);
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div>Hello, I will show you the database</div>
//         {users.map((user) => {
//           return (
//             <li key={user.id}>
//               {user.foundation}
//               <br></br>
//               {user.mission}
//             </li>
//           );
//         })}
//       </header>
//     </div>
//   );
// }
