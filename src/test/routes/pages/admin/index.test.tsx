import { describe, it, expect, vi } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import { AdminPage } from "@/routes/pages/admin";
import { renderWithProviders } from "@/test/helpers";

const handleMock = vi.fn();

vi.mock("@/hooks", () => ({
  useToggle: () => ({
    open: false,
    handle: handleMock,
  }),
  useProduct: () => ({
    listProducts: vi.fn().mockResolvedValue({
      data: [],
      totalPages: 1,
    }),
  }),
}));

vi.mock("./components", () => {
  return {
    CreateModal: ({ open }: { open: boolean }) => (
      <div data-testid="create-modal">{open ? "open" : "closed"}</div>
    ),
    List: () => <div data-testid="list">list component</div>,
  };
});

describe("AdminPage", () => {
  it('deve chamar handle() ao clicar no botão "Novo"', () => {
    renderWithProviders(<AdminPage />);

    const button = screen.getByRole("button", { name: /novo/i });
    fireEvent.click(button);

    expect(handleMock).toHaveBeenCalledTimes(1);
  });

  it("container aparece em tela", () => {
    renderWithProviders(<AdminPage />);

    const elementsWithClass = document.getElementsByClassName(
      "flex flex-col gap-[32px]"
    );
    expect(elementsWithClass.length).toBeGreaterThan(0);
  });

  it("modal aparece em tela", () => {
    renderWithProviders(<AdminPage />);
    expect(screen.getByText("Criar Produto")).toBeInTheDocument();
  });
});
