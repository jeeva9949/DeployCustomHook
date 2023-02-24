import useFetch from "./useCountHook"

const URL = "https://jsonplaceholder.typicode.com/users";

const Final = () =>{
    const [usersdata,loading,error]=useFetch(URL);

    if(loading){
        return(
            <h2>Loading....</h2>
        )
    }

    if(error.status){
        return (
            <h3>{error.mesg}</h3>
        )
    }

    return(
        <ul>
            <h2>usersInformation</h2>
            {
                usersdata.map((eachobj)=>{
                    const{id,username,email}=eachobj
                    return(
                        <li key = {id}>
                            <h3>name:{username}</h3>
                            <h3>email:{email}</h3>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Final