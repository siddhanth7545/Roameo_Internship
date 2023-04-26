
import React, { useState, useEffect } from "react";
import fireDb from "../firebasedata"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import Dashboard from "./Dashboard";


export default function SingleRidePage(){
    const navigate = useNavigate()
    const[data, setData] = useState({})
    const [currentPage, setCurrentPage] = useState(1);
    const[Ridesperpage, setRidesPerPage] = useState(10)
    useEffect(()=> {
        // DB name is currently contacts
        fireDb.child("CreatedRide").on("value", (snapshot) => {
            if(snapshot.val() !== null) {
                setData({...snapshot.val() })
            } else{
                setData({})
            }
        })

        return () => {
            setData ({})
        }
    }, [])
    const currentContacts = Object.keys(data)
    return(
        <body class="bg-white">
        <div className="flex">
       <Dashboard/>
         
         <section class="container max-w-6xl mx-auto px-4 sm:px-6 relative  ">
         <div class="w-auto bg-purple rounded shadow-2xl p-8 m-4">

        <h1 class="block w-full text-left text-gray-800 text-2xl font-bold mb-6">Single Ride Page</h1>
        
        <form action="/" method="post">
            <img src="" alt="" />
            <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 ">
          <div class="mb-5">
            <label
              for="fName"
              class="mb-3 block text-base font-medium text-[#07074D]" 
            >
              Number of Riders:
            </label>
            
                <input
                    type="Number"
                    placeholder="Number of Riders "
                    className="w-full py-3 pl-12 pr-4 text-gray-900 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    onChange={(e)=>
                      setDetails({...details,start:e.target.value})} required/>
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
              Minimum Bike CC Required:
            </label>
            
                <input
                    type="Number"
                    placeholder="Minimum Bike CC Required "
                    className="w-full py-3 pl-12 pr-4 text-gray-900 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    onChange={(e)=>
                      setDetails({...details,start:e.target.value})} required/>
          </div>
        </div>
    </div> 
      <div class="-mx-3 flex flex-wrap  ">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="fName"
              class="mb-3 block text-base font-medium text-[#07074D]" 
            >
              Starting Date 
            </label>
            
            <input
             class="border py-2 px-3 text-grey-800 w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600" type="date" name="date" id="date"
                    onChange={(e)=> setDetails({...details,start:e.target.value})} required/>
                      
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="lName"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Ending Date 
            </label>
            
           
                <input
                    
                    class="border py-2 px-3 text-grey-800 w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600" type="date" name="date" id="date"
                    onChange={(e)=>
                      setDetails({...details,end:e.target.value})} required />
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
              Starting Time:
            </label>
            
                <input
                    type="text"
                    placeholder="HH:MM"
                    className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    onChange={(e)=>
                      setDetails({...details,start:e.target.value})} required/>
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="lName"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Ending Time:
            </label>
           
                <input 
                    type="text"
                    placeholder="HH:MM"
                    className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    onChange={(e)=>
                      setDetails({...details,end:e.target.value})} required />
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
              Total Hours:
            </label>
            
                <input
                    type="Number"
                    placeholder="Total Hours "
                    className="w-full py-3 pl-12 pr-4 text-gray-900 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    onChange={(e)=>
                      setDetails({...details,start:e.target.value})} required/>
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
              Number of stops:
            </label>
            
                <input
                    type="text"
                    placeholder="First Stop"
                    className="w-full py-3 pl-12 pr-4 text-gray-800 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    
                    onChange={(e)=>
                      setDetails({...details,start:e.target.value})} required/>
          </div>
        </div>
        <div class=" px-3 sm:w-1/2">
          <button class="mb-5">
          <label blankspace="--"></label>          
           ++
                <input
                    type="text"
                    placeholder="Second Stop"
                    className="w-full py-3 pl-12 pr-4 text-gray-800 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    onChange={(e)=>
                      setDetails({...details,end:e.target.value})} required />
                        </button>
        </div>
        </div>
        <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 ">
          <div class="mb-5">
            <label
              for="fName"
              class="mb-3 block text-base font-medium text-[#07074D]" 
            >
              Description of Ride
            </label>
            
                <textarea
                    type="text"
                    placeholder="Description of Ride"
                    className="w-full py-3 pl-12 pr-4 text-gray-900 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    onChange={(e)=>
                      setDetails({...details,start:e.target.value})} required/>
          </div>
        </div>
    </div>

   
    <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
          <button type="button" class="text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Join this ride 
    
</button>
            
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
          <button type="button" class="text-white bg-yellow-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Share this ride
    
</button>
          </div>
        </div>
      </div>
        
            </form>    
          </div>
        </section>
        </div>
        
        </body>
    );
    }