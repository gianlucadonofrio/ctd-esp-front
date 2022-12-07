import { screen, render } from "../../../test-utils";
import Noticias from "../Noticias";

describe("Pruebas en <Noticias/>", () => {
  test("Debe de mostrarse correctamente", async () => {
    render(<Noticias />);
    expect(screen.getByText("Noticias de los Simpsons")).toBeVisible();
    expect((await screen.findAllByText("Ver más")).length).toBeGreaterThan(0);
  });
});
