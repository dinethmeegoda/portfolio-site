import StylizedBeach from '@/components/portfolio-components/stylized-beach';
import { ST } from 'next/dist/shared/lib/utils';

export const metadata = {
  title: 'Sunset Beach | Dineth Meegoda',
  description: '3D Interactive Scene of Beach with Toon Shading.',
};

export default function Projects() {
  return (
    <main className="my-28 md:my-48">
      <StylizedBeach />
    </main>
  );
}
