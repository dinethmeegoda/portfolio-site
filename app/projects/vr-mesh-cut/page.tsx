import VRMesh from '@/components/project-components/VRMesh';

export const metadata = {
  title: 'VR Mesh Cutter | Dineth Meegoda',
  description:
    'A tool built for Unity that procedurally creates real-time mesh cuts on models.',
};

export default function Projects() {
  return (
    <main className="my-28 md:my-48">
      <VRMesh />
    </main>
  );
}
