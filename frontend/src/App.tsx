import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Blogs } from "./pages/Blogs";
import { FullBlog } from "./pages/FullBlog";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />}></Route>
            <Route path="blogs/:id" element={<FullBlog />} />

            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
