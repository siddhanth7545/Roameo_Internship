import React from 'react';

import TestimonialImage01 from '../images/news1.png';
import TestimonialImage02 from '../images/news2.png';
import TestimonialImage03 from '../images/news3.png';

function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h3 className="h3 mb-3 text-black-100">News</h3>

            <p className="text-xl text-black-100">Hello, Riders upcoming Events, News are here</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-rows-3 lg:gap-4 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-100" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img className="rounded-full" src={TestimonialImage01} width="48" height="48" alt="Testimonial 01" />
                    
                        </div>
                </div>
                <blockquote className="text-lg text-black-100 grow"><b>Hundreds of Riders await</b> <br></br> Join the largest Riders matching platform to find the strongest Riders that’s right for you.</blockquote>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                </div>
              </div>

              {/* 2nd testimonial */}
              <div className="flex flex-col h-full p-6 bg-gray-100" data-aos="fade-up" data-aos-delay="200">
                <div>
                  <div className="relative inline-flex flex-col mb-4">
                    <img className="rounded-full" src={TestimonialImage02} width="48" height="48" alt="Testimonial 02" />
                      
                        </div>
                  </div>
                  <blockquote className="text-lg text-black-100 grow"><b>Over 100,000 matches made</b><br></br> We will match you with co-founders that best fit you based on what you’re looking for.</blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  </div>
                </div>

                {/* 3rd testimonial */}
                <div className="flex flex-col h-full p-6 bg-gray-100" data-aos="fade-up" data-aos-delay="400">
                  <div>
                    <div className="relative inline-flex flex-col mb-4">
                      <img className="rounded-full" src={TestimonialImage03} width="48" height="48" alt="Testimonial 03" />
                        </div>
                    </div>
                    <blockquote className="text-lg text-black-100 grow"><b>Quality Riders, pre-screened</b> <br></br>We vet founders to ensure a high-quality match for everyone.</blockquote>
                    <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    </div>
                  </div>

                </div>

              </div>
            </div>
</section>
  );
}

export default Testimonials;
