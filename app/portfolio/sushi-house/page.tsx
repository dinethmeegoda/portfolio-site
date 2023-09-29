import SushiHouse from '@/components/portfolio-components/sushihouse';

export const metadata = {
  title: 'Sushi House | Dineth Meegoda',
  description: '3D Environment of a House Made of Sushi in Unreal Engine.',
};

export default function Projects() {
  return (
    <main className="my-28 md:my-48">
      <SushiHouse />
    </main>
  );
}
