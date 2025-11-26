import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { EditModal } from "@/routes/pages/admin/components";

describe("EditModal", () => {
  const handleClose = vi.fn();
  const mockProduct = {
    id: 1,
    name: "Test Product",
    price: 100,
    trade: "Test Trade",
    model: "Test Model",
    thumb: "test.jpg",
    year: "2023-01-01",
    supplierId: 1,
    specifications: [],
  };

  it("não deve renderizar o modal", async () => {
    render(
      <EditModal open={false} handle={handleClose} product={mockProduct} />
    );
    const elementsWithClass = document.getElementsByClassName(
      "opacity-0 pointer-events-none"
    );
    expect(elementsWithClass.length).toBeGreaterThan(0);
  });

  it("deve renderizar o modal", async () => {
    render(
      <EditModal open={true} handle={handleClose} product={mockProduct} />
    );

    expect(screen.getByText("Editar Produto")).toBeInTheDocument();
  });
});
