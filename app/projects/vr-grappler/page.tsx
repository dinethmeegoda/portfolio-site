import Grappler from '@/components/project-components/vr-grappler';

export const metadata = {
  title: 'VR Grappler | Dineth Meegoda',
  description: 'VR Physics based Grapple Gun Game',
};

export default function Projects() {
  return (
    <main className="my-28 md:my-48">
      <Grappler />
    </main>
  );
}
