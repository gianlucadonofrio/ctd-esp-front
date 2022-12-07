import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import {
  BioDescription,
  BioImage,
  BioNombre,
  BioContainer,
  ContenedorBotones,
  BotonBio,
} from "./styled";
const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <BotonBio
        aria-label={nombre}
        isActive={(bioActiva.id === nombre) as boolean}
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}
      >
        {nombre}
      </BotonBio>
    ));
  };

  return (
    <div className={BioContainer}>
      <div className={ContenedorBotones}>{crearBotones()}</div>
      <div>
        <div>
          <img
            src={bioActiva.image}
            alt={bioActiva.nombre}
            className={BioImage}
          />
        </div>
        <div>
          <h3 className={BioNombre}>{bioActiva.nombre}</h3>
          <p className={BioDescription}>{bioActiva.descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
