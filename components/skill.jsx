import React, { useEffect, useState } from "react";
import Stylecss from "../assets/styles/skill.module.scss";
import ScrollAnimation from "react-animate-on-scroll";

import {requestResetPassword} from './api/contract'

import { useWindowSize } from "./screen";

const skill = () => {
  const size = useWindowSize();
  const tskill = [
    {
      img:
        "https://res.cloudinary.com/djnasfo5s/image/upload/c_scale,w_100/v1606925881/Portfolio/html_ke9xmb.png",
      css: Stylecss.html,
      name: "HTML",
    },
    {
      img:
        "https://res.cloudinary.com/djnasfo5s/image/upload/c_scale,w_100/v1606925881/Portfolio/css_ytfqze.png",
      css: Stylecss.css,
      name: "CSS",
    },
    {
      img:
        "https://res.cloudinary.com/djnasfo5s/image/upload/c_scale,w_100/v1606925881/Portfolio/js_otsi7n.png",
      css: Stylecss.js,
      name: "JavaScript",
    },
    {
      img:
        "https://res.cloudinary.com/djnasfo5s/image/upload/c_scale,w_100/v1606925881/Portfolio/react_fbvmgx.png",
      css: Stylecss.react,
      name: "REACT",
    },
    {
      img:
        "https://res.cloudinary.com/djnasfo5s/image/upload/c_scale,w_100/v1606925881/Portfolio/nextjs_t11jpn.png",
      css: Stylecss.next,
      name: "NextJs",
    },
    {
      img:
        "https://res.cloudinary.com/djnasfo5s/image/upload/c_scale,w_100/v1606925881/Portfolio/apollo_zpdtzl.png",
      css: Stylecss.apollo,
      name: "APOLLO",
    },
    {
      img:
        "https://res.cloudinary.com/djnasfo5s/image/upload/c_scale,w_100/v1606925881/Portfolio/graphql_yulrmc.png",
      css: Stylecss.graphql,
      name: "GraphQL",
    },
    {
      img:
        "https://res.cloudinary.com/djnasfo5s/image/upload/c_scale,w_100/v1606925880/Portfolio/mongodb_emosrb.png",
      css: Stylecss.mongo,
      name: "MongoDB",
    },
    {
      img:
        "https://res.cloudinary.com/djnasfo5s/image/upload/c_scale,w_100/v1606925880/Portfolio/mysql_stqbry.png",
      css: Stylecss.mysql,
      name: "MySQL",
    },
  ];

  const software = [
    {
      img:
        "https://res.cloudinary.com/djnasfo5s/image/upload/c_scale,w_100/v1606925880/Portfolio/ps_jmlcnj.png",
      css: Stylecss.ps,
      name: "Photoshop",
    },
    {
      img:
        "https://res.cloudinary.com/djnasfo5s/image/upload/c_scale,w_100/v1606925880/Portfolio/ai_fum6bv.png",
      css: Stylecss.ai,
      name: "Illustrator",
    },
    {
      img:
        "https://res.cloudinary.com/djnasfo5s/image/upload/c_scale,w_100/v1606925880/Portfolio/xd_q9ankl.png",
      css: Stylecss.xd,
      name: "XD",
    },
    {
      img:
        "https://res.cloudinary.com/djnasfo5s/image/upload/c_scale,w_100/v1606925880/Portfolio/Pr_cmoij4.png",
      css: Stylecss.pr,
      name: "PremierePro",
    },
    {
      img:
        "https://res.cloudinary.com/djnasfo5s/image/upload/c_scale,w_100/v1606925880/Portfolio/Ae_ujcwkw.png",
      css: Stylecss.ae,
      name: "AfterEffects",
    },
    {
      img:
        "https://res.cloudinary.com/djnasfo5s/image/upload/c_scale,w_100/v1606925881/Portfolio/vscode_slps4v.png",
      css: Stylecss.vs,
      name: "VS Code",
    }
  ];
  return (
    <>
      <div
        id="#skill"
        style={{
          position: "relative",
          padding: "30px 8px",
          backgroundColor: "#5DE3FF",
          width: "100%",
          height: "100%",
        }}
      >
        <ScrollAnimation animateIn="fadeIn">
        <div
          style={{
            backgroundColor: "",
            display: "grid",
            gridTemplateRows: "auto auto auto auto",
            margin: "auto",
          }}
        >
          <div style={{ margin: "20px auto", fontWeight: 600, fontSize: "35px" }}>
            Technical skills
          </div>

          <div className={Stylecss.listskill}>
            {tskill.map((prop) => (
              <div style={{ display: "grid", width: "115px",gridTemplateRows: "115px 25px" }}>
                <div className={prop.css}>
                  <img src={prop.img} />
                </div>
                <span style={{ fontWeight: 600, margin: "auto" }}>
                  {prop.name}
                </span>
              </div>
            ))}
          </div>

          <div style={{ margin: "20px auto", fontWeight: 600, fontSize: "35px" }}>
          Software
          </div>

          <div className={Stylecss.listskill}>
            {software.map((prop) => (
              <div style={{ display: "grid",  width: "115px",gridTemplateRows: "115px 25px"}}>
                <div className={prop.css}>
                  <img src={prop.img} />
                </div>
                <span style={{ fontWeight: 600, margin: "auto" }}>
                  {prop.name}
                </span>
              </div>
            ))}
          </div>

        </div></ScrollAnimation>
      </div>
      <button onClick={requestResetPassword}>55555</button>
    </>
  );
};

export default skill;
