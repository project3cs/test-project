import { Fragment } from "react";

// my components
import UserCard from "../user-card/user-card.component";

// styles
import "./user-list.styles.css";

const UserList = (props) => {
  const { users } = props; // destructuring the users prop
  return (
    <Fragment>
      <h3 className="user-list-title">Users</h3>
      <div className="users-list">
        {
          // map through the users
          users.length === 0 ? (
            <h3>No users found</h3>
          ) : (
            users.map((user) => {
              return <UserCard user={user} />;
            })
          )
        }
      </div>
    </Fragment>
  );
};

export default UserList;
