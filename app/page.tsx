import HeroSection from '@/components/HeroSection';
import Demo from '@/components/Demo';

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
      <Demo />
    </main>
  );
}
