"use client";
import React, { useState } from "react";
import {
	CheckSquare,
	FolderClosed,
	LayoutDashboard,
	MessageSquare,
	Minus,
	Plus,
	Search,
	Settings,
} from "lucide-react";
import HomeIcon from "./icons/HomeIcon";
import LineChartIcon from "./icons/LineChartIcon";
import LayersIcon from "./icons/LayersIcon";
import LogoIcon from "./icons/LogoIcon";
import LayoutIcon from "./icons/LayoutIcon";
import UserIcon from "./icons/UserIcon";
import InboxIcon from "./icons/InboxIcon";
import ConfigurationIcon from "./icons/ConfigurationIcon";
import ReportsIcon from "./icons/ReportsIcon";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const iconNavItems = [
	{
		icon: HomeIcon,
		label: "Home",
		route: "/",
	},
	{
		icon: LineChartIcon,
		label: "Dashboard",
		route: "/dashboard",
	},
	{
		icon: LayersIcon,
		label: "Resources",
		route: "/resources",
	},
	{
		icon: LayoutIcon,
		label: "Layout",
		route: "/layout",
	},
	{
		icon: UserIcon,
		label: "Team",
		route: "/team",
	},
	{
		icon: InboxIcon,
		label: "Inbox",
		route: "/inbox",
	},
	{
		icon: ConfigurationIcon,
		label: "Configuration",
		route: "/configuration",
	},
	{
		icon: ReportsIcon,
		label: "Reports",
		route: "/reports",
	},
];

const navItems = [
	{
		icon: HomeIcon,
		label: "Home",
		route: "/",
	},
	{
		icon: LineChartIcon,
		label: "Dashboard",
		route: "/dashboard",
	},
	{
		icon: FolderClosed,
		label: "Projects",
		route: "/projects",
	},
	{
		icon: CheckSquare,
		label: "Tasks",
		route: "/tasks",
	},
	{
		icon: Settings,
		label: "Settings",
		route: "/settings",
		children: [
			{ label: "My details", route: "/settings/details" },
			{ label: "My profile", route: "/settings/profile" },
			{ label: "Security", route: "/settings/security" },
			{ label: "Integrations", route: "/settings/integrations" },
			{ label: "Billing", route: "/settings/billing" },
		],
	},
	{
		icon: MessageSquare,
		label: "Messages",
		route: "/messages",
	},
];

interface SidebarProps {
	activeItem: number | null;
	onItemClick: (index: number) => void;
}

const Sidebar = ({ activeItem, onItemClick }: SidebarProps) => {
	const pathname = usePathname();
	const [expandedItems, setExpandedItems] = useState<number[]>([]);
	const [selectedTab, setSelectedTab] = useState("account");

	const toggleExpand = (index: number, e: React.MouseEvent) => {
		e.stopPropagation();
		setExpandedItems((prev) =>
			prev.includes(index)
				? prev.filter((i) => i !== index)
				: [...prev, index],
		);
	};

	return (
		<div className="flex fixed left-0 top-0 h-screen">
			{/* Icon Sidebar */}
			<div className="w-16 bg-background z-10 p-2 bg-white">
				<div className="py-4 flex flex-col items-center bg-sidebar rounded h-full">
					{/* Logo */}
					<Button
						variant="ghost"
						size="icon"
						className="w-10 h-10 mb-6"
					>
						<LogoIcon className="w-full h-full scale-150" />
					</Button>

					{/* Navigation Items */}
					<TooltipProvider delayDuration={0}>
						<div className="space-y-4">
							{iconNavItems.map((item, index) => (
								<Link
									key={index}
									href={item.route}
									className="block"
								>
									<Tooltip>
										<TooltipTrigger asChild>
											<Button
												variant="ghost"
												size="icon"
												className={cn(
													"w-10 h-10",
													pathname === item.route &&
														"bg-accent",
												)}
											>
												<item.icon className="w-5 h-5" />
											</Button>
										</TooltipTrigger>
										<TooltipContent side="right">
											{item.label}
										</TooltipContent>
									</Tooltip>
								</Link>
							))}
						</div>
					</TooltipProvider>
				</div>
			</div>

			{/* Expanded Sidebar */}
			<div
				className={`w-sidebar bg-background transition-all duration-300 transform ${activeItem !== null ? "translate-x-0" : "-translate-x-full"}`}
			>
				<div className="p-4">
					<h1 className="text-xl font-semibold mb-4">Overview</h1>
					<div className="relative mb-6">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
						<input
							type="text"
							placeholder="Search"
							className="w-full pl-10 pr-4 py-2 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring"
						/>
					</div>
					<Tabs
						onValueChange={setSelectedTab}
						defaultValue="account"
						className="w-full border-border pb-2 mb-4"
					>
						<TabsList className="w-full">
							<TabsTrigger value="account" className="flex-1">
								My Account
							</TabsTrigger>
							<TabsTrigger value="shared" className="flex-1">
								Shared with me
							</TabsTrigger>
						</TabsList>
					</Tabs>

					{selectedTab === "shared" ? (
						<>
							<h1 className="text-xl font-semibold mb-4">
								Shared Routes
							</h1>
							{[
								{
									icon: LayoutDashboard,
									label: "Shared Overview",
									route: "/shared-with-me/overview",
								},
								{
									icon: FolderClosed,
									label: "Shared Documents",
									route: "/shared-with-me/documents",
								},
								{
									icon: MessageSquare,
									label: "Shared Messages",
									route: "/shared-with-me/messages",
								},
							].map((item, index) => (
								<div key={index} className="relative">
									<Link
										href={item.route}
										className={cn(
											"w-full flex items-center px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-accent/50",
											pathname === item.route &&
												"bg-accent text-accent-foreground",
										)}
									>
										<item.icon className="w-5 h-5 mr-3" />
										<span className="flex-1 text-left">
											{item.label}
										</span>
									</Link>
								</div>
							))}
						</>
					) : (
						<>
							<nav className="space-y-1">
								{navItems.map((item, index) => (
									<div key={index} className="relative">
										<div className="flex items-center">
											<Link
												href={item.route}
												className={cn(
													"w-full flex items-center px-3 py-2 rounded-lg transition-colors duration-200",
													pathname === item.route
														? "bg-accent text-accent-foreground"
														: "hover:bg-accent/50",
												)}
											>
												<item.icon className="w-5 h-5 mr-3" />
												<span className="flex-1 text-left">
													{item.label}
												</span>
											</Link>
											{item.children && (
												<Button
													variant="ghost"
													size="icon"
													onClick={(e) =>
														toggleExpand(index, e)
													}
													className="h-8 w-8"
												>
													{expandedItems.includes(
														index,
													) ? (
														<Minus className="w-4 h-4" />
													) : (
														<Plus className="w-4 h-4" />
													)}
												</Button>
											)}
										</div>
										{item.children &&
											expandedItems.includes(index) && (
												<div className="ml-6 mt-1 space-y-1 border-l-2 border-border">
													{item.children.map(
														(child, childIndex) => (
															<Link
																key={childIndex}
																href={
																	child.route
																}
																className="block"
															>
																<Button
																	variant="ghost"
																	className="w-full justify-start pl-6 py-2 text-sm text-muted-foreground hover:text-foreground"
																>
																	{
																		child.label
																	}
																</Button>
															</Link>
														),
													)}
												</div>
											)}
									</div>
								))}
							</nav>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
