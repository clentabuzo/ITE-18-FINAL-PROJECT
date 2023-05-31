import Home from "./Component/Home";
import Login from "./Component/Login";
import Registration from "./Component/Registration";
import Logout from "./Component/Logout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import { ToastContainer } from "react-toastify";
import { Protector } from "./helpers";
import Definition from "./API/Definition";
import Dictionary from "./API/Dictionary";
import NotFound from "./API/NotFound"


function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protector Component={Home} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/definition/:search" element={<Definition />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </Container>
  );
}

export default App;