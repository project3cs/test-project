import { Outlet,Link } from "react-router-dom";

// my components
import NavigationBar from "../../components/navogation-bar/navigation-bar.component";

// importing styles
import "./home.styles.css";

const Home = () => {
  return (
    <div className="home">
      <Link to="/"><NavigationBar/></Link>
      <Outlet />
    </div>
  );
};

export default Home;
