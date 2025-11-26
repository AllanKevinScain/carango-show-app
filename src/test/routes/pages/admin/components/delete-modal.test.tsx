import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { DeleteModal } from "@/routes/pages/admin/components/delete-modal";

describe("DeleteModal", () => {
  const handleClose = vi.fn();

  it("não deve renderizar o modal", async () => {
    render(
      <DeleteModal
        open={false}
        handle={handleClose}
        handleDelete={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const elementsWithClass = document.getElementsByClassName(
      "opacity-0 pointer-events-none"
    );
    expect(elementsWithClass.length).toBeGreaterThan(0);
  });

  it("deve renderizar o modal", async () => {
    render(
      <DeleteModal
        open={true}
        handle={handleClose}
        handleDelete={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    expect(screen.getByText("Confirmar Remoção")).toBeInTheDocument();
  });
});
