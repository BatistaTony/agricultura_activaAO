import React from "react";
import "./dashboard.scss";
import NavbarApp from "../navbarApp/navbarApp";
import CardList from "../cards/cardList";

export default function Dashboard() {
  return <div className="dashboard">
    <NavbarApp />
    <CardList />
  
  </div>;
}
