import React, { useState } from "react";
import MapGL, {
  Marker,
  FullscreenControl,
  GeolocateControl,
} from "@urbica/react-map-gl";

import { Icon } from "react-icons-kit";
import { ic_place } from "react-icons-kit/md/ic_place";

export const index = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    name:"",
    email: "",
    subject:"",
    message: "",
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name:"",
        email: "",
        subject:"",
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
      <div
        style={{
          backgroundColor: "red",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          margin: "auto",
          width: "800px",
        }}
      >
        <div
          style={{
            backgroundColor: "yellow",
            display: "grid",
            gridTemplateRows: "auto auto auto",
            gap:"10px",
            margin: "auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
            }}
          >
            <input id="name" type="text" onChange={handleOnChange} required value={inputs.name} placeholder="Name"/>
            <input id="email" type="email" onChange={handleOnChange} required value={inputs.email} placeholder="Email"/>
          </div>

          <input id="subject" type="text" onChange={handleOnChange} required value={inputs.subject} placeholder="Subject"/>
          <textarea
            id="message"
            onChange={handleOnChange}
            required
            value={inputs.message}
            placeholder="Message"
          />
          <button onClick={handleOnSubmit} disabled={status.submitting}>
              {!status.submitting
                ? !status.submitted
                  ? "send"
                  : "sended"
                : "Submitting..."}
            </button>
          {status.info.error && (
            <div className="error">Error: {status.info.msg}</div>
          )}
          {!status.info.error && status.info.msg && (
            <div className="success">{status.info.msg}</div>
          )}
        </div>

        <div>
          <MapGL
            style={{ width: "100%", height: "400px" }}
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
                {" "}
                <Icon
                  size={"30px"}
                  icon={ic_place}
                  style={{ margin: "auto" }}
                />
              </div>
            </Marker>
          </MapGL>
        </div>
      </div>
    </div>
  );
};

export default index;
const style = {
  color: "red",
  cursor: "pointer",
};
