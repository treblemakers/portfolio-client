import Head from "next/head";
import styles from "../assets/styles/Home.module.css";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import Nae from "../components/nav";
import Drop from "../components/drop";
import About from '../components/about';

export default function Home() {
  return (
    <div className={styles.container} style={{background:"#ffe742"}}>
      <Nae />
      <Drop/>
      <Element name="About" className="element" >
            <About/>test 1
        </Element>

      
      555
    </div>
  );
}
