import Legoifier from '@/components/project-components/houdini-lego-tool';

export const metadata = {
  title: 'Houdini Legoifier | Dineth Meegoda',
  description: 'Houdini Tool to turn any Mesh into Lego!',
};

export default function Projects() {
  return (
    <main className="my-28 md:my-48">
      <Legoifier />
    </main>
  );
}
