export default function NotFound() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-background text-foreground">
			<div className="text-center px-4">
				<h1 className="text-5xl font-bold mb-4">404</h1>
				<p className="text-xl mb-8">Page Not Found</p>
				<p className="mb-4">
					Sorry, we couldn&apos;t find the page you&apos;re looking
					for.
				</p>
				<a href="/" className="text-accent underline">
					Return Home
				</a>
			</div>
		</div>
	);
}
