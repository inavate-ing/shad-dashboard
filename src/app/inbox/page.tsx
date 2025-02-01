"use client";
import React, { useState } from "react";

const sampleMessages = [
	{
		id: 1,
		subject: "Meeting Reminder",
		snippet: "Don't forget our meeting at 10 AM.",
		sender: "Alice",
		time: "9:00 AM",
	},
	{
		id: 2,
		subject: "Project Update",
		snippet: "The project is on track for completion.",
		sender: "Bob",
		time: "Yesterday",
	},
	{
		id: 3,
		subject: "Welcome!",
		snippet: "Welcome to the team, glad to have you.",
		sender: "Carol",
		time: "2 days ago",
	},
];

export default function InboxPage() {
	const [searchTerm, setSearchTerm] = useState("");
	const filteredMessages = sampleMessages.filter(
		(message) =>
			message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
			message.snippet.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	return (
		<main className="container mx-auto p-8 space-y-8">
			{/* Hero Header */}
			<section className="text-center">
				<h1 className="text-3xl font-bold">Inbox</h1>
				<p className="text-muted-foreground mt-2">
					Your messages at a glance.
				</p>
				<div className="mt-4 max-w-md mx-auto">
					<input
						type="text"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						placeholder="Search messages..."
						className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
					/>
				</div>
			</section>

			{/* Messages List */}
			<section className="space-y-4">
				{filteredMessages.map((message) => (
					<div
						key={message.id}
						className="p-4 bg-white rounded-lg shadow transition hover:shadow-lg"
					>
						<h2 className="text-xl font-semibold">
							{message.subject}
						</h2>
						<p className="text-muted-foreground">
							{message.snippet}
						</p>
						<div className="mt-2 flex justify-between items-center text-sm text-muted-foreground">
							<span>{message.sender}</span>
							<span>{message.time}</span>
						</div>
					</div>
				))}
				{filteredMessages.length === 0 && (
					<p className="text-center text-muted-foreground">
						No messages found.
					</p>
				)}
			</section>
		</main>
	);
}
