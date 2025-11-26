import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Modal } from "@/routes/pages/admin/components/modal";

describe("Modal", () => {
  const handleClose = vi.fn();

  it("não deve renderizar o modal", async () => {
    render(<Modal open={false} handle={handleClose} />);
    const elementsWithClass = document.getElementsByClassName(
      "opacity-0 pointer-events-none"
    );
    expect(elementsWithClass.length).toBeGreaterThan(0);
  });

  it("deve renderizar o modal", async () => {
    render(<Modal open={true} handle={handleClose} title="Teste Modal" />);

    expect(screen.getByText("Teste Modal")).toBeInTheDocument();
  });
});
