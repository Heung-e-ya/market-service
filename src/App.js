import "./App.css";
import MainPage from "./main";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./product";
import UploadPage from "./upload";
function App() {
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <Routes>
          <Route exat={true} element={<MainPage />} path="/" />
          <Route exat={true} element={<ProductPage />} path="/product/:id" />
          <Route exat={true} element={<UploadPage />} path="/upload" />
        </Routes>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
