import Particles from "@tsparticles/react";
import ParticleConfig from "../ParticleConfig/ParticleConfig";

const ParticleBg = () => {
    return (
        <div>
            <Particles params={ParticleConfig}></Particles>
        </div>
    );
};

export default ParticleBg;