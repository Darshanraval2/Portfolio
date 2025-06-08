import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

function ParticleBackground() {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#00d5ff",
                    },
                    links: {
                        color: "#00d5ff",
                        distance: 150,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    move: {
                        direction: "bottom",
                        enable: true,
                        outModes: {
                            default: "out",
                        },
                        random: true,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 100,
                    },
                    opacity: {
                        value: 0.5,
                        animation: {
                            enable: true,
                            speed: 1,
                            minimumValue: 0.1,
                        },
                    },
                    shape: {
                        type: ["circle", "square"],
                    },
                    size: {
                        value: { min: 1, max: 3 },
                        animation: {
                            enable: true,
                            speed: 2,
                            minimumValue: 0.1,
                        },
                    },
                    rotate: {
                        value: {
                            min: 0,
                            max: 360
                        },
                        direction: "random",
                        animation: {
                            enable: true,
                            speed: 5
                        },
                    },
                },
                detectRetina: true,
            }}
        />
    );
}

export default ParticleBackground;