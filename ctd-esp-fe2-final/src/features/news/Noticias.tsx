import { useEffect } from "react";
import { ContenedorNoticias, ListaNoticias, TituloNoticias } from "./styled";
import TarjetaNoticias from "./TarjetaNoticias";
import { useNoticias } from "./useNoticias";

const Noticias = () => {
  const { noticias, obtenerInformacion } = useNoticias();

  useEffect(() => {
    obtenerInformacion();
  }, [obtenerInformacion]);

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias?.map((noticias) => (
          <TarjetaNoticias
            noticias={noticias}
            key={`key_notice_${noticias.id}`}
          />
        ))}
      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default Noticias;
