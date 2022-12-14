


export const NavigationReducer=(state=[{name:"google",link:"https://www.google.com",target:"_blank"}],action)=>{
    if(action.tyoe === "ADD_LINKS"){
  return [...state,action.data]
}
else return state;
};