import "./App.css";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
// import Blogs from "./pages/Blogs";
import axios from "axios";


axios.defaults.baseURL = 'http://localhost:5000/';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          {/* <Route path="/blogs" element={<Blogs />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
