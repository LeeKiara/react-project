import Home from "@/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookSidebar from "./modules/mall/books/BookSidebar";
import BookList from "./modules/mall/books/BookList";
import MovieList from "./modules/movie/MovieList";
import PostList from "./modules/post/PostList";
import OrderList from "./modules/mall/order/OrderList";
import BookSearch from "./modules/mall/books/BookSearch";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} index></Route>
        <Route path="mall/books" element={<BookSidebar />}>
          <Route path="search" element={<BookSearch />} index />
          <Route element={<BookList />} />
        </Route>
        <Route path="mall/order" element={<OrderList />} />
        <Route path="movie" element={<MovieList />} />
        <Route path="post" element={<PostList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
