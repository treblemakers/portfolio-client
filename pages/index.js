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
import About from "../components/about";
import Skill from "../components/skill";
import Contract from "../components/contract";

import ScrollUpButton from "react-scroll-up-button";

import { Icon } from "react-icons-kit";
import { ic_expand_less } from "react-icons-kit/md/ic_expand_less";

export default function Home() {
  return (
    <div className={styles.container} style={{ background: "#ffe742" }}>
      <Nae />
      <Drop />
      <Element name="About" className="element">
        <About />
      </Element>
      <Element name="Skill" className="element">
        <Skill />
      </Element>

      <Contract />

      <ScrollUpButton
        ContainerClassName="AnyClassForContainer"
        TransitionClassName="AnyClassForTransition"
      >
        <Icon size={"25px"} icon={ic_expand_less} style={{ margin: "auto" }} />
      </ScrollUpButton>
      <footer
        style={{
          background: "black",
          color: "white",
          borderTop: "5px solid",
          borderImage:
            "linear-gradient(to right,red,yellow,lime,aqua, blue, magenta) 1",
        }}
      >
        <div style={{ margin: "auto", width: "fit-content" }}>
          this is footer
        </div>
      </footer>
    </div>
  );
}
