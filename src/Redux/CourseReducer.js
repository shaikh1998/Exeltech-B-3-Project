

export const CourseReducer=(state=[{courseImg:"",courseTitle:"html",courseDesc:"hyper Text markup language",},],action)=>{
    if(action.type === "ADD_COURSES"){
        return[...state,action.meriMarzi]
    }else return state;

}