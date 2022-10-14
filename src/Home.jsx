import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div>
      <Link to="/users/1">User1</Link>
      <Link to="/users/2">User2</Link>
      <Link to="/users/3">User3</Link>
    </div>
  );
};

export default Home;