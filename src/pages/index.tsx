import { Link, navigateTo } from "gatsby";
import Header from "../components/header"
import React from "react"
import Layout from "../components/layout";

export default function Home() {
  return (
    <div>
      <Layout headerTitle="Index page">
        Hello world!
        <br/>
        <Link to="/about">About Us</Link>
        <br/>
        <button onClick={()=> {
          navigateTo("/about");
        }}>About Us From Button Click</button>
      </Layout>
    </div>
    
  ); 
}
