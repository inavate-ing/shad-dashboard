"use client";
import React from "react";

export default function LayoutRoute() {
	return (
		<main className="container mx-auto p-8 space-y-8">
			{/* Hero Header */}
			<section className="text-center">
				<h1 className="text-3xl font-bold">Layout Options</h1>
				<p className="text-muted-foreground mt-2">
					Customize the visual appearance and structure of your
					dashboard.
				</p>
			</section>

			{/* Grid Layout for Layout Options */}
			<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				<div className="p-6 bg-white rounded-lg shadow transition hover:shadow-lg">
					<h2 className="text-xl font-semibold mb-2">Grid Layout</h2>
					<p className="text-muted-foreground">
						A modern grid-based layout for displaying your data
						elegantly.
					</p>
				</div>
				<div className="p-6 bg-white rounded-lg shadow transition hover:shadow-lg">
					<h2 className="text-xl font-semibold mb-2">List Layout</h2>
					<p className="text-muted-foreground">
						A classic list layout for streamlined information
						display.
					</p>
				</div>
				<div className="p-6 bg-white rounded-lg shadow transition hover:shadow-lg">
					<h2 className="text-xl font-semibold mb-2">Card Layout</h2>
					<p className="text-muted-foreground">
						Use card layout for a flexible and responsive design.
					</p>
				</div>
			</section>

			{/* Coming Soon Section */}
			<section className="bg-gray-100 p-6 rounded-lg">
				<h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
				<p className="text-muted-foreground">
					More advanced layout customization options are on their way.
					Stay tuned!
				</p>
			</section>
		</main>
	);
}
