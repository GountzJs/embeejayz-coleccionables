import { createContext, useContext } from "react";

interface StickersContextType {
  stickers: string[];
  isLoading: boolean;
}

export const StickersContext = createContext<StickersContextType>({
  stickers: [],
  isLoading: false,
});

export const useStickersContext = () => {
  return useContext(StickersContext);
};
