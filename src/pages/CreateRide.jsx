import React from "react";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";
import PlacesAutocomplete, {
  geocodeByAddress,
} from "react-places-autocomplete";
import  { useState, useEffect } from "react";
export default function CreateRide(){
  const [address, setAddress] = React.useState("");
  const [address1, setAddress1] = React.useState("");
 
    const handleSelect = async value => {
      const results = await geocodeByAddress(value);
      setAddress(value);
        };
        const handleSelect1 = async value => {
          const results = await geocodeByAddress(value);
          setAddress1(value);
            };

  const [details, setDetails] = useState({
    start: '',
    end: '',
    riders: '',
    desc: '',
    date: '',
    time: '',
    days:'',
})
const PostData =async(e)=>{
  e.preventDefault()

  const{start,end,riders,desc,date,time,days}=details;

 const res=await fetch("https://fir-auth01-54669-default-rtdb.firebaseio.com/CreatedRide.json",
 {
     method:'POST',
     headers:{
         'Content-Type':'application/json'
     },
     body:JSON.stringify({
     start,
     end,
     riders,
     desc,
     date,
     time,
     days, 
     
     })
  })
  .then((docRef) => {
    alert("Create Ride Successfully..");
    
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
        <div class="flex flex-col">
    <nav className="hidden md:flex md:grow">

{/* Desktop sign in links */}
<div className="flex grow justify-end flex-wrap items-center md:py-10">
<button onClick={() => {
                  navigate('/joinride')
                }} class="flex justify-start items-center space-x-6 hover:text-white focus:bg-orange-100 focus:text-white hover:bg-orange-100 text-gray-900 rounded px-3 py-2  w-full md:w-52">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 19C10.2091 19 12 17.2091 12 15C12 12.7909 10.2091 11 8 11C5.79086 11 4 12.7909 4 15C4 17.2091 5.79086 19 8 19Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.85 12.15L19 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18 5L20 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15 8L17 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p class="text-base leading-4  ">Join Ride</p>
                    </button>
                    <button onClick={() => {
                  navigate('/createride')
                }} class="flex justify-start items-center space-x-6 hover:text-white focus:bg-orange-100 focus:text-white hover:bg-orange-100 text-gray-900 rounded px-3 py-2 w-full md:w-52">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 8.00002C15.1046 8.00002 16 7.10459 16 6.00002C16 4.89545 15.1046 4.00002 14 4.00002C12.8954 4.00002 12 4.89545 12 6.00002C12 7.10459 12.8954 8.00002 14 8.00002Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4 6H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16 6H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4 12H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 12H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17 20C18.1046 20 19 19.1046 19 18C19 16.8955 18.1046 16 17 16C15.8954 16 15 16.8955 15 18C15 19.1046 15.8954 20 17 20Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4 18H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19 18H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p class="text-base leading-4  ">Create Ride</p>
                    </button>
   </div>

</nav>
<div class="bg-white bg-slate-100 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
    <form className="form" >
      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="fName"
              class="mb-3 block text-base font-medium text-[#07074D]" 
            >
              Starting Point *
            </label>
            <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>

            <input {...getInputProps({ placeholder: "Type address" })} />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
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
            <PlacesAutocomplete
        className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"

        value={address1}
        onChange={setAddress1 }
        onSelect={handleSelect1}
      >
        
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>

            <input {...getInputProps({ placeholder: "Type address" })} />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
          </div>
        </div>
      </div>
      <div class="mb-5">
        <label
          for="guest"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
         Maximum Riders 
        </label>
        <input
          type="number"
          name="guest"
          id="guest"
          placeholder="5"
          min="0"
          class="w-auto appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          onChange={(e)=>
            setDetails({...details,riders:e.target.value})} required/>
      </div>
      <div class="flex mb-4">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Add Stops +
    
</button>
</div>

<div class="mb-5">
<label
          for="guest"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Write Description Of Ride
        </label>
           <textarea id="comment" rows="4" class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" placeholder="Write a Description..." 
       onChange={(e)=>
        setDetails({...details,desc:e.target.value})} required></textarea>
       </div>
       
      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/3">
          <div class="mb-5">
            <label
              for="date"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              onChange={(e)=>
                setDetails({...details,date:e.target.value})} />
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/3">
          <div class="mb-5">
            <label
              for="time"
              class="mb-3 block text-base font-medium text-[#07074D]"
            required>
              Time
            </label>
            <input
              type="time"
              name="time"
              id="time"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              onChange={(e)=>
                setDetails({...details,time:e.target.value})} required/>
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/3">
        <label
          for="guest"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
         Number Of Days
        </label>
        <input
          type="number"
          name="guest"
          id="guest"
          placeholder="5"
          min="0"
          class="w-auto appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          onChange={(e)=>
            setDetails({...details,days:e.target.value})}/>
      </div> 
      </div>
      
     

      <div class="flex justify-center">
        <button
          class=" w-auto text-black-100 bg-orange-100 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-orange-100 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={PostData}>
        
        Create Ride </button>
      </div>
      
    </form>
    </div>
   </div>
    </section>
    </div>


  </body>
    
    );
}