import React from "react";
import { useSelector } from "react-redux";

const Navigation=()=>{
    const navSelector = useSelector((store)=>store.NavigationReducer)
    return(
        <div>
            {/* <a href="http://www.google.com" target="_blank">google</a>
            <a href="http://youtube.com" target="_blank">YouTube</a> */}
            {navSelector.map((item,index)=>{
                return(
                    <div>
                       <a href={item.link} target={item.target}key={index}>{item.name}</a>
                    </div>
                
                )
            })}
        </div>
    )
}
export default Navigation;