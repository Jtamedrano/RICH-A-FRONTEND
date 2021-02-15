import CTA from './CTA';
import Hero from './Hero';
import IssueSummary from './Issues';
import SummaryAbout from './SummaryAbout';

const Home = () => {
  return (
    <>
      <Hero />
      <SummaryAbout />
      <IssueSummary />
      <CTA />
    </>
  );
};

export default Home;
