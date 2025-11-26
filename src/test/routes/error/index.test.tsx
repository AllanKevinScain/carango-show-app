import { describe, it, expect } from "vitest";
import { renderWithProviders } from "@/test/helpers";
import { ErrorBoundary } from "@/routes/pages/error";
import { screen } from "@testing-library/dom";

describe("ErrorBoundaryPage", () => {
  it("container aparece em tela", () => {
    renderWithProviders(<ErrorBoundary />);

    expect(screen.getByText("Voltar para Home")).toBeInTheDocument();
  });
});
