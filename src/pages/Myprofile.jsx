
import React from "react";
import rideicon1 from "../images/rideicon.png";
import { Helmet } from "react-helmet"
import Dashboard from "./Dashboard";
import  { useState, useEffect, } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Myprofile() {
    const navigate = useNavigate();
    const [details, setDetails] = useState({
        fname: '',
        lname: '',
        email: '',
        phno: '',
        dob: '',
        gender: '',
        about:'',
        bikes:'',
        pride:'',
        startd:'',
        endd:'',
        startp:'',
        endp:'',
        descinfo:'',
        ac:'',
        location:'',
        expe:'',
        bikehave:'',
    })
    const PostData =async(e)=>{
      e.preventDefault()
    
      const{ fname,
        lname,
        email,
        phno,
        dob ,
        gender,
        about,
        bikes,
        pride,
        startd,
        endd,
        startp,
        endp,
        descinfo,
        ac,
        location,
        expe,
        bikehave}=details;
    
     const res=await fetch("https://fir-auth01-54669-default-rtdb.firebaseio.com/MyProfileData.json",
     {
         method:'POST',
         headers:{
             'Content-Type':'application/json'
         },
         body:JSON.stringify({
         fname,
        lname,
        email,
        phno,
        dob ,
        gender,
        about,
        bikes,
        pride,
        startd,
        endd,
        startp,
        endp,
        descinfo,
        ac,
        location,
        expe,
        bikehave,
         
         })
      })
      .then((docRef) => {
        alert("Create Your Profile Successfully..");
        navigate( "/createdprofile");
        
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    
    }
    return (
        <body class="bg-white">
        <div className="flex">
       <Dashboard/>
         
         <section class="container max-w-6xl mx-auto px-4 sm:px-6 relative  ">
        
    <div class="w-auto bg-purple rounded shadow-2xl p-8 m-4">
        <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Welcome</h1>
        <form action="/" method="post">
        <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-center text-gray-900" for="File">Photo</label>
                
                <button><input class="border py-2 px3 text-right text-grey-800" type="file" name="file" id="file"/></button>
            </div>
            <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="fName"
              class="mb-3 block text-base font-medium text-[#07074D]" 
            >
              First Name
            </label>
            
                <input
                    type="text"
                    placeholder="First Name"
                    className="w-full py-3 pl-12 pr-4 text-gray-900 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    onChange={(e)=>
                      setDetails({...details,fname:e.target.value})} required/>
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="lName"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Last Name
            </label>
           
                <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full py-3 pl-12 pr-4 text-gray-900 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    onChange={(e)=>
                      setDetails({...details,lname:e.target.value})} required />
          </div>
        </div>
      </div>
            
            
      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 ">
          <div class="mb-5">
            <label
              for="fName"
              class="mb-3 block text-base font-medium text-[#07074D]" 
            >
              E-mail
            </label>
            
                <input
                    type="text"
                    placeholder="E-mail"
                    className="w-full py-3 pl-12 pr-4 text-gray-900 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    onChange={(e)=>
                      setDetails({...details,email:e.target.value})} required/>
          </div>
        </div>
    </div>
    <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 ">
          <div class="mb-5">
            <label
              for="fName"
              class="mb-3 block text-base font-medium text-[#07074D]" 
            >
              Phone No:
            </label>
            
                <input
                    type="number"
                    placeholder="Phone Number"
                    className="w-full py-3 pl-12 pr-4 text-gray-900 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    onChange={(e)=>
                      setDetails({...details,phno:e.target.value})} required/>
          </div>
        </div>
    </div>
    <div class="-mx-3 flex flex-wrap">
    <div class="w-full px-3 ">
          <div class="mb-5">
            <label
              for="fName"
              class="mb-3 block text-base font-medium text-[#07074D]" 
            >
              Date of Birth:
            </label>
            
            <input
             class="border py-2 px-3 text-grey-800 w-full py-3 pl-12 pr-4 text-gray-900 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600" type="date" name="date" id="date"
                    onChange={(e)=> setDetails({...details,dob:e.target.value})} required/>
                      
          </div>
        </div>
        
        <div class="w-full px-3 ">
          <div class="mb-5">
            <label
              for="fName"
              class="mb-3 block text-base font-medium text-[#07074D]" 
            >
              Select Gender
            </label>
            
                <select
                    type="text"
                    placeholder="Gender"
                    className="w-full py-3 pl-12 pr-4 text-gray-900 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    
                    
                    onChange={(e)=>
                      setDetails({...details,gender:e.target.value})} required
                      >
                        <option> Male</option>
                        <option> Female</option>
                        <option> No-Binary</option>
                        </select>
          </div>
        </div>
    </div>

        
            
           
           
    <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 ">
          <div class="mb-5">
            <label
              for="fName"
              class="mb-3 block text-base font-medium text-[#07074D]" 
            >
              About you
            </label>
            
                <textarea
                    type="text"
                    placeholder="About you"
                    className="w-full py-3 pl-12 pr-4 text-gray-900 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    onChange={(e)=>
                      setDetails({...details,about:e.target.value})} required/>
          </div>
        </div>
    </div>
    
           
            <div class="flex flex-col mb-4">
            </div>
            <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 ">
          <div class="mb-5">
            <label
              for="fName"
              class="mb-3 block text-base font-medium text-[#07074D]" 
            >
              Bikes You Ride
            </label>
            
                <input
                    type="text"
                    placeholder="Bikes You Ride"
                    className="w-full py-3 pl-12 pr-4 text-gray-900 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    onChange={(e)=>
                      setDetails({...details,bikes:e.target.value})} required/>
          </div>
        </div>
    </div>             
                
     <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5 sm:w-1/2" >
            <label
              for="fName"
              class="mb-3 block text-base font-medium text-[#07074D]" 
            >
              Previous Rides:
              
            </label>
            <div class="flex mb-4">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Add Rides
    
