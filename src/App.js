import "./App.css";

import MainPage from "./main";
import {
  Route,
  Routes,
  Link,
  useNavigate,
  useNavigation,
} from "react-router-dom";

import ProductPage from "./product";
import UploadPage from "./upload";

import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
function App() {
  const navigate = useNavigate();
  const uploadPage = () => {
    navigate("/upload");
  };
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" />
          </Link>
          <Button size="large" icon={<DownloadOutlined />} onClick={uploadPage}>
            상품 업로드
          </Button>
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
