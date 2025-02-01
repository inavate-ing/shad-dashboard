import React from "react";
import CollapseIcon from "./icons/CollapseIcon";
import { Button } from "./ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

interface NavbarProps {
	isExpanded: boolean;
	toggleSidebar: () => void;
}

const Navbar = ({ isExpanded, toggleSidebar }: NavbarProps) => {
	return (
		<div className="h-14 bg-background px-4 flex items-center justify-between relative z-20">
			<div className="flex items-center">
				<Button
					variant="ghost"
					size="icon"
					onClick={toggleSidebar}
					aria-label={
						isExpanded ? "Collapse sidebar" : "Expand sidebar"
					}
				>
					<CollapseIcon className="w-5 h-5" />
				</Button>
				<h1 className="ml-4 text-lg font-semibold">Shad App</h1>
			</div>
			<ThemeToggle />
		</div>
	);
};

export default Navbar;
