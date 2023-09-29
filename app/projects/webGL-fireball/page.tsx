import Fireball from '@/components/project-components/fireball';

export const metadata = {
  title: 'WebGL Procedural Fireball | Dineth Meegoda',
  description: 'Procedurally generated fireball character.',
};

export default function Projects() {
  return (
    <main className="my-28 md:my-48">
      <Fireball />
    </main>
  );
}
