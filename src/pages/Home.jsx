import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div class="bg-white bg-slate-100 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      {/*  Site header */}
      <Header />
     
     
      {/*  Page content */}
      <main className="grow">
        

        {/*  Page sections */}
        <HeroHome />
        <FeaturesBlocks />
       
        <Testimonials />
        <Newsletter />
      </main>     
      
      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;