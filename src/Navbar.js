import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { MyContext } from "./common";
import React, { useContext } from "react";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { textAlign } from "@mui/system";
import Form from "react-bootstrap/Form";

export const NavBar = () => {
  const { order, setorder, logindata, setlogin } = useContext(MyContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const login = () => {
    if (logindata) {
      localStorage.removeItem("token");
      navigate("/");
      setlogin(false);
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <Navbar className="contact" bg="primary" variant="dark" position="fixed">
        <Container>
          <Navbar.Brand href="/">Fashion Store<i className="fa fa-shopify" aria-hidden="true"></i></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home <i class="fa fa-home" aria-hidden="true"></i>
            </Nav.Link>

            <Nav.Link as={Link} to="/Paycheck"></Nav.Link>
            <Nav.Link as={Link} to="/Menu">
              Catagories <i class="fa fa-list-alt" aria-hidden="true"></i>
            </Nav.Link>
            <Nav.Link as={Link} to="/reservation"></Nav.Link>
            
            <Nav.Link onClick={() => handleOpen()}>
              Cart <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              <sup>
                <Badge badgeContent={order.length} color="primary"></Badge>
              </sup>
            </Nav.Link>
          </Nav>
          <Form className="me-auto d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button onClick={() => navigate("/Menu")} variant="outline-success">
              Search
            </Button>
          </Form>
          <Navbar.Brand onClick={() => login()}>
            {!logindata ? "login" : "logout"}
          </Navbar.Brand>
        </Container>
      </Navbar>

      <div></div>
      <div>
        <Outlet />
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h3 className="orderHeading">Ordered items</h3>
            {!order.length == 0 ? (
              order.map((data) => {
                return (
                  <div className="ordered">
                    <h5>{data.name}</h5>
                    <h6>{data.heading}</h6>
                    <p>{data.incredients}</p>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        console.log(data);
                        const remove = order.filter(
                          (rem) => rem.id !== data.id
                        );
                        setorder(remove);
                      }}
                    >
                      Cancle
                    </Button>
                  </div>
                );
              })
            ) : (
              <h2>NO yet ADDED</h2>
            )}

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              "There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour"
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
};
