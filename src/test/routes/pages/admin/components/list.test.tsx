import { List } from "@/routes/pages/admin/components";
import { renderWithRouter } from "@/test/helpers";
import { describe, it, expect, vi } from "vitest";

vi.mock("@/hooks", () => ({
  useProduct: () => ({
    listProducts: vi.fn().mockResolvedValue({
      data: [],
      totalPages: 1,
    }),
  }),
  useToggle: () => ({
    open: false,
    handle: vi.fn(),
  }),
}));

vi.mock("@tanstack/react-query", () => ({
  useQuery: () => ({
    data: { data: [], totalPages: 1 },
    isLoading: false,
    refetch: vi.fn(),
  }),
}));

describe("List component", () => {
  it("renderiza sem quebrar", () => {
    renderWithRouter(<List />);
    expect(true).toBe(true);
  });
});
