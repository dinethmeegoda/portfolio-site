import Trippin from '@/components/portfolio-components/trippin';

export const metadata = {
  title: 'Shadertoy Trippin | Dineth Meegoda',
  description: '2D Shader Compilation Video with a light narrative.',
};

export default function Projects() {
  return (
    <main className="my-28 md:my-48">
      <Trippin />
    </main>
  );
}
