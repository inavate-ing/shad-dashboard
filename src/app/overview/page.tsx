export default function OverviewPage() {
	return (
		<div className="p-6">
			<h1 className="text-3xl font-bold mb-6">Overview</h1>
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				<div className="p-6 bg-card rounded-lg border">
					<h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
					<div className="space-y-2">
						<p>Active Projects: 12</p>
						<p>Pending Tasks: 5</p>
						<p>Team Members: 8</p>
					</div>
				</div>
				<div className="p-6 bg-card rounded-lg border">
					<h2 className="text-xl font-semibold mb-4">
						Recent Activity
					</h2>
					<div className="space-y-2">
						<p>Project X updated</p>
						<p>New team member added</p>
						<p>Task completed</p>
					</div>
				</div>
				<div className="p-6 bg-card rounded-lg border">
					<h2 className="text-xl font-semibold mb-4">Upcoming</h2>
					<div className="space-y-2">
						<p>Team meeting - Tomorrow</p>
						<p>Project deadline - Next week</p>
						<p>Review session - Friday</p>
					</div>
				</div>
			</div>
		</div>
	);
}
