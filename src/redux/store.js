import {createStore, combineReducers} from 'redux';

// Selectors: selectionner une partie de notre store

export const getTask = store => store.tasksList;

export const getCompletedTasks = store =>
  store.tasksList.filter(el => el.isCompleted);

// Actions: fonctions qui renvoient un objet aux reducers - { type: MON_ACTION, payload: {DATA} }

// ADD_TASK
const ADD_TASK = 'ADD_TASK';

export const addTask = title => {
  return {
    type: ADD_TASK,
    payload: {
      title,
    },
  };
};

// TOGGLE_TASK
const TOGGLE_TASK = 'TOGGLE_TASK';

export const toggleTask = id => ({
  type: TOGGLE_TASK,
  payload: {id},
});

// DELETE_TASK
const DELETE_TASK = 'DELETE_TASK';

export const deleteTask = id => ({
  type: DELETE_TASK,
  payload: {id},
});

// Reducers: fonctions retourne un nouveau state
const initialState = [{id: 1, title: 'Init Task', isCompleted: false}];

const tasksList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: new Date().getTime(),
          title: action.payload.title,
          isCompleted: false,
        },
      ];
    case TOGGLE_TASK:
      const newState = [];

      state.forEach(task => {
        if (task.id === action.payload.id) {
          newState.push({
            ...task,
            isCompleted: !task.isCompleted,
          });
          return;
        }

        newState.push(task);
      });
      return newState;

    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload.id);
    default:
      return state;
  }
};

const rootReducers = combineReducers({
  tasksList,
});

// store: attaché à React - accessible depuis tous les composants
export const store = createStore(rootReducers);
