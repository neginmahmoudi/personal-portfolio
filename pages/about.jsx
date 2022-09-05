import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              I have been working as a web developer for 10 years.
              Here you can see my work . feel free to ask me questions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
