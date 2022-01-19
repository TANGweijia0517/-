import React, {useState} from "react";
import axios from "axios";

function CreateNote(){

    const[input,setInput]= useState({
        title:'',
        content:''
    })

    function handleChange(event){
        const{name,value}=event.target;
        setInput(preInput =>{
            return{
                ...preInput,
                [name]:value
            }
        } )
    }

    function handleClink(event){
        event.preventDefault();
        console.log(input);
        const newNote = {
            title:input.title,
            content:input.content
        }
        axios.post('http://localhost:3001/create',newNote)
    }

    return <div className="Container">
        <h1>Create Note page</h1>
        <form>
            <div className="form-group">
                <input onChange={handleChange} name="title" value={input.title} autoComplete="off" className="form-control" placeholder="note title"></input>
            </div>

            <div className="form=group">
                <textarea onChange={handleChange}  name="content" value={input.content} autoComplete="off" className="form-control" placeholder="notecontent"></textarea>
            </div>
            
            <button onClick={handleClink} className="btn btn-lg btn-info">add note</button>
        </form>
    </div>
}

export default CreateNote;