import React from "react";
import Stylecss from "../../assets/styles/about.module.scss";

// import { useSpring, animated } from 'react-spring'
// import { useGesture } from 'react-with-gesture'

const edu = () => {
  //     const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))
  //   const bind = useGesture(({ down, delta, velocity }) => {

  //     set({ xy: down ? delta : [0, 0] })
  //   })
  return (
    <div
      style={{
        width: "975px",
        margin: "40px auto 36px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      {/* <animated.div {...bind()} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`) }} > */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "30px 1fr",
          gap: "8px",
          margin: "0 auto",
          //   boxShadow: "0px 0px 2px rgb(0 0 0 / 40%)",
        }}
      >
        <div
        className={Stylecss.topic}
          style={{
            height: "30px",
            fontSize: "52px",
            fontWeight: "700",
            textAlign: "center",
            transform: "rotate(-90deg)",
            margin:"auto 49px 12px -13px"
          }}
        >
          EDUCATION
        </div>
        <div
          style={{
            width: "350px",
            //   backgroundColor: "white",
            display: "grid",
            gridTemplateRows: "1fr 1fr 1fr 1fr",
            gap: "8px",
            padding: "15px",
            borderRadius: "20px",
            margin: "0 auto",
            //   boxShadow: "0px 0px 2px rgb(0 0 0 / 40%)",
          }}
        >
          <div
            className={Stylecss.school}
            style={{
              background: "linear-gradient(90deg, #ff008c  25%,#ff5847  100%)",
            }}
          >
            <div className={Stylecss.year}>
              2004 <br />
              —— <br /> 2011
            </div>

            <div className={Stylecss.fromgrade}>
              <div className={Stylecss.grade}>Grade 1-8</div>
              <div
                style={{
                  fontSize: "11px",
                }}
              >
                Maekhum School <br />
                Chiang rai
              </div>
            </div>
          </div>
          <div
            className={Stylecss.school}
            style={{
              background: "linear-gradient(90deg, #D309E1  25%,#ff6582  100%)",
            }}
          >
            <div className={Stylecss.year}>2012</div>

            <div className={Stylecss.fromgrade}>
              <div className={Stylecss.grade}>Grade 9</div>
              <div
                style={{
                  fontSize: "11px",
                }}
              >
                Maekhum School <br />
                Chiang rai
              </div>
            </div>
          </div>{" "}
          <div
            className={Stylecss.school}
            style={{
              background: "linear-gradient(90deg, #9C1AFF  25%,#f466f7  100%)",
            }}
          >
            <div className={Stylecss.year}>
              2013 <br />
              —— <br /> 2015
            </div>

            <div className={Stylecss.fromgrade}>
              <div className={Stylecss.grade}>Grade 10-12</div>
              <div
                style={{
                  fontSize: "11px",
                }}
              >
                Doiluang ratchamungklaphisek School <br />
                Chiang rai
              </div>
            </div>
          </div>{" "}
          <div
            className={Stylecss.school}
            style={{
              background: "linear-gradient(90deg, #7700FF  25%,#54a0ff  100%)",
            }}
          >
            <div className={Stylecss.year}>
              2016 <br />
              —— <br /> 2019
            </div>

            <div className={Stylecss.fromgrade}>
              <div className={Stylecss.grade} style={{ fontSize: "21px" }}>
                Computer Engineering
              </div>
              <div
                style={{
                  fontSize: "11px",
                }}
              >
                University of phayao <br />
                Phayao
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "30px 1fr",
          gap: "8px",
          margin: "0 auto",
          //   boxShadow: "0px 0px 2px rgb(0 0 0 / 40%)",
        }}
      >
        <div
        className={Stylecss.topic2}
          style={{
            height: "30px",
            fontSize: "52px",
            fontWeight: "700",
            textAlign: "center",
            transform: "rotate(-90deg)",
            margin:"auto 49px 10px -13px"
          }}
        >
          EXPERIENCE
        </div>
      <div
        style={{
          width: "350px",
          display: "grid",
          gridTemplateRows: "1fr 1fr 1fr 1fr",
          gap: "8px",
          padding: "15px",
          margin: "0 auto",
        }}
      >
        
        <div
          className={Stylecss.school}
          style={{
            background: "linear-gradient(90deg, #ff008c  25%,#ff5847  100%)",
          }}
        >
          <div className={Stylecss.year}>
            22 <br />
            JUN <br /> 2017
          </div>

          <div className={Stylecss.fromgrade}>
            <div className={Stylecss.grade}>STL 2017</div>
            <div
              style={{
                fontSize: "11px",
              }}
            >
              CMU Art center <br />
              Chiang mai
            </div>
          </div>
        </div>
        <div
          className={Stylecss.school}
          style={{
            background: "linear-gradient(90deg, #D309E1  25%,#ff6582  100%)",
          }}
        >
          <div className={Stylecss.year}>
            11 <br />
            NOV <br /> 2017
          </div>

          <div className={Stylecss.fromgrade}>
            <div className={Stylecss.grade}>G-con 2018</div>
            <div
              style={{
                fontSize: "11px",
              }}
            >
              Maekhum School <br />
              Chiang rai
            </div>
          </div>
        </div>{" "}
        <div
          className={Stylecss.school}
          style={{
            background: "linear-gradient(90deg, #9C1AFF  25%,#f466f7  100%)",
          }}
        >
          <div className={Stylecss.year}>
            31 <br />
            MAR <br /> 2018
          </div>

          <div className={Stylecss.fromgrade}>
            <div className={Stylecss.grade}>STL 2018</div>
            <div
              style={{
                fontSize: "11px",
              }}
            >
              Northern science park chiang mai <br />
              Chiang mai
            </div>
          </div>
        </div>{" "}
        <div
          className={Stylecss.school}
          style={{
            background: "linear-gradient(90deg, #7700FF  25%,#54a0ff  100%)",
          }}
        >
          <div className={Stylecss.year}>
            5-6 <br />
            MAY <br /> 2018
          </div>

          <div className={Stylecss.fromgrade}>
            <div className={Stylecss.grade}>STL 2018</div>
            <div
              style={{
                fontSize: "11px",
              }}
            >
              Khon kaen university <br />
              Khon kaen
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* </animated.div> */}
    </div>
  );
};

export default edu;
