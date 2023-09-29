import ProjectsSection from '@/components/ProjectsSection';

export const metadata = {
  title: 'Projects | Dineth Meegoda',
  description:
    'UPenn Student combining code, graphics, and art! Check out my projects here.',
};

export default function Projects() {
  return (
    <main className="mx-auto px-4 xs:px-6 md:max-w-fit">
      <ProjectsSection />
    </main>
  );
}
