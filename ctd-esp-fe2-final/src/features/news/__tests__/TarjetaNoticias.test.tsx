import userEvent from "@testing-library/user-event";
import { screen, render } from "../../../test-utils";
import TarjetaNoticias from "../TarjetaNoticias";

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
];

describe("Pruebas en <TarjetaNoticias />", () => {
  test("Debe de mostrarse correctamente", async () => {
    render(<TarjetaNoticias noticias={noticias[0]} />);
    expect(
      await screen.findByText("Los Simpson 'predijeron' escasez de combustible")
    ).toBeVisible();
    expect(await screen.findByText("Ver más")).toBeVisible();
  });
  test("Debe de mostrar el modal al hacer click en el boton", async () => {
    render(<TarjetaNoticias noticias={noticias[0]} />);
    await userEvent.click(await screen.findByText("Ver más"));
    expect(await screen.findByAltText("close-button")).toBeVisible();
  });
});
