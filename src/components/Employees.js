import React, {useState} from 'react';
import { Col, Row, Card, Container, Form, Button, Dropdown,ButtonGroup , Table, 
InputGroup,FormGroup,FormControl, Nav, Pagination, Modal} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {EmployeesInfo} from '../Data/DataEmployees';

export const AddEmployeeForm = () => {
    return (
        <>
            <Card>
                <Row>
                    <Col md={{ span: 12, offset: 0 }}>
                        {/* <Card.Header>
                            <h4 className="text-center">Thêm mới nhân viên</h4>
                        </Card.Header> */}
                        <Card.Body style={{borderRadius:'2px #000000'}}>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Họ và tên</Form.Label>
                                    <Form.Control type="text" placeholder="Nhập tên" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Mã nhân viên</Form.Label>
                                    <Form.Control type="text" placeholder="Nhập mã" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Vị trí công tác</Form.Label>
                                    <Form.Control type="text" placeholder="Nhập mã" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Phòng ban</Form.Label>
                                    <Form.Control type="text" placeholder="Nhập mã" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Trạng thái</Form.Label>
                                    <Form.Control type="text" placeholder="Nhập mã" />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </>
    );
}

export const EmployeesTable = () => {
    const EmployTable = (props) => {
        const {name, id, department, role, status } = props; 
        const statusVariant = status === "active" ? "success":"warning";
        return (
            <tr>
              <td>
                <span className="fw-normal">
                  {name}
                </span>
              </td>
              <td>
                <span className="fw-normal">{id}</span>
              </td>
              <td>
                <span className="fw-normal">{department}</span>
              </td>
              <td>
                <span className="fw-normal">
                  {role} 
                </span>
              </td>
              <td>
                <span className={`fw-normal text-${statusVariant}`}>{status}</span>
              </td>
              <td>
                <Dropdown as={ButtonGroup}>
                  <Dropdown.Toggle
                    as={Button}
                    split
                    variant="link"
                    className="text-dark m-0 p-0">
                    <span className="icon icon-sm">
                      <FontAwesomeIcon icon={'algolia'} className="icon-dark" />
                    </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item >
                      <FontAwesomeIcon icon={'alicorn'} className="me-2" />Chi tiết
                    </Dropdown.Item>
                    <Dropdown.Item className="text-danger">
                      <FontAwesomeIcon icon={'apple-crate'} className="me-2" /> Xóa
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          );
    }

    return (
        <div>
        <Card border="light" className="table-wrapper table-responsive shadow-sm">
          <Card.Body className="pt-0">
            <Table hover className="user-table align-items-center">
              <thead>
                <tr>
                  <th className="border-bottom">Tên</th>
                  <th className="border-bottom">Mã nhân viên</th>
                  <th className="border-bottom">Phòng ban</th>
                  <th className="border-bottom">Vị trí</th>
                  <th className="border-bottom">Trạng thái</th>
                  <th className="border-bottom">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {EmployeesInfo.map((t) => (
                  <>
                    <EmployTable {...t} />
                  </>
                ))}
              </tbody>
            </Table>
            <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
              <Nav>
                <Pagination className="mb-2 mb-lg-0">

                  <Pagination.Prev>
                    Trước
              </Pagination.Prev>

                  <Pagination.Item active>1</Pagination.Item>
                  <Pagination.Item>2</Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                  <Pagination.Item>4</Pagination.Item>
                  <Pagination.Item>5</Pagination.Item>
                  <Pagination.Next>
                    Tiếp
              </Pagination.Next>

                </Pagination>
              </Nav>
              <small className="fw-bold">
                Hiển thị <b>10</b> trong số <b>25</b> Nhân viên
            </small>
            </Card.Footer>
          </Card.Body>
        </Card>

      </div>
    );
}

export const EmployeesMain = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Container>
            <Card>
                <Card.Header>
                    <h4 className="text-center">Danh sách nhân viên</h4>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={9}>
                            <InputGroup className="mb-3">
                                <FormControl
                                placeholder="Tìm kiếm theo tên nhân viên"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                <Button variant="outline-secondary">Tìm kiếm</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                        <Col md={{span: 2, offset:1}} onClick={handleShow}>
                            <Button variant="success">Thêm mới</Button>
                        </Col>
                    </Row>
                    
                    
                </Card.Body>
                <Card.Body>
                    <EmployeesTable/>
                </Card.Body>
            </Card>
            </Container>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                <Modal.Title>Thêm mới nhân viên</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddEmployeeForm/>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Thêm mới
                </Button>
                <Button variant="secondary" onClick={handleClose} className="ms-auto">
                    Hủy
                </Button>
                
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default AddEmployeeForm;