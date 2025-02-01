export default function AnalyticsPage() {
	return (
		<div className="p-6">
			<h1 className="text-3xl font-bold mb-6">Analytics</h1>
			<div className="grid gap-6 md:grid-cols-2">
				<div className="p-6 bg-card rounded-lg border">
					<h2 className="text-xl font-semibold mb-4">
						Performance Metrics
					</h2>
					<div className="space-y-4">
						<div className="space-y-2">
							<div className="flex justify-between items-center">
								<span>Project Completion Rate</span>
								<span className="font-semibold">85%</span>
							</div>
							<div className="w-full bg-muted rounded-full h-2">
								<div
									className="bg-primary h-2 rounded-full"
									style={{ width: "85%" }}
								></div>
							</div>
						</div>
						<div className="space-y-2">
							<div className="flex justify-between items-center">
								<span>Team Productivity</span>
								<span className="font-semibold">92%</span>
							</div>
							<div className="w-full bg-muted rounded-full h-2">
								<div
									className="bg-primary h-2 rounded-full"
									style={{ width: "92%" }}
								></div>
							</div>
						</div>
					</div>
				</div>
				<div className="p-6 bg-card rounded-lg border">
					<h2 className="text-xl font-semibold mb-4">
						Key Statistics
					</h2>
					<div className="grid grid-cols-2 gap-4">
						<div className="p-4 bg-background rounded-lg">
							<p className="text-sm text-muted-foreground">
								Total Projects
							</p>
							<p className="text-2xl font-bold">24</p>
						</div>
						<div className="p-4 bg-background rounded-lg">
							<p className="text-sm text-muted-foreground">
								Active Users
							</p>
							<p className="text-2xl font-bold">156</p>
						</div>
						<div className="p-4 bg-background rounded-lg">
							<p className="text-sm text-muted-foreground">
								Tasks Completed
							</p>
							<p className="text-2xl font-bold">432</p>
						</div>
						<div className="p-4 bg-background rounded-lg">
							<p className="text-sm text-muted-foreground">
								Time Saved
							</p>
							<p className="text-2xl font-bold">128h</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
