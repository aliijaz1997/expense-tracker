export const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state.transaction,
        transaction: [
          {
            description: action.description,
            amount: action.amount,
            id: action.id,
          },
          ...state.transaction,
        ],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state.transaction,
        transaction: state.transaction.filter(
          (trans) => trans.id !== action.id
        ),
      };
    default:
      return state;
  }
};
