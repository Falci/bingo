import React from "react";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import "./Page.scss";
import { Header } from "../components/Header";
import SideMenu from "../components/SideMenu";

export const Page = ({ children, title, ...props }) => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div className="layout">
      <SideMenu show={showMenu} onClose={() => setShowMenu(false)} />
      <div className="Page">
        <Header>
          <FontAwesomeIcon
            icon={faEllipsisV}
            className="mr-3"
            onClick={() => setShowMenu(true)}
          />

          {title}
        </Header>
        <Container {...props} className={`content pt-2 ${props.className}`}>
          {children}
        </Container>
      </div>
    </div>
  );
};
