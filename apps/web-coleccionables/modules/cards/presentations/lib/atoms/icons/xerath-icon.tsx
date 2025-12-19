import { type SVGProps, useId } from "react";

interface Props extends SVGProps<SVGSVGElement> {
	size?: number;
}

export function XerathIcon({ size = 45.24, ...props }: Props) {
	const aspectRatio = 54.17 / 45.24;
	const height = Number(size) * aspectRatio;

	const id = useId();

	return (
		<svg width={size} height={height} viewBox="0 0 45.24 54.17" {...props}>
			<title>xerath</title>
			<defs>
				<linearGradient
					id={`${id}_570`}
					x1={36.58}
					x2={45.24}
					y1={13.81}
					y2={13.81}
					data-name="Degradado sin nombre 570"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.01} stopColor="#947916" />
					<stop offset={0.66} stopColor="#a47e13" />
					<stop offset={1} stopColor="#bfaa06" />
				</linearGradient>
				<linearGradient
					xlinkHref={`#${id}_570`}
					id={`${id}_570-2`}
					x1={33.38}
					x2={36.97}
					y1={17.5}
					y2={17.5}
					data-name="Degradado sin nombre 570"
				/>
				<linearGradient
					id={`${id}_584`}
					x1={25.74}
					x2={36}
					y1={11.13}
					y2={11.13}
					data-name="Degradado sin nombre 584"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0} stopColor="#947916" />
					<stop offset={1} stopColor="#bfaa06" />
				</linearGradient>
				<linearGradient
					id={`${id}_347`}
					x1={31.97}
					x2={33.43}
					y1={28.51}
					y2={28.51}
					data-name="Degradado sin nombre 347"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.26} stopColor="#a17b13" />
					<stop offset={1} stopColor="#fac712" />
				</linearGradient>
				<linearGradient
					xlinkHref={`#${id}_347`}
					id={`${id}_347-2`}
					x1={24.95}
					x2={31.47}
					y1={29.63}
					y2={29.63}
					data-name="Degradado sin nombre 347"
				/>
				<linearGradient
					xlinkHref={`#${id}_347`}
					id={`${id}_347-3`}
					x1={28.57}
					x2={31.06}
					y1={38.49}
					y2={38.49}
					data-name="Degradado sin nombre 347"
				/>
				<linearGradient
					id={`${id}_580`}
					x1={28.19}
					x2={30.82}
					y1={3}
					y2={3}
					data-name="Degradado sin nombre 580"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0} stopColor="#947916" />
					<stop offset={0.48} stopColor="#a47e13" />
					<stop offset={1} stopColor="#bfaa06" />
				</linearGradient>
				<linearGradient
					xlinkHref={`#${id}_347`}
					id={`${id}_347-4`}
					x1={24.14}
					x2={29.48}
					y1={41.29}
					y2={41.29}
					data-name="Degradado sin nombre 347"
				/>
				<linearGradient
					xlinkHref={`#${id}_347`}
					id={`${id}_347-5`}
					x1={24.39}
					x2={27.95}
					y1={49.62}
					y2={49.62}
					data-name="Degradado sin nombre 347"
				/>
				<linearGradient
					id={`${id}_345`}
					x1={19.64}
					x2={23.63}
					y1={49.45}
					y2={49.45}
					data-name="Degradado sin nombre 345"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0} stopColor="#fac712" />
					<stop offset={0.68} stopColor="#a17b13" />
				</linearGradient>
				<linearGradient
					xlinkHref={`#${id}_345`}
					id={`${id}_345-2`}
					x1={15.69}
					x2={23.37}
					y1={28.9}
					y2={28.9}
					data-name="Degradado sin nombre 345"
				/>
				<linearGradient
					xlinkHref={`#${id}_345`}
					id={`${id}_345-3`}
					x1={18.18}
					x2={22.97}
					y1={40.77}
					y2={40.77}
					data-name="Degradado sin nombre 345"
				/>
				<linearGradient
					id={`${id}_587`}
					x1={11.18}
					x2={21.86}
					y1={12}
					y2={12}
					data-name="Degradado sin nombre 587"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0} stopColor="#bfaa06" />
					<stop offset={1} stopColor="#947916" />
				</linearGradient>
				<linearGradient
					xlinkHref={`#${id}_345`}
					id={`${id}_345-4`}
					x1={16.88}
					x2={18.04}
					y1={38.98}
					y2={38.98}
					data-name="Degradado sin nombre 345"
				/>
				<linearGradient
					id={`${id}_575`}
					x1={4.27}
					x2={17.65}
					y1={20.45}
					y2={20.45}
					data-name="Degradado sin nombre 575"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0} stopColor="#bfaa06" />
					<stop offset={0.48} stopColor="#a47e13" />
					<stop offset={1} stopColor="#947916" />
				</linearGradient>
				<linearGradient
					xlinkHref={`#${id}_575`}
					id={`${id}_575-2`}
					x1={15.34}
					x2={16.73}
					y1={5.09}
					y2={5.09}
					data-name="Degradado sin nombre 575"
				/>
				<radialGradient
					id={`${id}_581`}
					cx={22.72}
					cy={6.85}
					r={3.49}
					data-name="Degradado sin nombre 581"
					fx={22.72}
					fy={6.85}
					gradientTransform="matrix(1.01 0 0 1.01 .97 -.27)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0} stopColor="#947916" />
					<stop offset={0.48} stopColor="#a47e13" />
					<stop offset={1} stopColor="#bfaa06" />
				</radialGradient>
			</defs>
			<g id="Capa_34" data-name="Capa 34">
				<path
					d="m44.08 11.66 1.16 2.24-2.26-.41-.66 1.82s-1.68.66-3.31 2.48l-.62-.12-.68 1.36-.19-1.41-.94-1.12 1.76-.16 1.23-2.95 1.6.14.75-1.28 1.39-.12.8-3.55.51 1.13-.54 1.95Z"
					style={{
						fill: `url(#${id}_570)`,
					}}
				/>
				<path
					d="M44.22 2.1s.89.73.39 2.43c0 0-1.22.99-.47 2.06 0 0 .4 1.1-.03 1.99l-.8 3.55-1.39.12-.75 1.28-1.6-.14-1.23 2.95-1.76.16.94 1.12.19 1.41-.97.1.23-1.1-.98-.91-.69-1.35-1.58.46-.35 1.42-1.65-1.52s-2.96 5.55-2.73 6.83l-.8.3-.21 1.34-2.43 1.58.41 1.85-.24 1.3.21 3.26-.99 1.1v1.44l3.18 1.17.85-.23s-.15.94.23 1.1l-.64 2.22-.35.1-.54-1.97-1.3.32-1.43-.85v3.47l-.81 1.3.14 2.03 2.97 1.8.52.71-.25 1.21-.69-.05v-.75l-1.96-1.64v2.86l.48 1.23-.96 2.01.75 2.99-1.07-1.53-.91 1.53.47-3.34-.47-.68.18-1.23-.37-2.42-.84-.18.59-1.58-2.49 1.58-.59-.48 3.33-2.65v-2.24l-.94-5.21-2.63 1.51v-1.51l1.63-1.38.96.55 1.37-.93v-2.78l-1.06-1.03v-3.8l-3.06-4.14s.48-.18-.43-1.6c0 0-1.18-1.87-1.16-2.56l-1.19-.73-.94 2.46-1.39 1.09-3.08.21-.14-.98-2.72-.78-2.24.34-1.69-1.17s-1.51-1.93-1.87-2.05c-.43-.14-.84.18-.84.18-.02 0-1.24 0-1.57-2.55 0 0 1.63 1.66 1.7 1.02 0 0 .3-.92-.31-1.35 0 0-.77-1.38.55-3.65l1.03 4.1s.83.74 1.01.53c0 0-.71-1.09-.76-1.29 0 0-.27-2.23.77-3.05 0 0 .45 4.12 2.09 4.01 0 0 .08-.64-.41-1.14 0 0-.35-1.48.8-2.38 0 0 .54 4.03 1.8 4.28 0 0-.77-1.5-.42-2.67 0 0 1.41 1.29 1.45 2.22l.82 1.39c.55.39 2.09.48 2.73.07l.95-2.05 5.4 2.38.94-3.15 1.71-2.28-2.56-2.84.48-.3.15-.15s2.84 1.19 3.94 1.85c0 0 3.2-1.87 4.1-1.73l.17.18-2.4 3.16 2.01 1.97.91 3.04 2.37-.78 3.7-2.81.91-2.22.96.13 1.38-1.45-.57-.78-.08-.81-.41-.95c-.07-.16-.16-.3-.28-.43l-.63-.68.74-.04c.42-.03.84.14 1.13.44l.32.33s-.11-1.91-1.19-2.92c0 0 1.02-.12 1.75.69l.53 1.45s.97-1.27.23-2.22l-1.01-1.77s1.83.07 2.31 1.08l.28.7s.73-.42 0-1.31c0 0-.79-1.78-.92-1.93.17.04 1.75.26 2.29 1.42l.73 2.39s1.05-.52.98-1.68ZM26.06 13.4l.1-.3-2.18-2.05-2.12 2.05.62 1.15h3.31l.27-.85Z"
					fill="#e5b313"
				/>
				<path
					d="m36.97 18.03-.23 1.1-.9.09-1.32-.52-1.14-1.04v-.01l.35-1.41 1.57-.47.69 1.35.98.91z"
					style={{
						fill: `url(#${id}_570-2)`,
					}}
				/>
				<path
					d="m36 9.05-.35 1.38-.92 2.22-3.7 2.8-2.37.79-.91-3.05-2.01-1.96 2.39-3.16.81-.13.82-1.91 1.06 1.8 1.39.08 2.09-1.72 1.05 2.6.65.26z"
					style={{
						fill: `url(#${id}_584)`,
					}}
				/>
				<path
					d="m32.84 26.76.59 1.03-.29.78-.39 1.69-.78-.63v-2.2l.87-.67z"
					style={{
						fill: `url(#${id}_347)`,
					}}
				/>
				<path
					d="m30.85 30.22.62.78s-1.44 4.34-2.49 5.07l-.85.23-3.18-1.17v-1.44l.99-1.1-.21-3.26.24-1.3-.41-1.85 2.43-1.58.21-1.34.8-.3 1.42 2.29-.59 1.44 1.19.89-.16 2.63Z"
					style={{
						fill: `url(#${id}_347-2)`,
					}}
				/>
				<path
					d="m31.06 37.73-.84 2.58h-1.01l-.64-.94.64-2.22c.07.03.15.03.25 0l.3-.5 1.3 1.07Z"
					style={{
						fill: `url(#${id}_347-3)`,
					}}
				/>
				<path
					d="m30.82.78-.14 2.4-2.08 2.03-.41-.39.2-1.87-.2-.39.73-1.62s1.14.12 1.28.02c.14-.09.62-.18.62-.18Z"
					style={{
						fill: `url(#${id}_580)`,
					}}
				/>
				<path
					d="m29.48 41.5-2.24 4.1-2.96-1.81-.14-2.03.81-1.31v-3.47l1.43.85 1.3-.32.54 1.96.17.6.45.98.64.45z"
					style={{
						fill: `url(#${id}_347-4)`,
					}}
				/>
				<path
					d="m28.57 39.38.64.94-.37.73-.45-.98-.17-.6.35-.09z"
					fill="#e5b313"
				/>
				<path
					d="m27.23 7.06.74.83c-.91-.14-4.1 1.73-4.1 1.73-1.09-.66-3.94-1.85-3.94-1.85l.86-.84s-.23-1.63 3.05-3.15c0 0 .26-.13.59 0 0 0 2.99 1.76 2.81 3.28Zm-1.51-.26s.38-.31.38-1c0 0-1.37.67-1.77 1.08 0 0 1.17.08 1.39-.08Zm-3.48 0c.22.15 1.39.08 1.39.08-.4-.41-1.77-1.08-1.77-1.08 0 .69.38 1 .38 1Z"
					style={{
						fill: `url(#${id}_581)`,
					}}
				/>
				<path
					d="m27.52 47.51.43.65-2.81 6.01-.75-3 .96-2.01-.48-1.23v-2.86l1.96 1.64v.76l.69.04z"
					style={{
						fill: `url(#${id}_347-5)`,
					}}
				/>
				<path
					d="m26.06 13.4-.28.85h-3.3l-.62-1.15 2.11-2.05 2.19 2.05-.1.3zM26.1 5.8c0 .69-.38 1-.38 1-.22.15-1.39.08-1.39.08.4-.41 1.77-1.08 1.77-1.08Z"
					fill="#e5b313"
				/>
				<path
					d="m23.16 50.14.47.69-.47 3.34-3.52-6.68.59-1.19 2.49-1.57-.59 1.57.84.19.37 2.42-.18 1.23z"
					style={{
						fill: `url(#${id}_345)`,
					}}
				/>
				<path
					d="M23.37 31.19v2.78L22 34.9l-.96-.55-1.63 1.38-1.07-.09s-2.21-3.66-2.47-4.91l-.18-2.79.89.21 1.53-.85-.94-1.85 1.49-3.36.59.14 3.06 4.14v3.8l1.06 1.03Z"
					style={{
						fill: `url(#${id}_345-2)`,
					}}
				/>
				<path
					d="M23.63 6.87s-1.17.08-1.39-.08c0 0-.38-.31-.38-1 0 0 1.37.67 1.77 1.08Z"
					fill="#e5b313"
				/>
				<path
					d="M22.97 40.93v2.24l-3.33 2.65-1.46-4.29.57-1.58-.07-2.33.73-.39 2.63-1.51.93 5.21z"
					style={{
						fill: `url(#${id}_345-3)`,
					}}
				/>
				<path
					d="m19.3 8.21 2.56 2.84-1.71 2.28-.94 3.15-5.4-2.38s-.92.35-1.79-.46l.53-.51s-1.03-2.99-1.37-3.02c0 0 2.62.18 2.85.37l1.09-1.16-.39-1.81 2.12.89 1.06-.29 1-.5.39.59Z"
					style={{
						fill: `url(#${id}_587)`,
					}}
				/>
				<path
					d="m17.84 37.64.2 1.85-.48.83-.68-1.67.96-1.01z"
					style={{
						fill: `url(#${id}_345-4)`,
					}}
				/>
				<path
					d="m17.65 18.06-2.32 3.71-.12 1.8-1.75-1.2s-4.94 1.16-5.62.15l-1.24.93-.57-2.19-1.34-1.19-.41-1.59 1.69 1.17 2.24-.34 2.72.78.14.98 3.08-.21 1.39-1.09.94-2.46 1.19.73Z"
					style={{
						fill: `url(#${id}_575)`,
					}}
				/>
				<path
					d="m15.92 3.83.81 1.26-.23 1.25L15.34 5l.58-1.17z"
					style={{
						fill: `url(#${id}_575-2)`,
					}}
				/>
			</g>
			<g data-name="CARTAS DORADAS">
				<g data-name="CARTA 4">
					<path
						d="M25.86 14.32h-3.6l-.76-1.35 2.37-2.27 2.44 2.23-.45 1.39Zm-3.37-.37h3.08l.29-.91-1.99-1.82-1.89 1.81.51.91Z"
						style={{
							fill: "#a17b15",
						}}
					/>
					<path
						d="m23.14 13.69-.52-.77 1.45-1.2.88.88-.27.27-.63-.63-.91.75.2.3 2.64-.19.02.38-2.86.21z"
						style={{
							fill: "#a17b14",
						}}
					/>
				</g>
			</g>
		</svg>
	);
}
