import { Helmet } from 'react-helmet';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>NGOConnect</title>
        <meta name="description" content="A platform to share surplus food with those in need." />
        <meta name="keywords" content="NGO, Food Donation, Community, NGOConnect" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="NGOConnect | Share Surplus Food" />
        <meta property="og:description" content="Help fight food waste and hunger by donating extra food through NGOConnect." />
        <meta property="og:type" content="website" />
      </Helmet>
    </>
  );
}

export default HomePage;