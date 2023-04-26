import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../partials/Header';
function ResetPassword() {
  return (
    <div class="bg-white bg-slate-100 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">


      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

       

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h3 mb-4 text-black-100">Forgot your password?</h1>
                <p className="text-xl text-gray-800">We'll email you instructions on how to reset it.</p>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="email">Email</label>
                      <input id="email" type="email" className="form-input w-full text-gray-600" placeholder="you@yourcompany.com" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Reset Password</button>
                    </div>
                  </div>
                </form>
                <div className="text-gray-800 text-center mt-6">
                  <Link to="/signin" className="text-purple-600 hover:text-orange-100 transition duration-150 ease-in-out">Cancel</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

   

    </div>
  );
}

export default ResetPassword;