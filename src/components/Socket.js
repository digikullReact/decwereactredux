import React,{useEffect,useState} from 'react'
import { io } from "socket.io-client";




const Socket = () => {
    const [state,setState]=useState("");
    const [socket,setSocket]=useState();
    const [messgaes,setMessages]=useState([]);



    const handleChange=(event)=>{
        setState(event.target.value);

    }

    const sendMessage=()=>{
        socket.emit("message",state);

    }

    useEffect(()=>{

        const obj = io("http://localhost:8080");
      //  socket.on("")
      setSocket(obj);
      obj.on("serversent",(res)=>{
        console.log(res);
        setMessages(prevMessages=>[...prevMessages,res]);
       // console.log(res);
      })



    },[])

  return (
    <div>

        <input type='text' onChange={handleChange}/>
        <button onClick={sendMessage}>
            Send Message
        </button>

        {
            messgaes.map((ele)=>(
                <li>{ele}</li>
            ))
        }
    </div>
  )
}

export default Socket