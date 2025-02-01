"use client";
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Sample team member data
const teamMembers = [
	{
		name: "Alice Johnson",
		role: "CEO",
		imageUrl: "https://github.com/shadcn.png",
	},
	{
		name: "Bob Smith",
		role: "CTO",
		imageUrl: "https://github.com/shadcn.png",
	},
	{
		name: "Carol Williams",
		role: "Lead Designer",
		imageUrl: "https://github.com/shadcn.png",
	},
	{
		name: "David Brown",
		role: "Software Engineer",
		imageUrl: "https://github.com/shadcn.png",
	},
];

export default function TeamPage() {
	return (
		<main className="container mx-auto p-8 space-y-8">
			{/* Hero Header */}
			<section className="text-center">
				<h1 className="text-3xl font-bold">Our Team</h1>
				<p className="text-muted-foreground mt-2">
					Meet the dedicated team driving our success.
				</p>
			</section>

			{/* Team Members Grid */}
			<section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{teamMembers.map((member, index) => (
					<div
						key={index}
						className="bg-white p-6 rounded-lg shadow transition hover:shadow-lg"
					>
						<Avatar className="w-24 h-24 rounded-full mx-auto mb-4">
							<AvatarImage
								src={member.imageUrl}
								alt={member.name}
							/>
							<AvatarFallback>
								{member.name.charAt(0)}
							</AvatarFallback>
						</Avatar>
						<h2 className="text-xl font-semibold text-center">
							{member.name}
						</h2>
						<p className="text-muted-foreground text-center">
							{member.role}
						</p>
					</div>
				))}
			</section>
		</main>
	);
}
