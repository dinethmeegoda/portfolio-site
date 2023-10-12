import PathTracer from "@/components/project-components/pathtracer";

export const metadata = {
  title: 'Path Tracer | Dineth Meegoda',
  description:
    'Monte-Carlo Pathtracer with scene creation, multisampling, and materials.',
};

export default function Projects() {
  return (
    <main className="my-28 md:my-48">
      <PathTracer />
    </main>
  );
}
