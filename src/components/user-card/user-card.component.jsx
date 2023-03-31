import { Link } from "react-router-dom";

//styles
import "./user-card.styles.css";

const UserCard = ({ user }) => {
  // detruacture the variables from user object
  const { avatar, first_name, email } = user;
  return (
    <Link className="user-card-link" key={user.id} to={`/users/${user.id}`}>
      <div className="user-card-container">
        <div className="user-image">
          <img src={avatar} alt={`${first_name}'s Profile Pic`} />
        </div>
        <div className="user-details-box">
          <h3 className="first-name">{first_name}</h3>
          <h4 className="email">{email}</h4>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
