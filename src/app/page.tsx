"use client";
import React from "react";

export default function Home() {
	const getGreeting = () => {
		const hour = new Date().getHours();
		if (hour < 12) return "Good Morning";
		if (hour < 18) return "Good Afternoon";
		return "Good Evening";
	};

	return (
		<main className="container mx-auto p-8 space-y-8">
			<section className="text-center py-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg">
				<h1 className="text-4xl font-bold">
					{getGreeting()}, Welcome Back!
				</h1>
				<p className="mt-4 text-lg">
					Here's an overview of your dashboard.
				</p>
			</section>

			<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				<div className="p-6 bg-background rounded-lg shadow hover:shadow-lg transition">
					<h2 className="text-2xl font-semibold mb-2">Analytics</h2>
					<p className="text-muted-foreground">
						View detailed analytics about your performance.
					</p>
				</div>
				<div className="p-6 bg-background rounded-lg shadow hover:shadow-lg transition">
					<h2 className="text-2xl font-semibold mb-2">Resources</h2>
					<p className="text-muted-foreground">
						Manage your resources and assets here.
					</p>
				</div>
				<div className="p-6 bg-background rounded-lg shadow hover:shadow-lg transition">
					<h2 className="text-2xl font-semibold mb-2">Projects</h2>
					<p className="text-muted-foreground">
						Keep track of your ongoing projects.
					</p>
				</div>
			</section>

			{/* Additional customizable content can go here */}
		</main>
	);
}
