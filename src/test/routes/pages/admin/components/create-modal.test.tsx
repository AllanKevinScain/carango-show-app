import { describe, it, expect, vi } from "vitest";
import { CreateModal } from "@/routes/pages/admin/components";
import { render, screen } from "@testing-library/react";

describe("CreateModal", () => {
  const handleClose = vi.fn();

  it("não deve renderizar o modal", async () => {
    render(<CreateModal open={false} handle={handleClose} />);
    const elementsWithClass = document.getElementsByClassName(
      "opacity-0 pointer-events-none"
    );
    expect(elementsWithClass.length).toBeGreaterThan(0);
  });

  it("deve renderizar o modal", async () => {
    render(<CreateModal open={true} handle={handleClose} />);

    expect(screen.getByText("Criar Produto")).toBeInTheDocument();
  });
});
