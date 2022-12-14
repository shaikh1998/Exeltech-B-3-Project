import { legacy_createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { FormOneReducer } from "./FormOneReducer/FormOneReducer";
import { FormTwoReducer } from "./FormOneReducer/FormTwoReducer";
import { FormThreeReducer } from "./FormOneReducer/FormThreeReducer";
import { NavigationReducer } from "./NavigationReducer";
import { CarouselReducer } from "./CarouselReducer";
import { CourseReducer } from "./CourseReducer";
import { FooterReducer } from "./FooterReducer";

export const myStore = () => {
  return legacy_createStore(
    combineReducers({
      FormOneReducer,
      FormTwoReducer,
      FormThreeReducer,
      NavigationReducer,
      CarouselReducer,
      CourseReducer,
      FooterReducer,
     
    }),
    composeWithDevTools()
  );
};
