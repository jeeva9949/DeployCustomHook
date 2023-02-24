import {useState,useEffect} from "react"

const useFetch = (URL) =>{
    const [usersdata,setuserdata]=useState([]);
    const [loading,setloading]=useState(false);
    const [error,seterror]=useState({status:false,mesg:""})

    const FetchingData =async() =>{
        seterror({status:false,mesg:""})
        setloading(true)

        try{
            const response = await fetch(URL)
            const data = await response.json();
            setuserdata(data);
            console.log(data)
            seterror({status:false,mesg:""})
            setloading(false)

        }catch(error){
            setloading(false)
            seterror({status:true,mesg:error.message})
        }
      
    }

    useEffect(()=>{
        FetchingData(URL)
    },[])
   

    return [usersdata,loading,error]
}
export default useFetch;