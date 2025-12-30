import { createContext, useContext } from "react";

interface TwitchContextProps {
	isConnected: boolean;
}

export const TwitchContext = createContext<TwitchContextProps>({
	isConnected: false,
});

export const useTwitchContext = () => useContext(TwitchContext);
