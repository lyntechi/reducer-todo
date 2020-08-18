import { TOGGLE_TODO } from "../actions/TodoListActions";

export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589,
  },
];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TODO:
      return {
        ...state,
        item: state.item.map((todo, index) =>{
          if(index === action.payload){
            return {
              ...todo,
              completed: !todo.completed
            }
          }else{
            return todo
          }
        })
      };
    case "ADD_TODO":
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now(),
        },
      ];

    default:
      return {
        state,
      };
  }
};
