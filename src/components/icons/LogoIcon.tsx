import React from "react";

const LogoIcon = ({ className }: { className?: string }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 200 200"
		className={className}
		preserveAspectRatio="xMidYMid meet" // ensures proper centering
	>
		<g transform="scale(1.2) translate(-16.67, -16.67)">
			{/* Rays */}
			<g fill="#e6946a">
				<rect
					x="90"
					y="20"
					width="20"
					height="80"
					transform="rotate(0, 100, 100)"
				/>
				<rect
					x="90"
					y="20"
					width="20"
					height="80"
					transform="rotate(30, 100, 100)"
				/>
				<rect
					x="90"
					y="20"
					width="20"
					height="80"
					transform="rotate(60, 100, 100)"
				/>
				<rect
					x="90"
					y="20"
					width="20"
					height="80"
					transform="rotate(90, 100, 100)"
				/>
				<rect
					x="90"
					y="20"
					width="20"
					height="80"
					transform="rotate(120, 100, 100)"
				/>
				<rect
					x="90"
					y="20"
					width="20"
					height="80"
					transform="rotate(150, 100, 100)"
				/>
				<rect
					x="90"
					y="20"
					width="20"
					height="80"
					transform="rotate(180, 100, 100)"
				/>
				<rect
					x="90"
					y="20"
					width="20"
					height="80"
					transform="rotate(210, 100, 100)"
				/>
				<rect
					x="90"
					y="20"
					width="20"
					height="80"
					transform="rotate(240, 100, 100)"
				/>
				<rect
					x="90"
					y="20"
					width="20"
					height="80"
					transform="rotate(270, 100, 100)"
				/>
				<rect
					x="90"
					y="20"
					width="20"
					height="80"
					transform="rotate(300, 100, 100)"
				/>
				<rect
					x="90"
					y="20"
					width="20"
					height="80"
					transform="rotate(330, 100, 100)"
				/>
			</g>

			{/* Center hole - transparent */}
			<circle cx="100" cy="100" r="15" fill="transparent" />
		</g>
	</svg>
);

export default LogoIcon;
