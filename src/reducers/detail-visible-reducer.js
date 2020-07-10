export default (state = false, action) => {
  switch (action.type) {

    case 'SEE_DETAIL':
      return !state;

    default:
      return state;
  }
};