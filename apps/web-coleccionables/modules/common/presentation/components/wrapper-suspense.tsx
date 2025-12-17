import { Suspense } from "react";
import { LoadingPage } from "./loading-page";

interface Props {
	element: React.ReactNode;
	fallback?: React.ReactNode;
}

export function WrapperSuspense({ element, fallback }: Props) {
	return <Suspense fallback={fallback ?? <LoadingPage />}>{element}</Suspense>;
}
