import OrganAnimation from '@/components/portfolio-components/organanimation';

export const metadata = {
  title: 'Organ Donor Animation | Dineth Meegoda',
  description: '2D Frame by Frame Animation to promote organ donation.',
};

export default function Projects() {
  return (
    <main className="my-28 md:my-48">
      <OrganAnimation />
    </main>
  );
}
