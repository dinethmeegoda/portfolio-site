import Saul from '@/components/portfolio-components/saul';

export const metadata = {
  title: 'Saul Goodman | Dineth Meegoda',
  description:
    '3D Model of character Saul Goodman with ZBrush, Substance, and Unreal.',
};

export default function Projects() {
  return (
    <main className="my-28 md:my-48">
      <Saul />
    </main>
  );
}
