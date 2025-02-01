"use client";
import React, { useState } from "react";

const sampleReports = [
	{
		id: 1,
		title: "Monthly Sales Report",
		description: "Overview of monthly sales performance.",
		downloadUrl: "/reports/sales-report.pdf",
	},
	{
		id: 2,
		title: "User Engagement Report",
		description: "Detailed analysis of user engagement metrics.",
		downloadUrl: "/reports/engagement-report.pdf",
	},
	{
		id: 3,
		title: "Financial Summary Report",
		description: "Quarterly financial summary and insights.",
		downloadUrl: "/reports/financial-summary.pdf",
	},
];

export default function ReportsPage() {
	const [searchTerm, setSearchTerm] = useState("");
	const filteredReports = sampleReports.filter((report) =>
		report.title.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	return (
		<main className="container mx-auto p-8 space-y-8">
			{/* Hero Header */}
			<section className="text-center">
				<h1 className="text-3xl font-bold">Reports</h1>
				<p className="text-muted-foreground mt-2">
					Download detailed reports on performance and financials.
				</p>
				<div className="mt-4 max-w-md mx-auto">
					<input
						type="text"
						placeholder="Search reports..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
					/>
				</div>
			</section>

			{/* Reports Grid */}
			<section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{filteredReports.map((report) => (
					<div
						key={report.id}
						className="p-6 bg-white rounded-lg shadow transition hover:shadow-lg"
					>
						<h2 className="text-xl font-semibold mb-2">
							{report.title}
						</h2>
						<p className="text-muted-foreground mb-4">
							{report.description}
						</p>
						<a
							href={report.downloadUrl}
							download
							className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
						>
							Download
						</a>
					</div>
				))}
				{filteredReports.length === 0 && (
					<p className="text-center text-muted-foreground col-span-full">
						No reports found.
					</p>
				)}
			</section>
		</main>
	);
}
