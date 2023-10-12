import BrickWall from '@/components/portfolio-components/brick-wall-material';

export const metadata = {
  title: 'Brick Wall Material | Dineth Meegoda',
  description:
    '3D Customizable material with a broken brick wall with Subtance Designer.',
};

export default function Projects() {
  return (
    <main className="my-28 md:my-48">
      <BrickWall />
    </main>
  );
}
