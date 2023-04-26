import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase';
import Header from '../partials/Header';


function SignIn() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        
        navigate( "/dashboard");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
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
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-25">
              <h3 className="h3 mb-5 text-black-100">Welcome back Riders, Sign In to explore new Matches</h3>

              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                
                <form>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                      <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                        <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                        </svg>
                        <span className="h-6 flex items-center border-r border-white border-opacity-25 mr-4" aria-hidden="true"></span>
                        <span className="flex-auto pl-16 pr-8 -ml-16">Sign in with Google</span>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="flex items-center my-6">
                  <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
                  <div className="text-gray-800">Or, sign in with your email</div>
                  <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
                </div>
                <form>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="email">Email</label>
                      <input id="email" type="email" className="form-input w-full text-gray-600" placeholder="you@yourcompany.com"  required  onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          } />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="password">Password</label>
                      <input id="password" type="password" className="form-input w-full text-gray-600" placeholder="Password (at least 10 characters)" required  onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }/>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="text-gray-800 ml-2">Keep me signed in</span>
                        </label>
                        <Link to="/reset-password" className="text-purple-800 hover:text-orange-100 transition duration-150 ease-in-out">Forgot Password?</Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button disabled={submitButtonDisabled} onClick={handleSubmission} className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Sign in</button>
                    </div>
                  </div>
                </form>
                <div className="text-gray-800 text-center mt-6">
                  Don’t you have an account? <Link to="/signup" className="text-purple-800 hover:text-orange-100 transition duration-150 ease-in-out">Sign up</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default SignIn;