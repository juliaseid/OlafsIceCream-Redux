export const deleteFlavor = id => ({
  type: 'DELETE_FLAVOR',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addFlavor = (flavor) => {
  const { name, allergens, creamery, scoops, id } = flavor;
  return {
    type: 'ADD_FLAVOR',
    name: name,
    allergens: allergens,
    creamery: creamery,
    scoops: scoops,
    id: id
  }
}