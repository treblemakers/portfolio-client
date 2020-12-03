import React, { useEffect, useState } from "react";
import Stylecss from "../assets/styles/about.module.scss";
import ScrollAnimation from "react-animate-on-scroll";

import Edu from "./edu/edu";
import Edures from "./edu/edures";

import { useWindowSize } from "./screen";

const about = () => {
  const size = useWindowSize();
  return (
    <>
      <div
        id="#about"
        style={{
          position: "relative",
          padding: "8px",
          backgroundColor: "#FFF4DB",
          width: "100%",
          height: "100%",
        }}
      >
        <ScrollAnimation animateIn="fadeIn">
          <div className={Stylecss.fromall}>
            <div style={{ display: "grid", gridTemplateRows: "1fr" }}>
              <div>
                <img
                  style={{
                    width: "325px",
                    margin: "7px 0px 0 7px",
                    borderRadius: "20px",
                  }}
                  src="https://res.cloudinary.com/djnasfo5s/image/upload/v1605267748/Portfolio/me3_sxvfu6.jpg"
                />
                <div
                  style={{
                    margin: "58px 0 0 0",
                    width: "350px",
                    height: "350px",
                    backgroundImage:
                      "url(https://res.cloudinary.com/djnasfo5s/image/upload/c_scale,w_350/v1605277140/Portfolio/crop_pv2rvn.png)",
                    zIndex: 1,
                    position: "absolute",
                    top: "0px",
                  }}
                />
              </div>
              {/* <div
              style={{
                margin: "auto",
                padding: "13px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                gridColumnGap: "5px",
              }}
            >
              <img
                style={{
                  width: "58px",
                  margin: "5px 0px 0 0px",
                  borderRadius: "1px",
                }}
                src="https://res.cloudinary.com/djnasfo5s/image/upload/v1605267748/Portfolio/me3_sxvfu6.jpg"
              />
              <img
                style={{
                  width: "58px",
                  margin: "5px 0px 0 0px",
                  borderRadius: "1px",
                }}
                src="https://res.cloudinary.com/djnasfo5s/image/upload/v1605267748/Portfolio/me3_sxvfu6.jpg"
              />
              <img
                style={{
                  width: "58px",
                  margin: "5px 0px 0 0px",
                  borderRadius: "1px",
                }}
                src="https://res.cloudinary.com/djnasfo5s/image/upload/v1605267748/Portfolio/me3_sxvfu6.jpg"
              />
              <img
                style={{
                  width: "58px",
                  margin: "5px 0px 0 0px",
                  borderRadius: "1px",
                }}
                src="https://res.cloudinary.com/djnasfo5s/image/upload/v1605267748/Portfolio/me3_sxvfu6.jpg"
              />
              <img
                style={{
                  width: "58px",
                  margin: "5px 0px 0 0px",
                  borderRadius: "1px",
                }}
                src="https://res.cloudinary.com/djnasfo5s/image/upload/v1605267748/Portfolio/me3_sxvfu6.jpg"
              />
            </div> */}
            </div>

            <div className={Stylecss.infomation}>
              <a style={{ padding: "10px", fontSize: "18px" }}>
                <a style={{ fontSize: "20px", fontWeight: 600 }}>
                  Hi, my name is Tee
                </a>
                , I’ve just graduated in Computer Engineering from university of
                phayao. <br />I enjoy creating things that live on the internet,
                whether that be websites, applications, or anything in between.
                My goal is to always build products that provide pixel-perfect,
                performant experiences.
                <br /> <br />
                <div style={{ margin: "auto", width: " fit-content" }}>
                  <a href="/resume.pdf" download>
                    👉👉 download resume 👈👈
                  </a>
                </div>
              </a>

              <div style={{ margin: "auto" }}>
                {" "}
                <div
                  style={{
                    margin: "auto",
                    width: "fit-content",
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  connect with tee
                </div>
                <img
                  // className={Stylecss.facebook}

                  style={{ margin: "10px" }}
                  src="https://res.cloudinary.com/djnasfo5s/image/upload/c_scale,w_60/v1605333222/Portfolio/link1_quuup9.png"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/ApisitPromyos/",
                      "_blank"
                    )
                  }
                />
                <img
                  style={{ margin: "10px" }}
                  src="https://res.cloudinary.com/djnasfo5s/image/upload/c_scale,w_60/v1605333222/Portfolio/link2_vdvz3p.png"
                  onClick={() =>
                    window.open("https://github.com/treblemakers", "_blank")
                  }
                />
              </div>
            </div>
          </div>

          {size.width > 425 ? <Edu /> : <Edures />}
        </ScrollAnimation>
      </div>
    </>
  );
};

export default about;
