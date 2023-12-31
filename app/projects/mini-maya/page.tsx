import MiniMaya from "@/components/project-components/mini-maya";

export const metadata = {
  title: 'Mini-Maya | Dineth Meegoda',
  description:
    '3D Modelling Program that implements subdivision and mesh skinning with basic skeletons.',
};

export default function Projects() {
  return (
    <main className="my-28 md:my-48">
      <MiniMaya />
    </main>
  );
}
