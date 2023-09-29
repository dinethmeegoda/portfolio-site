import HeroSection from '@/components/HeroSection';
import Demo from '@/components/Demo';

export const metadata = {
  title: 'About | Dineth Meegoda',
  description: 'UPenn Student combining code, graphics, and art!',
};

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 xs:px-6 md:max-w-7xl">
      <HeroSection />
      <Demo />
    </main>
  );
}
