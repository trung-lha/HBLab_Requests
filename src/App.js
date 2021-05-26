import './App.css';
import { Sidebar } from "./components/Sidebar";
import { Row, Col, Container, Accordion, Card } from "react-bootstrap";
import {AddEmployeeForm, EmployeesTable, EmployeesMain} from './components/Employees';

function App() {
  return (
    <>
      <EmployeesMain/>
    </>
  );
}

export default App;
