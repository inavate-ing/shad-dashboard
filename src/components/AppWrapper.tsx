"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function AppWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const [activeItem, setActiveItem] = useState<number | null>(null);
	const [lastActiveItem, setLastActiveItem] = useState<number | null>(null);

	const handleSidebarToggle = () => {
		if (activeItem === null) {
			setActiveItem(lastActiveItem !== null ? lastActiveItem : 0);
		} else {
			setLastActiveItem(activeItem);
			setActiveItem(null);
		}
	};

	const handleItemClick = (index: number) => {
		setLastActiveItem(index);
		setActiveItem(activeItem === index ? null : index);
	};

	return (
		<div className="flex min-h-screen bg-background">
			<Sidebar activeItem={activeItem} onItemClick={handleItemClick} />
			<div
				className={`flex-1 transition-all duration-300 ${activeItem !== null ? "ml-sidebar" : "ml-16"}`}
			>
				<Navbar
					isExpanded={activeItem !== null}
					toggleSidebar={handleSidebarToggle}
				/>
				<main className="p-8">{children}</main>
			</div>
		</div>
	);
}
