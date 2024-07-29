import { create } from "zustand";

interface ModalStoreState {
  parentRef: React.RefObject<HTMLElement> | null;
  setParentRef: (parentRef: React.RefObject<HTMLElement> | null) => void;
}

export const useModalStore = create<ModalStoreState>((set) => ({
  parentRef: null,
  setParentRef: (parentRef: React.RefObject<HTMLElement> | null) => {
    set({ parentRef });
  },
}));
