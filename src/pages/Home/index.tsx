import { Link } from "react-router-dom";
import { HomeContainer } from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <header>
        <h1>Home</h1>
        <nav>
          <ul>
            <li>
              <Link to="/movie">영화</Link>
            </li>
            <li>
              <Link to="/post">도서</Link>
            </li>
            <li>
              <Link to="/mall/books">도서몰</Link>
            </li>
          </ul>
        </nav>
      </header>
    </HomeContainer>
  );
};

export default Home;
