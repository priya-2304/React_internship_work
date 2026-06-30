// import React, { useEffect } from "react";

// function App() {
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   }, []);

//   return <h1>Hello</h1>;
// }

// export default App;


// // simple APi fetch useEffect se :-

// import React, { useEffect, useState } from 'react';

// const MyFirstUseStateComponent = () => {
//   const [count, setCount] = useState(0);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, []);

//   return (
//     <div>
//       <h1>User Data</h1>
//       {users.map((user) => (
//         <div key={user.id}>
//           <h3>{user.id}</h3>
//           <p>{user.name}</p>
//           <p>{user.email}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyFirstUseStateComponent;


// // Search box add krne vale ka code :-

import React, { useEffect, useState } from "react";
import SearchBox from "./Searchbox";

const MyFirstUseStateComponent = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await res.json();
      setUsers(data);
    };

    getUser();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <SearchBox search={search} setSearch={setSearch} />

      <h1>User Data</h1>

      {filteredUsers.map((user) => (
        <div key={user.id}>
          <h3>{user.id}</h3>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default MyFirstUseStateComponent;