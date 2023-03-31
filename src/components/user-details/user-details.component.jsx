import { useParams } from "react-router-dom"; // to acces the route parameter
import { useState, useEffect } from "react";
import axios from "axios";

// styles
import "./user-details.styles.css";

const UserDetails = () => {
  const [userInfo, setUserInfo] = useState({});
  const routeParam = useParams();

  // destructure the userID
  const { userID } = routeParam;

  // this async function will fetch the information of a specific user
  const getUserDetails = async () => {
    try {
      // using axios to send a get request to the API to get specific user
      const res = await axios.get(`https://reqres.in/api/users/${userID}`);
      console.log(res.data);
      setUserInfo(res.data.data);
    } catch (error) {
      console.log(error.message);
      setUserInfo(null);
    }
  };

  // we only need to request when component is mounted for the first time
  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div>
      {userInfo && (
        <div className="user-info-card-container">
          <img
            className="user-info-image"
            src={userInfo.avatar}
            alt="profile_pic"
          />
          <div className="user-info-box">
            <h3 className="user-info-first-name">
              First Name : {userInfo.first_name}
            </h3>
            <h3 className="user-info-last-name">
              Last Name : {userInfo.last_name}
            </h3>
            <h3 className="user-info-email">Email : {userInfo.email}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
