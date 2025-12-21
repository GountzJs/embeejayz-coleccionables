import type { ProfileEntity } from "@embeejayz/core-accounts";
import { createContext, useContext } from "react";
import { useGetProfileQuery } from "../queries/get-profile.query";

interface ContextProps {
	data?: ProfileEntity;
	isLoading: boolean;
	error: Error | null;
}

const ProfileContext = createContext<ContextProps>({
	data: undefined,
	isLoading: false,
	error: null,
});

export const useProfileContext = () => useContext(ProfileContext);

interface Props {
	children: React.ReactNode;
	username: string;
}

export function ProfileProvider({ children, username }: Props) {
	const { data, isLoading, error } = useGetProfileQuery({
		username,
	});

	return (
		<ProfileContext.Provider value={{ data, isLoading, error }}>
			{children}
		</ProfileContext.Provider>
	);
}
