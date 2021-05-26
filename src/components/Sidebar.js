import {React} from 'react';
import {Row, Col, Container, Accordion, Card} from "react-bootstrap";
import {SideBarData} from "../Data/SidebarData";
import '../styles/Sidebar.css';

export const Sidebar = () => {
    return (
        <Container>
        <Card>
            <Card.Header><h4>Sidebar Area</h4></Card.Header>
            <Card.Body>
            <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                        Click me!
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                        Click me!
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Card.Body>
        </Card>
        </Container>
    );
}

export const SidebarBasic = () =>{
    return (
      <div className="Sidebar">
        <ul className="SidebarList">
          {SideBarData.map((value, key) => {
            return (
                <li
                  key={key}
                  onClick={()=>{
                      window.location.pathname = value.link;
                  }}
                  className="row"
                  id={window.location.pathname == value.link ? "active":""}
                >
                  <div id="icon">{value.icon}</div>
                  <div id="title">{value.title}</div>
                </li>
            );    
          })}
        </ul>
      </div>
    );
}