import PortfolioSection from '@/components/PortfolioSection';

export const metadata = {
  title: 'Portfolio | Dineth Meegoda',
  description:
    'UPenn Student combining code, graphics, and art! Check out my art here.',
};

export default function Portfolio() {
  return (
    <main className="mx-auto px-4 xs:px-6 md:max-w-fit">
      <PortfolioSection />
    </main>
  );
}
