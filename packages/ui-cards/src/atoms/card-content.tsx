import styled from "styled-components";

interface Props {
	paddingTop?: string;
}
export const CardContent = styled.div<Props>`
	padding-top: ${(props) => props.paddingTop || "80px"};
	align-items: center;
	display: flex;
	flex-direction: column;
	gap: 5px;
	padding-inline: 20px;
	padding-bottom: 34px;
	overflow-y: hidden;
	height: 100%;
	width: 100%;
`;

// ({ children, paddingTop = "80px" }: Props) {
// 	return (
// 		<div className={styles["content-container"]} style={{ paddingTop }}>
// 			{children}
// 		</div>
// 	);
// }
