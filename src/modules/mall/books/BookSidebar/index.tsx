import Home from "@/pages/Home";
import { Link } from "react-router-dom";
import BookList from "../BookList";

const BookSidebar = () => {
  return (
    <>
      <Home />
      <BookList />
      <aside>
        <ul>
          <li>
            <Link to="/mall/books/search">도서검색</Link>
          </li>
          <li>
            <Link to="/mall/order">장바구니</Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default BookSidebar;
