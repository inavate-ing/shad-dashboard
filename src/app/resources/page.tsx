"use client";

export default function ResourcesPage() {
	return (
		<div className="p-6 space-y-8">
			{/* Hero Header */}
			<section className="text-center">
				<h1 className="text-3xl font-bold">Resources</h1>
				<p className="text-muted-foreground mt-2">
					Explore documentation, templates, and tools to boost your
					productivity.
				</p>
				<div className="mt-4 max-w-md mx-auto">
					<input
						type="text"
						placeholder="Search resources..."
						className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
					/>
				</div>
			</section>

			{/* Resource Cards */}
			<section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{/* Documentation Card */}
				<div className="p-6 bg-card rounded-lg border transition hover:shadow-lg hover:scale-105 duration-200">
					<h2 className="text-xl font-semibold mb-4">
						Documentation
					</h2>
					<ul className="space-y-3">
						<li className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-primary rounded-full"></div>
							<span>Getting Started Guide</span>
						</li>
						<li className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-primary rounded-full"></div>
							<span>API Documentation</span>
						</li>
						<li className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-primary rounded-full"></div>
							<span>Best Practices</span>
						</li>
					</ul>
				</div>

				{/* Templates Card */}
				<div className="p-6 bg-card rounded-lg border transition hover:shadow-lg hover:scale-105 duration-200">
					<h2 className="text-xl font-semibold mb-4">Templates</h2>
					<ul className="space-y-3">
						<li className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-primary rounded-full"></div>
							<span>Project Templates</span>
						</li>
						<li className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-primary rounded-full"></div>
							<span>Document Templates</span>
						</li>
						<li className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-primary rounded-full"></div>
							<span>Workflow Templates</span>
						</li>
					</ul>
				</div>

				{/* Tools Card */}
				<div className="p-6 bg-card rounded-lg border transition hover:shadow-lg hover:scale-105 duration-200">
					<h2 className="text-xl font-semibold mb-4">Tools</h2>
					<ul className="space-y-3">
						<li className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-primary rounded-full"></div>
							<span>Code Snippets</span>
						</li>
						<li className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-primary rounded-full"></div>
							<span>Design Assets</span>
						</li>
						<li className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-primary rounded-full"></div>
							<span>Development Tools</span>
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
}
