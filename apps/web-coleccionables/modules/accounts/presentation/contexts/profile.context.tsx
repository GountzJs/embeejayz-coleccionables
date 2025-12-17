import { createContext, useContext } from "react";
import { useNavigate, useParams } from "react-router";
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
}

export function ProfileProvider({ children }: Props) {
	const { username = "" } = useParams();
	const navigate = useNavigate();
	const { data, isLoading, error } = useGetProfileQuery({
		username: username,
	});

	if (!isLoading && (!data || error)) return navigate("/404");

	return (
		<ProfileContext.Provider value={{ data, isLoading }}>
			{children}
		</ProfileContext.Provider>
	);
}
