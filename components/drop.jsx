import React, { useEffect, useState, useRef } from "react";
import Matter from "matter-js";
import { useSpring, animated } from "react-spring";
import Typical from "react-typical";
import Stylecss from "../assets/styles/drop.module.scss";

const STATIC_DENSITY = 15;
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const MatterStepThree = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  // console.log(props);

  const [item, setItem] = useState([
    "https://res.cloudinary.com/djnasfo5s/image/upload/q_auto,f_auto,o_80/v1605244950/Portfolio/drop4_phwtnh.png",
    "https://res.cloudinary.com/djnasfo5s/image/upload/q_auto,f_auto,o_80/v1605244950/Portfolio/drop1_rkzzx6.png",
    "https://res.cloudinary.com/djnasfo5s/image/upload/q_auto,f_auto,o_80/v1605244949/Portfolio/drop2_llpeiz.png",
    "https://res.cloudinary.com/djnasfo5s/image/upload/q_auto,f_auto,o_80/v1605244950/Portfolio/drop3_mguhff.png",
  ]);
  const boxRef = useRef(null);
  const canvasRef = useRef(null);
  const [scene, setScene] = useState();
  const [constraints, setContraints] = useState();
  const [someStateValue, setSomeStateValue] = useState(false);
  const handleClick = () => {
    setSomeStateValue(!someStateValue);
  };

  const handleResize = () => {
    setContraints(boxRef.current.getBoundingClientRect());
  };

  function createBoop(url) {
    const boop = Matter.Bodies.circle(
      Math.round(Math.random() * window.innerWidth),
      -30,
      35,
      {
        angle: Math.PI * (Math.random() * 2 - 1),
        friction: 0.001,
        frictionAir: 0.01,
        restitution: 0.75,
        render: {
          sprite: {
            texture: url,
            xScale: 1,
            yScale: 1,
          },
        },
      }
    );

    Matter.World.add(scene.engine.world, [boop]);
  }

  useEffect(() => {
    const height = boxRef.current.clientHeight;
    const width = boxRef.current.clientWidth;

    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let World = Matter.World;
    let Bodies = Matter.Bodies;
    let Runner = Matter.Runner;
    const runner = Runner.create();
    let engine = Engine.create({});
    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        height,
        width,
        background: "transparent",
        wireframes: false,
      },
    });
    // const boundaries = {
    //   isStatic: true,
    //   render: {
    //     fillStyle: "transparent",
    //     strokeStyle: "transparent",
    //   },
    // };
    // const ground = Bodies.rectangle(
    //   boxRef.current.clientWidth / 2,
    //   boxRef.current.clientHeight,
    //   boxRef.current.clientWidth + 20,
    //   4,
    //   boundaries
    // );
    // const leftWall = Bodies.rectangle(
    //   0,
    //   boxRef.current.clientHeight / 2,
    //   4,
    //   boxRef.current.clientHeight + 60,
    //   boundaries
    // );
    // const rightWall = Bodies.rectangle(
    //   boxRef.current.clientWidth,
    //   boxRef.current.clientHeight / 2,
    //   4,
    //   boxRef.current.clientHeight + 60,
    //   boundaries
    // );

    // World.add(engine.world, [ground, leftWall, rightWall]);

    const floor = Bodies.rectangle(0, 0, 0, STATIC_DENSITY, {
      isStatic: true,
      render: {
        fillStyle: "blue",
      },
    });
    World.add(engine.world, [floor]);
    Runner.run(runner, engine);
    Engine.run(engine);
    Render.run(render);
    setContraints(boxRef.current.getBoundingClientRect());
    setScene(render);
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setTimeout(handleClick(), 500);
  }, []);

  useEffect(() => {
    if (constraints) {
      let { width, height } = constraints;
      // Dynamically update canvas and bounds
      scene.bounds.max.x = width;
      scene.bounds.max.y = height;
      scene.options.width = width;
      scene.options.height = height;
      scene.canvas.width = width;
      scene.canvas.height = height;
      // Dynamically update floor
      const floor = scene.engine.world.bodies[0];
      Matter.Body.setPosition(floor, {
        x: width / 2,
        y: height + STATIC_DENSITY / 2,
      });
      Matter.Body.setVertices(floor, [
        { x: 0, y: height },
        { x: width, y: height },
        { x: width, y: height + STATIC_DENSITY },
        { x: 0, y: height + STATIC_DENSITY },
      ]);
    }
  }, [scene, constraints]);

  useEffect(() => {
    // Add a new "item" everytime `someStateValue` changes
    if (scene) {
      const boopImage = item[Math.floor(Math.random() * item.length)];
      createBoop(boopImage);
    }
  }, [someStateValue]);

  // useEffect(
  //   () => {
  //     // function doSomething() {
  //     // console.log(someProp)
  //     // }
  //     //   doSomething()
  //     setInterval(handleClick, 1000);
  //   },
  //   [
  //     /*someProp*/
  //   ]
  // );

  return (
    <>
      <div
        style={{
          position: "relative",
          border: "1px solid white",
          padding: "8px",
        }}
      >
        <div style={{ position: "relative", zIndex: 2 }}>
          <animated.div
            className={Stylecss.card}
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
            onClick={() => handleClick()}
          >
            <img
              className={Stylecss.arrow}
              src="https://res.cloudinary.com/djnasfo5s/image/upload/v1605251134/Portfolio/Arrow_vvdrub.png"
            />

            <div className={Stylecss.click}>click me!!</div>
          </animated.div>
        </div>
        <div
          ref={boxRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          <canvas ref={canvasRef} />
        </div>
      </div>
    </>
  );
};

export default MatterStepThree;
