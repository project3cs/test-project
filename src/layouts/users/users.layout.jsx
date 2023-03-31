import { useState, useEffect } from "react";
import axios from "axios"; // to make web requests

// custom components
import UserList from "../../components/user-list/user-list.component";

// styles
import "./users.styles.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  // this async function gets the list of all the users from the API
  const getUsersList = async () => {
    try {
      // using axios to send a get request to the API
      const res = await axios.get("https://reqres.in/api/users?page=1");
      // axios return a json and original data is in a field called data in there as well
      setUsers(res.data.data);
    } catch (error) {
      console.log(error.message);
      setUsers([]);
    }
  };

  // use effect is used to only reques the list when the component is mounted for the first time
  useEffect(() => {
    getUsersList();
  }, []);

  return <UserList users={users} />;
};

export default Users;
