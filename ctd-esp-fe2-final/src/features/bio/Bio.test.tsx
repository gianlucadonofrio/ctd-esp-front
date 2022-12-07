import userEvent from "@testing-library/user-event";
import { screen, render } from "../../test-utils";
import Bio from "./Bio";

describe("Pruebas en el componente <Cita />", () => {
  test("Debe de mostrar el componente correctamente", async () => {
    render(<Bio />);
    expect(await screen.findByAltText("Bart Simpson")).toBeVisible();
    expect(
      await screen.findByText(
        "A los diez años, Bart es el hijo mayor y único varón de Homero y Marge, y el hermano de Lisa y Maggie. Los rasgos de carácter más prominentes y populares de Bart son su picardía, rebeldía y falta de respeto a la autoridad."
      )
    ).toBeVisible();
  });

  test("Debe de mostrar la biografia de otro personaje", async () => {
    render(<Bio />);
    expect(screen.getByLabelText("MARGE")).toBeEnabled();
    await userEvent.click(screen.getByLabelText("MARGE"));
    expect(await screen.findByText("Marge Simpson")).toBeVisible();
    expect(
      await screen.findByText(
        'Marge es la madre de la familia Simpson. Con su marido Homero, tiene tres niños: Bart, Lisa y Maggie. Marge es la fuerza moralista en su familia y a menudo emplea una voz firme en medio de las travesuras de su familia, tratando de mantener el orden en la casa Simpson. A menudo se la representa como la típica madre de televisión y a menudo se incluye en las listas de las mejores "mamá de televisión".'
      )
    ).toBeVisible();
  });
});
