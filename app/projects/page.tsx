export const metadata = { title: "Projects | Your Name" };

const projects = [
	{ id: 1, name: "Online Clothing", description: "An e-commerce platform for selling clothing online." },
	{ id: 2, name: "Booking System", description: "A simple booking system for managing reservations." },
	{ id: 3, name: "Boarding House", description: "A platform for managing boarding house operations." },
    
];

export default function ProjectPage() {
	return (
		<main className="p-8">
			<h1 className="text-2xl font-bold">Project</h1>
	
			{projects.map((project) => (
				<ul key={project.id}>
					<li>
						<h2>{project.name}</h2>
						<p>{project.description}</p>
					</li>
				</ul>
			))}
		</main>
	);
}
