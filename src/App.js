import './App.css';
import { Sidebar } from "./components/Sidebar";
import { Row, Col, Container, Accordion, Card } from "react-bootstrap";
import {Employees} from "./pages/Employees";

function App() {
  return (
    <>
      <Employees/>
    </>
  );
}

export default App;
