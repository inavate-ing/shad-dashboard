"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Dashboard() {
	return (
		<main className="container mx-auto p-8 space-y-8">
			<section className="flex flex-col sm:flex-row justify-between items-center">
				<div>
					<h1 className="text-3xl font-bold">Dashboard</h1>
					<p className="text-muted-foreground">
						Overview of key metrics and performance indicators
					</p>
				</div>
				<div>
					<button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
						Download Report
					</button>
				</div>
			</section>

			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<Card className="hover:shadow-lg transition">
					<CardHeader>
						<CardTitle>Total Sales</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-3xl font-bold">$12,345</p>
					</CardContent>
				</Card>

				<Card className="hover:shadow-lg transition">
					<CardHeader>
						<CardTitle>New Users</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-3xl font-bold">1,234</p>
					</CardContent>
				</Card>

				<Card className="hover:shadow-lg transition">
					<CardHeader>
						<CardTitle>Active Sessions</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-3xl font-bold">567</p>
					</CardContent>
				</Card>
			</section>

			<section className="bg-white p-6 rounded-lg shadow-lg">
				<h2 className="text-xl font-semibold mb-4">
					Performance Chart
				</h2>
				<div className="h-64 flex items-center justify-center text-muted-foreground">
					{/* Chart component or integration can be placed here */}
					Chart goes here
				</div>
			</section>
		</main>
	);
}
