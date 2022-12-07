import userEvent from "@testing-library/user-event";
import { screen, render } from "../../test-utils";
import Cita from "./Cita";
import { waitFor } from "@testing-library/react";

describe("Pruebas en el componente <Cita />", () => {
  test("Debe de mostrar el componente correctamente", () => {
    render(<Cita />);
    expect(screen.getByText("No se encontro ninguna cita")).toBeInTheDocument();
    expect(screen.getByLabelText("Obtener cita aleatoria")).toBeEnabled();
    expect(screen.getByLabelText("Borrar")).toBeEnabled();
  });

  test("Debe de cambiar el valor del input", async () => {
    render(<Cita />);
    const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
    await userEvent.type(input, "Apu Nahasapeemapetilon");
    expect(input as HTMLInputElement).toHaveValue("Apu Nahasapeemapetilon");
  });

  test("Debe de mostrar una cita aleatoria", async () => {
    render(<Cita />);
    expect(
      screen.getByPlaceholderText("Ingresa el nombre del autor")
    ).toBeVisible();
    expect(screen.getByLabelText("Obtener cita aleatoria")).toBeEnabled();
    expect(screen.getByLabelText("Borrar")).toBeEnabled();
  });

  test("Debe de mostrar un mensaje al ingresar un numero", async () => {
    render(<Cita />);
    const input = screen.getByLabelText("Author Cita");
    userEvent.type(input, "123");
    await waitFor(() => expect(input).toHaveValue("123"));
    userEvent.click(screen.getByLabelText("Obtener Cita"));
    expect(
      (await screen.findAllByText("Por favor ingrese un nombre válido")).length
    ).toBeGreaterThan(0);
  });

  test("Cuando se hace click en el boton borrar, debe de limpiar el input", async () => {
    render(<Cita />);
    await userEvent.click(screen.getByLabelText("Borrar"));
    expect(screen.getByLabelText("Author Cita")).toHaveValue("");
    expect(
      (await screen.findAllByText("No se encontro ninguna cita")).length
    ).toBeGreaterThan(0);
  });

  test("Debe de mostrar un error al ingresar un nombre no valido", async () => {
    render(<Cita />);
    const input = screen.getByLabelText("Author Cita");
    userEvent.type(input, "Rick");
    await waitFor(() => expect(input).toHaveValue("Rick"));
    userEvent.click(screen.getByLabelText("Obtener Cita"));
    expect(
      (await screen.findAllByText("Por favor ingrese un nombre válido")).length
    ).toBeGreaterThan(0);
  });
});
