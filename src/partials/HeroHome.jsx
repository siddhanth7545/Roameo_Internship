import React, { useState } from 'react';
import Modal from '../utils/Modal';

import HeroImage from '../images/img1.png';
import HeroImage1 from '../images/img-2.png';
import workimg from '../images/work3.png';

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Illustration behind hero content */}
        <div
          className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none"
          aria-hidden="true"
          data-aos="fade-up"
          data-aos-delay="400"
        >
        </div>

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h2 className="h3 mb-3 font-family: Montserrat, 'Source Sans Pro'  text-black-100">Meet All Riders At One Place</h2>
           
           
            <p className="text-xl text-black-100 mb-8" data-aos="fade-up" data-aos-delay="200">
            Attention all Riders,  gather up at one place to build India’s first Riding Community
            </p>  
                         {/* Hero image */}
          <div>
            <div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
              <img className="mx-auto" src={HeroImage} width="600" height="500" alt="Hero" />
              <img className="mx-auto" src={HeroImage1} width="500" height="400" alt="Hero" />
             
            
            </div>
            
          
        </div>
        
            </div>

            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-black-100 bg-orange-100 hover:bg-purple-600 w-full mb-4 sm:w-auto sm:mb-0" href="/signup">
                 Get Started
                </a>
              </div>
          </div>
          
          
        </div>
         
      </div>
    </section>
  );
}

export default HeroHome;
