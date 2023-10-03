import Home from "@/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import BookSidebar from "./modules/mall/books/BookSidebar";
import BookList from "./modules/mall/books/BookList";
import MovieList from "./modules/movie/MovieList";
import PostList from "./modules/post/PostList";
import OrderList from "./modules/mall/order/OrderList";
import BookSearch from "./modules/mall/books/BookSearch";
import Layout from "./Layout";
import { lazy } from "react";
import Cart from "./modules/mall/order/cart";

const BookSidebar = lazy(() => import("./modules/mall/books/BookSidebar"));
const OrderSidebar = lazy(() => import("./modules/mall/order/OrderSidebar"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* index: 해당경로의 기본 화면 */}
          <Route element={<Home />} index />
          <Route path="mall/books" element={<BookSidebar />}>
            <Route element={<BookList />} index />
            <Route path="search" element={<BookSearch />} />
          </Route>
          <Route path="mall/order" element={<OrderSidebar />}>
            <Route element={<OrderList />} index />
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="movie" element={<MovieList />} />
          <Route path="post" element={<PostList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
