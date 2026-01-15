import { type CSSProperties, useEffect, useRef, useState } from "react";

interface TicketTiltProps {
	children: React.ReactNode;
	maxTilt?: number;
	perspective?: number;
	onTiltChange?: (tiltX: number, tiltY: number) => void;
	className?: string;
	style?: CSSProperties;
}

export function TicketTilt({
	children,
	maxTilt = 15,
	perspective = 1000,
	onTiltChange,
	className,
	style,
}: TicketTiltProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const requestId = useRef<number | null>(null);
	const targetTilt = useRef({ x: 0, y: 0 });
	const currentTilt = useRef({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState(false);

	const lerp = (start: number, end: number, amt: number) => {
		return (1 - amt) * start + amt * end;
	};

	const animate = () => {
		if (!containerRef.current) return;

		if (!isHovering) {
			currentTilt.current.x = lerp(
				currentTilt.current.x,
				targetTilt.current.x,
				0.15,
			);
			currentTilt.current.y = lerp(
				currentTilt.current.y,
				targetTilt.current.y,
				0.15,
			);

			containerRef.current.style.transform = `perspective(${perspective}px) rotateX(${currentTilt.current.x}deg) rotateY(${currentTilt.current.y}deg)`;
			onTiltChange?.(currentTilt.current.x, currentTilt.current.y);

			if (
				Math.abs(currentTilt.current.x - targetTilt.current.x) > 0.01 ||
				Math.abs(currentTilt.current.y - targetTilt.current.y) > 0.01
			) {
				requestId.current = requestAnimationFrame(animate);
			} else {
				currentTilt.current = { x: 0, y: 0 };
				onTiltChange?.(0, 0);
				requestId.current = null;
			}
		} else {
			currentTilt.current.x = targetTilt.current.x;
			currentTilt.current.y = targetTilt.current.y;

			containerRef.current.style.transform = `perspective(${perspective}px) rotateX(${currentTilt.current.x}deg) rotateY(${currentTilt.current.y}deg)`;
			onTiltChange?.(currentTilt.current.x, currentTilt.current.y);

			requestId.current = requestAnimationFrame(animate);
		}
	};

	const updateTargetTilt = (clientX: number, clientY: number) => {
		if (!containerRef.current) return;

		const rect = containerRef.current.getBoundingClientRect();
		const x = clientX - rect.left;
		const y = clientY - rect.top;

		const halfWidth = rect.width / 2;
		const halfHeight = rect.height / 2;

		const relX = (x - halfWidth) / halfWidth;
		const relY = (y - halfHeight) / halfHeight;

		targetTilt.current.x = -relY * maxTilt;
		targetTilt.current.y = relX * maxTilt;

		if (!requestId.current) {
			containerRef.current.style.transition = "transform 0s";
			requestId.current = requestAnimationFrame(animate);
		}
	};

	const handleMouseMove = (e: MouseEvent) => {
		setIsHovering(true);
		updateTargetTilt(e.clientX, e.clientY);
	};

	const handleTouchMove = (e: TouchEvent) => {
		if (e.touches.length === 0) return;
		setIsHovering(true);
		const touch = e.touches[0];
		updateTargetTilt(touch.clientX, touch.clientY);
	};

	const handleMouseLeave = () => {
		setIsHovering(false);
		targetTilt.current = { x: 0, y: 0 };
		currentTilt.current = { x: 0, y: 0 };

		if (containerRef.current) {
			containerRef.current.style.transition = "transform 0s";
			containerRef.current.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`;
		}

		onTiltChange?.(0, 0);

		if (requestId.current) {
			cancelAnimationFrame(requestId.current);
			requestId.current = null;
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: ignore exhaustive dependencies
	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		container.addEventListener("mousemove", handleMouseMove);
		container.addEventListener("mouseleave", handleMouseLeave);
		container.addEventListener("touchmove", handleTouchMove);
		container.addEventListener("touchend", handleMouseLeave);
		container.addEventListener("touchcancel", handleMouseLeave);

		return () => {
			container.removeEventListener("mousemove", handleMouseMove);
			container.removeEventListener("mouseleave", handleMouseLeave);
			container.removeEventListener("touchmove", handleTouchMove);
			container.removeEventListener("touchend", handleMouseLeave);
			container.removeEventListener("touchcancel", handleMouseLeave);
			if (requestId.current) cancelAnimationFrame(requestId.current);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [maxTilt, perspective]);

	return (
		<div
			ref={containerRef}
			className={className}
			style={{
				transformStyle: "preserve-3d",
				willChange: "transform",
				transition: "transform 0.3s ease",
				...style,
			}}
		>
			{children}
		</div>
	);
}
