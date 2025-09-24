import { useState } from "react";

export function useToggle() {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen((s) => !s);
  }

  return {
    open,
    handle: toggle,
  };
}
