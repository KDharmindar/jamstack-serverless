import React from "react"
import Layout from "../components/layout"
import styles from "../style/about.module.css"



export default function About() {
  return (
    <div>
        <Layout headerTitle="About Us Page">
            About Page
            <div className={styles.blueBackGround}>There is some more test that has to happen</div>
        </Layout>
    </div>
  );
}
