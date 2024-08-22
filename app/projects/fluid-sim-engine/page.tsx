import FluidSim from '@/components/project-components/fluid-sim-engine';

export const metadata = {
  title: 'Fluid Sim | Dineth Meegoda',
  description:
    'Engine built with C++ and OpenGL to allow for realtime interactive fluid simulation.',
};

export default function Projects() {
  return (
    <main className="my-28 md:my-48">
      <FluidSim />
    </main>
  );
}
