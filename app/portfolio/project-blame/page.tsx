import Blame from '@/components/portfolio-components/project-blame';
import { ST } from 'next/dist/shared/lib/utils';

export const metadata = {
  title: 'Project Blame | Dineth Meegoda',
  description: 'Procedurally Built Sci-Fi Scene.',
};

export default function Projects() {
  return (
    <main className="my-28 md:my-48">
      <Blame />
    </main>
  );
}
