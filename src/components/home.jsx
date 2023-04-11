import React from "react";
import { useState, useEffect } from "react";

import { supabase } from '../client'

const Home = () =>{

    const [allCrewmates, setAllCrewmates] = useState(null);
    const [summary, setSummary] = useState({
        number:0,
        boolean:0,
        character:0,
        string:0,
        non_primitive:0
    })


    const summarizeData = (data)=>{
        let summary = {
            number:0,
            boolean:0,
            character:0,
            string:0,
            non_primitive:0
        };
        data.forEach(element => {
            if(element.type == "BMW"){
                summary.number += 1;
            }else if(element.type == "Honda"){
                summary.boolean += 1;
            }else if(element.type == "Toyota"){
                summary.character += 1;
            }else if(element.type == "Tesla"){
                summary.string += 1;
            }else{
                summary.non_primitive += 1;
            }
        });

        console.log(summary);
        setSummary(summary);

    }

    useEffect(()=> {
        const fetchData = async() => {
            const {data} = await supabase
            .from("Crewmates")
            .select()
            .order("created_at", {ascending: true});
            setAllCrewmates(data);
            summarizeData(data);
            
        };

        fetchData();
      

    },[]);


    return(
        <div className="home">

           <h1>Welcome to the Car Flex!</h1>
           <h3>You can create your Car Group.</h3>
           <img className="home-img"  src="src/assets/1.jpeg" />

           <div className="home-summary">
             <div className="summary-title">Summary</div>
             
                <table >
                    <tr>
                        <td>BMW: {summary.number}</td>
                        <td>Honda: {summary.boolean}</td>
                        <td>Totota: {summary.character}</td>
                    
                    </tr>
                    <tr>
                        <td>Tesla: {summary.string}</td>       
                        <td>Others: {summary.non_primitive}</td>                      
                    </tr>
                </table>
            
           </div>

        </div>
    )
}


export default Home;