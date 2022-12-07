import { FC, useState } from "react";
import { INoticiasNormalizadas } from "./interfaces/types";
import ModalNoticias from "./Modal/ModalNoticias";
import {
  TarjetaNoticia,
  FechaTarjetaNoticia,
  DescripcionTarjetaNoticia,
  ImagenTarjetaNoticia,
  TituloTarjetaNoticia,
  BotonLectura,
} from "./styled";

interface Props {
  noticias: INoticiasNormalizadas;
}

const TarjetaNoticias: FC<Props> = ({ noticias }) => {
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  return (
    <TarjetaNoticia>
      <ImagenTarjetaNoticia src={noticias.imagen} />
      <TituloTarjetaNoticia>{noticias.titulo}</TituloTarjetaNoticia>
      <FechaTarjetaNoticia>{noticias.fecha}</FechaTarjetaNoticia>
      <DescripcionTarjetaNoticia>
        {noticias.descripcionCorta}
      </DescripcionTarjetaNoticia>
      <BotonLectura onClick={() => setModal(noticias)}>Ver más</BotonLectura>
      <ModalNoticias modal={modal} setModal={setModal} />
    </TarjetaNoticia>
  );
};

export default TarjetaNoticias;
