import React from 'react'
import NavText from './NavText';
import dashboard from "../assets/dashboard.png";
import invoices from "../assets/invoice.png";
import clients from "../assets/clients.png";
import reports from "../assets/Reports.png";
import styles from "./MainDashboard.module.css";

function MainDashboard() {
  return (
    <div id={styles.parent}>
        <div id={styles.nav}>
            <NavText img={dashboard} text="Dashboard"/>
            <hr/>
            <NavText img={invoices} text="Invoices"/>
            <NavText img={clients} text="Clients"/>
            <NavText img={reports} text="Reports"/>
        </div>
        <div id={styles.right}>

        </div>
    </div>
  )
}

export default MainDashboard;