import React, { useState } from "react";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Style from "../assets/styles/nav.module.scss";

const Index = () => {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(false);
  const toggle = () => {
    if (time) {
      if (open != time) {
        setOpen(false);
        setTime(false);
      } else {
        setTime(!time);
        setTimeout(function () {
          setOpen(!open);
        }, 900);
      }
    } else {
      setOpen(!open);
      setTime(!time);
    }
  };

  return (
    <header className={Style.header}>
      <a style={{ color: "white" }}>Apisit promyos</a>
      <div className={Style.menu}>
        <img
          onClick={() => toggle()}
          className={`${
            open
              ? Style.rotate180 + " " + Style.faceopen
              : Style.rotate180 + " " + Style.face
          }`}
          height={191}
          src={`${
            open
              ? "https://res.cloudinary.com/djnasfo5s/image/upload/v1604922809/Portfolio/4_cnf3x5.png"
              : "https://res.cloudinary.com/djnasfo5s/image/upload/v1604929751/Portfolio/5_gd46kh.png"
          }`}
        />
      </div>
      {open && (
        <>
          <div className={Style.divlist}>
            <Link
              to="About"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => toggle()}
            >
              <a
                className={`${time ? Style.list1 : Style.list1out}`}
                type="button"
              >
                <div style={{ justifyContent: "space-between" }}>
                  <span
                    style={{
                      color: "black",
                      fontSize: "26px",
                      fontWeight: 700,
                    }}
                  >
                    ABOUT ME
                  </span>
                  <img
                    style={{ float: "right" }}
                    width={55}
                    src="https://res.cloudinary.com/djnasfo5s/image/upload/v1604921545/Portfolio/camera_xmahpg.png"
                  />
                </div>
              </a>
            </Link>
            <Link
              to="Skill"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => toggle()}
            >
              <div
                className={`${time ? Style.list2 : Style.list2out}`}
                type="button"
              >
                <div style={{ justifyContent: "space-between" }}>
                  <span style={{
                      color: "black",
                      fontSize: "26px",
                      fontWeight: 700,
                      marginLeft:"32px"
                    }}>SKILLS</span>
                  <img
                    style={{ float: "right" }}
                    width={55}
                    src="https://res.cloudinary.com/djnasfo5s/image/upload/v1604921545/Portfolio/skills_q9zk6b.png"
                  />
                </div>
              </div>
            </Link>
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => toggle()}
            >
            <div
              className={`${time ? Style.list3 : Style.list3out}`}
              type="button"
            >
              <div style={{ justifyContent: "space-between" }}>
                <span style={{
                      color: "black",
                      fontSize: "26px",
                      fontWeight: 700,
                      marginLeft:"8px"
                    }}>CONTACT</span>
                <img
                  style={{ float: "right" }}
                  width={55}
                  src="https://res.cloudinary.com/djnasfo5s/image/upload/v1604921545/Portfolio/contact_tn6kt3.png"
                />
              </div>
            </div>
            </Link>
          </div>
          <img
            onClick={() => toggle()}
            className={`${
              time
                ? Style.rotate180 + " " + Style.hairopen
                : Style.rotate180 + " " + Style.hair
            }`}
            width={135}
            src="https://res.cloudinary.com/djnasfo5s/image/upload/v1604930996/Portfolio/6_uswqxi.png"
          />
        </>
      )}
    </header>
  );
};

export default Index;
