import React,{useState} from 'react';
/* 
function Home() {
  const [initialrate,setinitialrate]= useState();
  const [interest,setinterest]=useState();
  const [time,settime]=useState();

  const [claculate,getcal]=useState();

 const calculated=()=>
 {

  getcal(parseInt(initialrate)* parseInt(interest)*parseInt(time));
 }

  return (

    <>
    <h1>given {initialrate}- {interest} -{time} </h1>
    <input type={"number"} value={initialrate} onChange={(e)=>setinitialrate(e.target.value)}/>
    <input type={"number"} value={interest} onChange={(e)=>setinterest(e.target.value)}/>
    <input type={"number"} value={time} onChange={(e)=>settime(e.target.value)}/>
    <button onClick={calculated}>clickme</button>
    <h1>result{claculate}</h1>
    </>
  )
}*/


function Home() {
  const [initialrate,setinitialrate]= useState();
  const [interest,setinterest]=useState();
  const [time,settime]=useState();

  const [claculate,getcal]=useState();

  const handle1=(e)=>
  {
    setinitialrate(e.target.value)
  }

  const handle2=(e)=>
  {
    setinterest(e.target.value)
  }

  const handle3=(e)=>
  {
    settime(e.target.value)
  }



 const calculated=()=>
 {

  getcal(parseInt(initialrate)* parseInt(interest)*parseInt(time));
 }

  return (

    <>
    
    <input type={"number"} value={initialrate} onChange={(e)=>handle1(e)}/>
    <input type={"number"} value={interest} onChange={(e)=>handle2(e)}/>
    <input type={"number"} value={time} onChange={(e)=>handle3(e)}/>
    <button onClick={calculated}>clickme</button>
    <h1>result{claculate}</h1>
    </>
  )
}

/*
function Home()
{
  const[state,setstate]=useState();

  useEffect(()=>{

  },[state])
  return(

  )
}*/

export default Home;


 