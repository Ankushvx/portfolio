import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ankush Verma | Ankush VX | Flutter Developer | .NET Developer | Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" /> 
        <meta name="author" content="Ankush Verma" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <meta name="google-site-verification" content="XVm_oxiiy2U5Y8TSq4vgQ9dKtmRk7dFbJJBNdx6CR2M" />
        
        <meta name="description" content="Ankush Verma (also known as Ankushvx) is a Flutter and .NET Developer with experience in Web and Mobile App Development." />
        <meta name="keywords" content="Ankush Verma, Ankush VX, Ankushvx, Ankush vx, Ankush bx, Ankish Verma, Ankush Developer, Flutter Developer Ankush, .NET Developer Ankush, Software Engineer Ankush" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ankushvx.adwisetech.in/" />
        
        <meta name="theme-color" content="#2D2E32" />

        <meta property="og:site_name" content="Ankush Verma Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ankush Verma | Software Developer" />
        <meta property="og:description" content="Flutter & .NET Developer | Web and Mobile Application Expert"/>
 
        <meta property="og:image" content="/images/blaiti.png" />
        <meta property="og:url" content="https://ankushvx.adwisetech.in" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ankush Verma | Software Developer"/>
        <meta name="twitter:description" content="Flutter and .NET Developer | Web & Mobile Apps" />
        <meta name="twitter:image" content="/images/develop.png" /> 
        <script type="application/ld+json">
{`
{
 "@context": "https://schema.org",
 "@type": "Person",
 "name": "Ankush Verma",
 "alternateName": ["Ankush VX", "Ankushvx", "Ankish Verma"],
 "url": "https://ankushvx.adwisetech.in/",
 "sameAs": [
   "https://github.com/Ankushvx",
   "https://www.linkedin.com/in/ankushvx"
 ]
}
`}
</script>
        
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* About */}
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
