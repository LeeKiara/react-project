import { Link, Outlet } from "react-router-dom";
import { HomeContainer } from "./pages/Home/styles";
import { Suspense } from "react";

const Layout = () => {
  return (
    <HomeContainer>
      <header>
        <Link to="/">Home</Link>
      </header>
      <nav className="header-nav">
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
          <li>
            <Link to="/mall/order">도서몰/주문</Link>
          </li>
        </ul>
      </nav>

      <main>
        {/* 세부경로의 컴포넌트들이 로딩위치 */}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </HomeContainer>
  );
};

export default Layout;
