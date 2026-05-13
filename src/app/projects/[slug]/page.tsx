export default function ProjectDetailsPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Project: {params.slug}</h1>
      <p className="text-lg text-gray-600">Details about {params.slug} will go here.</p>
    </div>
  );
}
