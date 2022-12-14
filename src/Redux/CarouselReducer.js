export const CarouselReducer = (
  state = [
    {
      carouselImage: "logo192",
      carouselTitle: "First Slide",
      carouselDisc: "developers",
    },
    {
      carouselImage: "logo192.png",
      carouselTitle: "second Slide",
      carouselDisc: "react developers",
    },
  ],
  action
) => {
  if (action.type === "ADD_CAROUSEL") {
    return [...state, action.payload];
  } else return state;
};
