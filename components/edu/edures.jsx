import React from 'react'
import Stylecss from "../../assets/styles/about.module.scss";
import { Accordion, Card, Button } from "react-bootstrap";

const edures = () => {
    return (
        <div
        style={{
          width: "350px",
          margin: "0 auto 35px",
        }}
      >
        <Accordion >
          <Card
            style={{
              width: "350px",
            }}
          >
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="0"
              style={{
                fontSize: "30px",
                fontWeight: "700",
                textAlign: "center",
                color: "white",
                background: "#ff72e5",
              }}
            >
              <div>EDUCATION</div>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
              <div
                style={{
                  width: "350px",
                  backgroundColor: "white",
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
                    background:
                      "linear-gradient(90deg, #ff008c  25%,#ff5847  100%)",
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
                    background:
                      "linear-gradient(90deg, #D309E1  25%,#ff6582  100%)",
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
                    background:
                      "linear-gradient(90deg, #9C1AFF  25%,#f466f7  100%)",
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
                    background:
                      "linear-gradient(90deg, #7700FF  25%,#54a0ff  100%)",
                  }}
                >
                  <div className={Stylecss.year}>
                    2016 <br />
                    —— <br /> 2019
                  </div>

                  <div className={Stylecss.fromgrade}>
                    <div
                      className={Stylecss.grade}
                      style={{ fontSize: "21px" }}
                    >
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
              </div>
            </Accordion.Collapse>
          </Card>
          <Card
            style={{
              width: "350px",
            }}
          >
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="1"
              style={{
                fontSize: "30px",
                fontWeight: "700",
                textAlign: "center",
                color: "white",
                background: "#ff72e5",
              }}
            >
              <div>EXPERIENCE</div>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="1">
              <div
                style={{
                  width: "350px",
                  backgroundColor: "white",
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
                    background:
                      "linear-gradient(90deg, #ff008c  25%,#ff5847  100%)",
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
                    background:
                      "linear-gradient(90deg, #D309E1  25%,#ff6582  100%)",
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
                    background:
                      "linear-gradient(90deg, #9C1AFF  25%,#f466f7  100%)",
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
                    background:
                      "linear-gradient(90deg, #7700FF  25%,#54a0ff  100%)",
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
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
}

export default edures
