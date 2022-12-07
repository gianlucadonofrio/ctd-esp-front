import {
  CloseButton,
  TarjetaModal,
  ContenedorModal,
  DescripcionModal,
  ImagenModal,
  TituloModal,
  BotonSuscribir,
  CotenedorTexto,
} from "../styled";
import { SuscribeImage, CloseButton as Close } from "../../../assets";
import { FC } from "react";

interface Props {
  setModal: (modal: null) => void;
}

export const ModalPremium: FC<Props> = ({ setModal }) => {
  return (
    <ContenedorModal>
      <TarjetaModal>
        <CloseButton onClick={() => setModal(null)}>
          <img src={Close} alt="close-button" />
        </CloseButton>
        <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
        <CotenedorTexto>
          <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
          <DescripcionModal>
            Suscríbete a nuestro newsletter y recibe noticias de nuestros
            personajes favoritos.
          </DescripcionModal>
          <BotonSuscribir
            aria-label="suscribe-btn"
            onClick={() => alert("Suscripto!")}
          >
            Suscríbete
          </BotonSuscribir>
        </CotenedorTexto>
      </TarjetaModal>
    </ContenedorModal>
  );
};
