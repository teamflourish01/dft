import React from 'react';
import Contact from '../../components/contact/Contact';
import Banner from '../../components/banner/Banner';

function ContactUs() {
  return (
    <>
    <section className='notabal-alumni'>
      <div className='full-width'>
        <Banner currentTabName="Contact Us" />
        <div className="main-content-1320">
          <div className="padding-dft">
            <Contact/>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}

export default ContactUs;
