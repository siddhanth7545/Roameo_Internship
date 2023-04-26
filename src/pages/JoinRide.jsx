

import Dashboard from "./Dashboard";
import React, { useState, useEffect } from "react";
import fireDb from "../firebasedata"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function JoinRide(){
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
    return (
        <body class="bg-white">
        <div className="flex">
       <Dashboard/>
         
        <section class="container max-w-6xl mx-auto px-4 sm:px-6 relative  ">
        
    <div class="flex flex-col">
    <nav className="hidden md:flex md:grow">

{/* Desktop sign in links */}
<div className="flex grow justify-end flex-wrap items-center md:py-10">
<button class="flex justify-start items-center space-x-6 hover:text-white focus:bg-orange-100 focus:text-white hover:bg-orange-100 text-gray-900 rounded px-3 py-2  w-full md:w-52">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 19C10.2091 19 12 17.2091 12 15C12 12.7909 10.2091 11 8 11C5.79086 11 4 12.7909 4 15C4 17.2091 5.79086 19 8 19Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.85 12.15L19 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18 5L20 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15 8L17 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p class="text-base leading-4  ">Join Ride</p>
                    </button>
                    <button class="flex justify-start items-center space-x-6 hover:text-white focus:bg-orange-100 focus:text-white hover:bg-orange-100 text-gray-900 rounded px-3 py-2 w-full md:w-52">
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
<div class="container  mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">

    {currentContacts.map((id, index)=> {
                    return ( 
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2" key={id}>

        
<article class="overflow-hidden rounded-lg shadow-lg" >

<a href="#">
    <img alt="Placeholder" class="block h-auto w-auto" src="https://picsum.photos/600/400/?random"/>
</a>

<header class="flex items-center justify-between leading-tight p-2 md:p-4">
    <h1 class="text-lg">
        <a class="no-underline hover:underline text-black-100" href="#" >
        {data[id].start} To {data[id].end}
        </a>
    </h1>
    <p class="text-gray-600 text-sm">
  Date :{data[id].date}
    </p>
</header>
<div class="flex items-center justify-between leading-tight p-2 md:p-4">

<p class=" text-gray-700 text-sm ">
Numbers Of Riders : {data[id].riders}
    </p>
</div>
<footer class="flex items-center justify-between leading-none p-2 md:p-4">
    <a class="flex items-center no-underline hover:underline text-gray-500" href="#">
        <p class="ml-2 text-sm">
        {data[id].name}
        </p>
        {data[id].desc}
    </a>
    

    
</footer>
<div class="flex items-center justify-center leading-tight p-2 md:p-4">

<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => {
                  navigate('/sride')
                }}>
       View Ride

</button>
</div>
</article>
   
        </div>
   )
})}
     



       
        </div>
</div>
            
</div>
    
</section>
     </div>  
     </body>          
    );
}