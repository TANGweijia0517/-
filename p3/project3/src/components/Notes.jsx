import React, {useEffect,useState} from "react";
import axios from "axios";

function Notes(){
    
    // const[notes,setNotes]= useState([{
    //     title:'',
    //     content:''
    // }]);

    // useEffect(()=>{
    //     fetch('/notes').then(res =>{
    //         if(res.ok){
    //             console.log(res.json);
    //             return res.json
                
    //         }
            
    //     }).then(jsonRes => setNotes(jsonRes));
    //     // axios.get('http://localhost:3001/notes').then(res=>{
    //     //     this.setNotes(res.data);
    //     //     console.log(notes)
    //     // })
    // })



    return <div className="Container">
        <h1>Notes</h1>
        {/* {notes} */}
        {/* {notes.map(note=>
        <div>
            <h1>{note.title}</h1>,
            <p>{note.content}</p>,
            <br></br>
        </div>
            
            )} */}
    </div>
}

export default Notes;