import React, { useState, useEffect } from "react";
import Stylecss from "../assets/styles/contract.module.scss";
import { Modal, Spinner } from "react-bootstrap";

import ScrollAnimation from "react-animate-on-scroll";

import MapGL, {
  Marker,
  FullscreenControl,
  GeolocateControl,
} from "@urbica/react-map-gl";

import { Icon } from "react-icons-kit";
import { ic_place } from "react-icons-kit/md/ic_place";
import { circle_ok } from "react-icons-kit/ikons/circle_ok";

export const index = () => {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  // console.log(status);

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (status.submitting === true) {
      setShow(true);
    }
    if (status.submitting === false) {
      setShow(false);
    }
    if (status.submitted === true) {
      setTimeout(function () {
        setStatus((prevStatus) => ({ ...prevStatus, submitted: false }));
      }, 2000);
    }
    if (status.submitting === false) {
    }
  }, [status]);

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  const [viewport, setViewport] = useState({
    latitude: 20.096,
    longitude: 100.082,
    zoom: 8,
  });

  const [position, setPosition] = useState({
    latitude: 20.096,
    longitude: 100.082,
  });

  return (
    <div
      id="#skill"
      style={{
        position: "relative",
        padding: "30px 8px",
        backgroundColor: "#ffe742",
        width: "100%",
        height: "100%",
      }}
    >
      <ScrollAnimation animateIn="fadeIn">
      <div className={Stylecss.fromall}>
        <div
          style={{
            display: "grid",
            gap: "10px",
            margin: "0 auto auto auto ",
            width: "325px",
          }}
        >
          <div
            style={{
              width: "fit-content",
              margin: "auto",
              fontWeight: 800,
              fontSize: "38px",
            }}
          >
            Contact me
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "157.5px 157.5px",
              gap: "10px",
              width: "325px",
            }}
          >
            <input
              id="name"
              type="text"
              className={Stylecss.inputs}
              onChange={handleOnChange}
              required
              value={inputs.name}
              placeholder="Name"
            />
            <input
              id="email"
              type="email"
              className={Stylecss.inputs}
              onChange={handleOnChange}
              required
              value={inputs.email}
              placeholder="Email"
            />
          </div>

          <input
            id="subject"
            type="text"
            className={Stylecss.inputs}
            onChange={handleOnChange}
            required
            value={inputs.subject}
            placeholder="Subject"
          />
          <textarea
            id="message"
            className={Stylecss.inputs}
            onChange={handleOnChange}
            required
            value={inputs.message}
            placeholder="Message"
          />
          <button
            className={Stylecss.submit}
            onClick={handleOnSubmit}
            disabled={
              status.submitting ||
              !inputs.name ||
              !inputs.email ||
              !inputs.subject ||
              !inputs.message
            }
            style={{
              backgroundColor: `${
                status.submitting ||
                !inputs.name ||
                !inputs.email ||
                !inputs.subject ||
                !inputs.message
                  ? "gray"
                  : ""
              }`,
            }}
          >
            {!status.submitting
              ? !status.submitted
                ? "send"
                : "sended"
              : "Submitting..."}
          </button>
        </div>

        <div>
          <MapGL
            style={{ width: "100%", height: "300px", borderRadius: "20px" }}
            mapStyle="mapbox://styles/merculies/cki8av6bm96rm19lr5an3s9mt"
            accessToken="pk.eyJ1IjoibWVyY3VsaWVzIiwiYSI6ImNraTg5bWhrZDAzbTMyeXBrZTFpdTFvZncifQ.0EdfQLjbIxhLTYvflRY8Kw"
            latitude={viewport.latitude}
            longitude={viewport.longitude}
            zoom={viewport.zoom}
            onViewportChange={setViewport}
          >
            <FullscreenControl position="top-right" />
            <GeolocateControl position="top-right" />
            <Marker
              longitude={position.longitude}
              latitude={position.latitude}
              draggable={false}
            >
              <div style={style}>
                i'm here!
                <br />
                <Icon
                  size={"30px"}
                  icon={ic_place}
                  style={{ margin: "auto" }}
                />
              </div>
            </Marker>
          </MapGL>

          <Modal show={status.submitted} style={{ margin: "auto", top: "45%" }}>
            <Modal.Body
              style={{
                margin: "auto",
                width: "fit-content",
                textAlign: "center",
              }}
            >
              <Icon
                size={"80px"}
                icon={circle_ok}
                style={{ margin: "auto", color: "green" }}
              />
              <br />
              Success
            </Modal.Body>
          </Modal>

          <Modal show={show} style={{ margin: "auto", top: "45%" }}>
            <Modal.Body
              style={{
                margin: "auto",
                width: "fit-content",
                textAlign: "center",
              }}
            >
              <div className={Stylecss.ldsring}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <br />
              Loading
            </Modal.Body>
          </Modal>
        </div>
      </div>
      </ScrollAnimation>
    </div>
  );
};

export default index;
const style = {
  color: "red",
  cursor: "pointer",
  textAlign: "center",
};
