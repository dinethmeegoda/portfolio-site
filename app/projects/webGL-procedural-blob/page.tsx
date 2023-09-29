import Technoblob from '@/components/project-components/technoblob';

export const metadata = {
  title: 'WebGL Procedural Technoblob | Dineth Meegoda',
  description: 'Procedurally generated noise-function dense blob.',
};

export default function Projects() {
  return (
    <main className="my-28 md:my-48">
      <Technoblob />
    </main>
  );
}
