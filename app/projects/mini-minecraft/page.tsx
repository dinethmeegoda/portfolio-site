import MiniMC from '@/components/project-components/minimc';

export const metadata = {
  title: 'Mini-Minecraft | Dineth Meegoda',
  description:
    'Version of Minecraft with multithreading implemented with a custom game engine.',
};

export default function Projects() {
  return (
    <main className="my-28 md:my-48">
      <MiniMC />
    </main>
  );
}
