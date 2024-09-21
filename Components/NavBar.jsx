import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import * as axiosrepository from "@/Repository/AxiosRepository";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [category, setcategory] = useState([]);
  const [suggestItem, setsuggestItem] = useState([]);

  useEffect(() => {
    axiosrepository
      .Get("products/categories")
      .then((response) => setcategory(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axiosrepository
      .Get("SevenIcons")
      .then((response) => setsuggestItem(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={`${styles.containerNavBar}`}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {suggestItem.map((item) => {
                return (
                  <Nav.Link href={`products/Cat/${item.url}`}>
                    {item.label}
                  </Nav.Link>
                );
              })}
              <NavDropdown title="دسته بندی ها" id="basic-nav-dropdown">
                {category.map((item) => {
                  return (
                    <div>
                      <NavDropdown.Item
                        dir="rtl"
                        href={`products/category/${item.name}`}
                      >
                        {item.name}
                      </NavDropdown.Item>
                    </div>
                  );
                })}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

// <div>
//   {category.map((item) => {
//     return <h1>{item.name}</h1>;
//   })}
// </div>;
