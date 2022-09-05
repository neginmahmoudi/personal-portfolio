import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">
              This is how you can reach me .
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: negin_mahmoudii76@gmail.com</li>
              <li className="contact-item">Phone: +436609494205</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