</button>
</div>
            
            
            </div>
           </div>
        </div>
                              
      <div class =" bg-purple border  rounded shadow-2xl p-8 m-4">       
      <div class="-mx-3 flex flex-wrap  ">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="fName"
              class="mb-3 block text-base font-medium text-[#07074D]" 
            >
              Starting Date *
            </label>
            
            <input
             class="border py-2 px-3 text-grey-800 w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600" type="date" name="date" id="date"
                    onChange={(e)=> setDetails({...details,startd:e.target.value})} required/>
                      
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="lName"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Ending Date *
            </label>
            
           
                <input
                    
                    class="border py-2 px-3 text-grey-800 w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600" type="date" name="date" id="date"
                    onChange={(e)=>
                      setDetails({...details,endd:e.target.value})} required />
          </div>
        </div>
      </div>
      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="fName"
              class="mb-3 block text-base font-medium text-[#07074D]" 
            >
              Starting Point *
            </label>
            
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-3 pl-12 pr-4 text-gray-800 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    onChange={(e)=>
                      setDetails({...details,startp:e.target.value})} required/>
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="lName"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Ending Point *
            </label>
           
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-3 pl-12 pr-4 text-gray-800 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    onChange={(e)=>
                      setDetails({...details,endp:e.target.value})} required />
                        </div>
        </div>
                      < textarea
                      type="text"
                      placeholder="Info About Ride"
                      className="w-full py-3 pl-12 pr-4 text-gray-800 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"

                      name="Info About Ride" id="Info About Ride"
                      onChange={(e)=>
                      setDetails({...details,descinfo:e.target.value})} required /> 

        
        
      </div>
      </div>  

      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 ">
          <div class="mb-5">
            <label
              for="fName"
              class="mb-3 block text-base font-medium text-[#07074D]" 
            >
              Accomplishment
            </label>
            
                <textarea
                    type="text"
                    placeholder="Accomplishment"
                    className="w-full py-3 pl-12 pr-4 text-gray-900 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    onChange={(e)=>
                      setDetails({...details,ac:e.target.value})} required/>
          </div>
        </div>
    </div>
            

            
    <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 ">
          <div class="mb-5">
            <label
              for="fName"
              class="mb-3 block text-base font-medium text-[#07074D]" 
            >
              Riding Location
            </label>
            
                <select
                    type="text"
                    placeholder="Riding Location"
                    className="w-full py-3 pl-12 pr-4 text-gray-900 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    onChange={(e)=>
                      setDetails({...details,location:e.target.value})} required>
                        <option>Pune</option>
                        </select>

          </div>
        </div>
    </div>
           
    <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 ">
          <div class="mb-5">
            <label
              for="fName"
              class="mb-3 block text-base font-medium text-[#07074D]" 
            >
              Years Of Experience 
            </label>
            
                <input
                    type="text"
                    placeholder="No.of years of experience"
                    className="w-full py-3 pl-12 pr-4 text-gray-900 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    onChange={(e)=>
                      setDetails({...details,expe:e.target.value})} required/>
          </div>
        </div>
    </div>
            
            <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 ">
          <div class="mb-5">
            <label
              for="fName"
              class="mb-3 block text-base font-medium text-[#07074D]" 
            >
              Bike You Have
            </label>
            
                <input
                    type="text"
                    placeholder="Bike You Have"
                    className="w-full py-3 pl-12 pr-4 text-gray-900 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    onChange={(e)=>
                      setDetails({...details,bikehave:e.target.value})} required/>
          </div>
        </div>
    </div>
           
            <button class="block bg-orange-400 hover:bg-green-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit"  onClick={PostData}>SUBMIT</button>
        
        </form>
    </div>

</section>
</div>
</body>
  
    );
}