export const FooterReducer = (
  state = [
    { FooterImage: "logo192.png", FooterTitle: "FooterTitle", FooterDesc:"FooterDesc" },
  ],
  action
) => {
  if (action.type === "FOOTER_DATA") {
    return [...state, action.payload];
  } else return state;
};
