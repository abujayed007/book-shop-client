import Banner from "../../components/layout/Main/Banner";
import Books from "../books/Books";
import Blog from "./Blog";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Books />
      <Blog />
    </div>
  );
};

export default HomePage;
