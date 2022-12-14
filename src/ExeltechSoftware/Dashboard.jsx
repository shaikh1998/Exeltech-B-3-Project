import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [target, setTarget] = useState("");

  const [carImage, setCarouselImage] = useState("");
  const [carTitle, setCarouselTitle] = useState("");
  const [carDesc, setCarouselDesc] = useState("");

  const [cardImage, setCardImage] = useState("");
  const [cardTitle, setCardTitle] = useState("");
  const [cardDesc, setCardDesc] = useState("");

  const [footerimg, setFooterImg] = useState("");
  const [footertitle, setFooterTitle] = useState("");
  const [footerdesc, setFooterDesc] = useState("");

  const dispatchLinks = useDispatch();

  const handleClick = () => {
    dispatchLinks({ type: "ADD_LINK", data: { name, link, target } });
  };
  const dispatch = useDispatch();
  const handleCourses = () => {
    dispatch({
      type: "ADD_COURSES",
      meriMarzi: { carImage, carTitle, carDesc },
    });
  };
  const dispatchCard = useDispatch();
  const handleCard = () => {
    dispatchCard({
      type: "ADD_COURSES",
      data: { cardImage, cardTitle, cardDesc },
    });
  };
  const dispatchFooter=useDispatch()
  const handleFooter =()=>{
    dispatchFooter({type:"FOOTER_DATA",payload:{FooterImage:footerimg,FooterTitle:footertitle,FooterDesc:footerdesc}})
  }
  return (
    <div>
      <input
        type="text"
        placeholder="link name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="link address"
        onChange={(e) => setLink(e.target.value)}
      />
      <input
        type="text"
        placeholder="link target"
        onChange={(e) => setTarget(e.target.value)}
      />
      <button onClick={handleClick}>Dispatch Link</button>
      <input
        type="text"
        placeholder="car image"
        onChange={(e) => setCarouselImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="car title"
        onChange={(e) => setCarouselTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="car desc"
        onChange={(e) => setCarouselDesc(e.target.value)}
      />
      <button onClick={handleCourses}>Dispatch Courses</button>
      <input
        type="text"
        placeholder="course image"
        onChange={(e) => setCardImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="course titlr"
        onChange={(e) => setCardTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="course desc"
        onChange={(e) => setCardDesc(e.target.value)}
      />
      <button onClick={handleCard}>Card Dispatch</button>

      <input
        type="text"
        placeholder="Footer Image"
        onChange={(e) => setFooterImg(e.target.value)}
      />
      <input
        type="text"
        placeholder="Footer title"
        onChange={(e) => setFooterTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Footer Link"
        onChange={(e) => setFooterDesc(e.target.value)}
      />
      <button onClick={handleFooter}>Footer Dispatch</button>
    </div>
  );
};
export default Dashboard;
