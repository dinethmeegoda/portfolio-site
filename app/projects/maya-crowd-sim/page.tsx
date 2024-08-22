import CrowdSim from '@/components/project-components/maya-crowd-sim';

export const metadata = {
  title: 'Maya Crowd Sim | Dineth Meegoda',
  description:
    'Maya Interactive Crowd Simulation Tool with accompanying OpenGL Engine.',
};

export default function Projects() {
  return (
    <main className="my-28 md:my-48">
      <CrowdSim />
    </main>
  );
}
