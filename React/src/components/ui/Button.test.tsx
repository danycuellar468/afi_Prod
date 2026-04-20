import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("renders the button text correctly", () => {
    render(
      <Button variant="primary" onClick={() => {}}>
        Play now
      </Button>
    );

    expect(screen.getByRole("button", { name: /play now/i })).toBeInTheDocument();
  });

  it("disables the button when disabled is true", () => {
    render(
      <Button variant="primary" onClick={() => {}} disabled>
        Continue
      </Button>
    );

    expect(screen.getByRole("button", { name: /continue/i })).toBeDisabled();
  });

  it("applies the gold variant styles", () => {
    render(
      <Button variant="gold" onClick={() => {}}>
        Shop
      </Button>
    );

    const button = screen.getByRole("button", { name: /shop/i });
    expect(button.className).toMatch(/bg-/);
  });
});