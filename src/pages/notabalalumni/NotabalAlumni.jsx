import React from 'react';
import '../notabalalumni/NotabalAlumni.css';
import Banner from '../../components/banner/Banner';
import Notabal from '../../components/notabalalumni/Notabal';

function NotabalAlumni() {
  return (
    <>
      <section className='notabal-alumni'>
        <div className='full-width'>
          <Banner currentTabName="Notable Alumni" />
          <div className="main-content-1320">
            <div className="padding-dft">
              <Notabal />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotabalAlumni;
