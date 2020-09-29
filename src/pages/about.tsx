import React from "react"
import Layout from "../components/layout"
import styles from "../style/about.module.css"



export default function About() {
  return (
    <div>
        <Layout headerTitle="About Us Page">
            About Page
            <div className={styles.blueBackGround}>I am doing it for test</div>
        </Layout>
    </div>
  );
}
