import HeroSection from '@/components/HeroSection';
import Demo from '@/components/Demo';

export const metadata = {
  title: 'Projects | Dineth Meegoda',
};

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-7xl">
      <HeroSection />
      <Demo />
    </main>
  );
}
