import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
const menus = [
  {
    name: "Trang Chủ",
    to: "/",
    exact: true,
  },  
  {
    name: "Quản Lý Sản Phẩm",
    to: "/product-list",
    exact: false,
  },
];
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={active}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};
class Menu extends Component {
  render() {
    return (
      <div className="navbar">
        <a  className="navbar-brand">CALL API</a>
        <ul className="nav navbar-nav">{this.showMenu(menus)}</ul>
      </div>
    );
  }
  showMenu = (menus) => {
    //   console.log("abc");
    if (menus.length > 0) {
      return menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
  };
}
export default Menu;
