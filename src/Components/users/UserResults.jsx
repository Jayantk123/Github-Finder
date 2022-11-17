import React, { useEffect, useState } from "react";
import Spinner from "../Layout/Spinner";
import UserItem from "./UserItem";

export default function UserResults() {
  useEffect(() => {
    fetchUsers();
  }, []);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      // headers:{
      //     Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
      // },
      // for increasing rate limit
    });

    const data = await response.json();

    setUsers(data);
    setLoading(false);
  };
if(!loading) {
    return (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {users.map((user) => (
            <UserItem key={user.id} user={user}/>
            // <h3>{user.login}</h3>
          
          ))}
        </div>
      );

}
else {
   return<Spinner/>
}
}
