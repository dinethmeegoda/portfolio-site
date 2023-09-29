import BionicTraveler from '@/components/project-components/bionictraveler';

export const metadata = {
  title: 'Bionic Traveler | Dineth Meegoda',
  description: '2D RPG published on Steam made with UPGRADE@Penn.',
};

export default function Projects() {
  return (
    <main className="my-28 md:my-48">
      <BionicTraveler />
    </main>
  );
}
