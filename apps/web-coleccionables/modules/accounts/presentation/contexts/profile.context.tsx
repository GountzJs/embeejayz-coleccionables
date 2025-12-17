import { createContext, useContext } from "react";
import type { ProfileEntity } from "../../domain/entities/profile.entity";
import { useGetProfileQuery } from "../queries/get-profile.query";

interface ContextProps {
	data?: ProfileEntity;
	isLoading: boolean;
}

const ProfileContext = createContext<ContextProps>({
	data: undefined,
	isLoading: false,
});

export const useProfileContext = () => useContext(ProfileContext);

interface Props {
	children: React.ReactNode;
	username: string;
}

export function ProfileProvider({ children, username }: Props) {
	const { data, isLoading } = useGetProfileQuery({
		username,
	});

	return (
		<ProfileContext.Provider value={{ data, isLoading }}>
			{children}
		</ProfileContext.Provider>
	);
}
