import {
  CloseButton,
  TarjetaModal,
  ContenedorModal,
  DescripcionModal,
  ImagenModal,
  TituloModal,
  CotenedorTexto,
} from "../styled";
import { CloseButton as Close } from "../../../assets";
import { FC } from "react";
import { INoticiasNormalizadas } from "../interfaces/types";
import { ModalPremium } from "./ModalPremium";

interface Props {
  modal: INoticiasNormalizadas | null;
  setModal: React.Dispatch<React.SetStateAction<INoticiasNormalizadas | null>>;
}
const ModalNoticias: FC<Props> = ({ modal, setModal }) => {
  return (
    <>
      {modal ? (
        modal.esPremium ? (
          <ModalPremium setModal={setModal} />
        ) : (
          <ContenedorModal>
            <TarjetaModal>
              <CloseButton onClick={() => setModal(null)}>
                <img src={Close} alt="close-button" />
              </CloseButton>
              <ImagenModal src={modal.imagen} alt="news-image" />
              <CotenedorTexto>
                <TituloModal>{modal.titulo}</TituloModal>
                <DescripcionModal>{modal.descripcion}</DescripcionModal>
              </CotenedorTexto>
            </TarjetaModal>
          </ContenedorModal>
        )
      ) : null}
    </>
  );
};
export default ModalNoticias;
