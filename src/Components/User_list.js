
import React, { useEffect, useState } from "react";

import axios from "axios";

import Cardd from "./Cardd"

const User_list = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data));
  }, []);

  const style = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };
  return (
    <div style={style}>
      {users.map((user) => (
        <Cardd user={user} key={user.id} />
      ))}
    </div>
  );
};

export default User_list;