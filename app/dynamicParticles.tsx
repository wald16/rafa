// components/dynamicParticles.js
import React from "react";
import Particles from "react-tsparticles";

const DynamicParticles = () => {
    return (
        <Particles
            id="tsparticles"
            options={{
                fullScreen: { enable: false },
                particles: {
                    number: {
                        value: 50,
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                    },
                    color: { value: "#ffffff" },
                    shape: { type: "circle" },
                    opacity: {
                        value: 0.5,
                        anim: { enable: false },
                    },
                    size: {
                        value: 3,
                        random: true,
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        outModes: { default: "out" },
                    },
                },
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "repulse" },
                        onClick: { enable: true, mode: "push" },
                    },
                    modes: {
                        repulse: { distance: 100 },
                        push: { quantity: 4 },
                    },
                },
            }}
        />
    );
};

export default DynamicParticles;
