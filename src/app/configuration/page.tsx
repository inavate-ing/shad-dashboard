"use client";
import React from "react";
import Link from "next/link";

export default function ConfigurationPage() {
	return (
		<main className="container mx-auto p-8 space-y-8">
			{/* Hero Header */}
			<section className="text-center">
				<h1 className="text-3xl font-bold">Configuration</h1>
				<p className="text-muted-foreground mt-2">
					Manage your account settings, security, integrations, and
					billing.
				</p>
			</section>

			{/* Configuration Options Grid */}
			<section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
				{/* Account Settings Card */}
				<div className="p-6 bg-background rounded-lg shadow transition hover:shadow-lg">
					<h2 className="text-xl font-semibold mb-2">Account</h2>
					<p className="text-muted-foreground mb-4">
						View and edit your personal information.
					</p>
					<Link
						href="/configuration/account"
						className="text-blue-500 hover:underline"
					>
						Manage Account
					</Link>
				</div>

				{/* Security Settings Card */}
				<div className="p-6 bg-background rounded-lg shadow transition hover:shadow-lg">
					<h2 className="text-xl font-semibold mb-2">Security</h2>
					<p className="text-muted-foreground mb-4">
						Keep your account safe with strong security settings.
					</p>
					<Link
						href="/configuration/security"
						className="text-blue-500 hover:underline"
					>
						Update Security
					</Link>
				</div>

				{/* Integrations Card */}
				<div className="p-6 bg-background rounded-lg shadow transition hover:shadow-lg">
					<h2 className="text-xl font-semibold mb-2">Integrations</h2>
					<p className="text-muted-foreground mb-4">
						Connect with third-party services to enhance your
						workflow.
					</p>
					<Link
						href="/configuration/integrations"
						className="text-blue-500 hover:underline"
					>
						Manage Integrations
					</Link>
				</div>

				{/* Billing Card */}
				<div className="p-6 bg-background rounded-lg shadow transition hover:shadow-lg">
					<h2 className="text-xl font-semibold mb-2">Billing</h2>
					<p className="text-muted-foreground mb-4">
						View your billing history and update payment methods.
					</p>
					<Link
						href="/configuration/billing"
						className="text-blue-500 hover:underline"
					>
						View Billing
					</Link>
				</div>
			</section>
		</main>
	);
}
