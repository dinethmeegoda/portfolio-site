import RealTime from "@/components/project-components/realtime-renderer";

export const metadata = {
  title: 'Real-Time Renderer | Dineth Meegoda',
  description:
    'Real-time Rendering Engine implementing PBR materials, textures, and HDRIs.',
};

export default function Projects() {
  return (
    <main className="my-28 md:my-48">
      <RealTime />
    </main>
  );
}
