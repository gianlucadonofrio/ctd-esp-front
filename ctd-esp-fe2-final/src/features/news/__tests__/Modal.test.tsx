import { screen, render, waitFor } from "../../../test-utils";
import ModalNoticias from "../Modal/ModalNoticias";
import userEvent from "@testing-library/user-event";

const noticias = [
  {
    id: 1,
    titulo: "Los Simpson 'predijeron' escasez de combustible",
    descripcion: `La más reciente es una teoría de que un episodio de 2010 del programa,
          titulado "Lisa Simpson, esta no es tu vida", predijo la crisis de combustible en el Reino Unido.
          Tras los informes de escasez de más de 100.000 vehículos, muchos conductores han estado comprando
          gasolina por pánico, lo que ha llevado a estaciones vacías apenas unas horas después de abiertas.
          Esto ha sido comparado con la escena de Los Simpson en la que se puede ver a Homero llenando el 
          maletero de su coche con 1,000 galones de combustible para ganar un juguete promocional para su hija Maggie.`,
    imagen:
      "https://i2-prod.mirror.co.uk/incoming/article25142408.ece/ALTERNATES/s615b/0_SIMPSONSJPG.jpg",
    fecha: "2021-09-20T00:00:00.000Z",
    esPremium: false,
    fuente:
      "https://www.mirror.co.uk/tv/tv-news/simpsons-fans-convinced-show-predicted-25140770",
  },
  {
    id: 1,
    titulo: "Los Simpson 'predijeron' escasez de combustible",
    descripcion: `La más reciente es una teoría de que un episodio de 2010 del programa,
          titulado "Lisa Simpson, esta no es tu vida", predijo la crisis de combustible en el Reino Unido.
          Tras los informes de escasez de más de 100.000 vehículos, muchos conductores han estado comprando
          gasolina por pánico, lo que ha llevado a estaciones vacías apenas unas horas después de abiertas.
          Esto ha sido comparado con la escena de Los Simpson en la que se puede ver a Homero llenando el 
          maletero de su coche con 1,000 galones de combustible para ganar un juguete promocional para su hija Maggie.`,
    imagen:
      "https://i2-prod.mirror.co.uk/incoming/article25142408.ece/ALTERNATES/s615b/0_SIMPSONSJPG.jpg",
    fecha: "2021-09-20T00:00:00.000Z",
    esPremium: true,
    fuente:
      "https://www.mirror.co.uk/tv/tv-news/simpsons-fans-convinced-show-predicted-25140770",
  },
];

describe("Pruebas en <Modal/>", () => {
  const setModal = jest.fn();

  test("Debe de mostrarse correctamente", async () => {
    render(<ModalNoticias modal={noticias[0]} setModal={setModal} />);
    expect(await screen.findByAltText("close-button")).toBeVisible();
  });

  test("Debe de mostrar el modal premium", async () => {
    render(<ModalNoticias modal={noticias[1]} setModal={setModal} />);
    expect(
      await screen.findByText("Suscríbete a nuestro Newsletter")
    ).toBeVisible();
    expect(
      await screen.findByText(
        "Suscríbete a nuestro newsletter y recibe noticias de nuestros personajes favoritos."
      )
    ).toBeVisible();
    expect(await screen.findByText("Suscríbete")).toBeVisible();
  });
  test("Debe de mostrar el alert", async () => {
    window.alert = jest.fn();
    render(<ModalNoticias modal={noticias[1]} setModal={setModal} />);
    expect(screen.getByLabelText("suscribe-btn")).toBeInTheDocument();
    await userEvent.click(await screen.findByLabelText("suscribe-btn"));
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledTimes(1);
    });
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("Suscripto!");
    });
  });
  test("Debe de cerrar el modal premium al hacer click en el boton", async () => {
    render(<ModalNoticias modal={noticias[1]} setModal={setModal} />);
    expect(await screen.findByAltText("close-button")).toBeVisible();
    await userEvent.click(await screen.findByAltText("close-button"));
  });
  test("Debe de cerrar el modal al hacer click en el boton", async () => {
    render(<ModalNoticias modal={noticias[0]} setModal={setModal} />);
    expect(await screen.findByAltText("close-button")).toBeVisible();
    await userEvent.click(await screen.findByAltText("close-button"));
  });
});
