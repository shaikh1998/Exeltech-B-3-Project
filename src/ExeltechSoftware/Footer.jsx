import React from "react";
import { useSelector } from "react-redux";

const Footer =()=>{
    const selector = useSelector((store)=>store.FooterReducer)
    return(
        <div style={{backgroundColor:"black"}}>
            {selector.map((item,index)=>{
                return(
                    <div style={{display:"inline-block"}}>
                       <footer>
                <img src={item.FooterImage} alt=""width={"200px"} height="300px" />
                <h5>{item.FooterTitle}</h5>
                <p>{item.FooterDesc}</p>
        
            </footer> 
                    </div>
                )
            })}

        </div>
    )
}
export default Footer;