//Core interfaces
export interface Todo {
    id: string,
    description: string,
    completed: boolean,
    categoryColor: string
}

export interface ToDoState {
    todos: Todo[]
}

export interface Category {
    name: string,
    color: string
}

export interface TodoState {
    categories: Category[]
}

export interface ModalState {
    isOpen: boolean
}


//Interfaces and setting for Redux


//1) Types related to Todo Items
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const GET_ALL_TODO = 'GET_ALL_TODO';
export const MODIFY_TODO_CATEGORY_COLOR = 'MODIFY_TODO_CATEGORY_COLOR';

interface GetAllTodoAction {
    type: typeof GET_ALL_TODO,
    payload?: any
}

interface ToggleTodoAction {
    type: typeof TOGGLE_TODO,
    payload: Todo
}

interface AddTodoAction {
    type: typeof ADD_TODO,
    payload: Todo
}

interface DeleteTodoAction {
    type: typeof DELETE_TODO,
    payload: Todo
}

interface ModifyTodoCategoryColorAction {
    type: typeof MODIFY_TODO_CATEGORY_COLOR,
    payload: Todo
}

export type TodoActionTypes = AddTodoAction | DeleteTodoAction | GetAllTodoAction | ModifyTodoCategoryColorAction | ToggleTodoAction;

//2) Types related to Category

export const ADD_CATEGORY = 'ADD_CATEGORY'
export const MODIFY_CATEGORY = 'MODIFY_CATEGORY'
export const DELETE_CATEGORY = 'DELETE_CATEGORY'
export const GET_ALL_CATEGORY = 'GET_ALL_CATEGORY'


interface AddCategoryAction {
    type: typeof ADD_CATEGORY,
    payload: Category
}

interface ModifyCategoryAction {
    type: typeof MODIFY_CATEGORY,
    payload: Category
}

interface DeleteCategoryAction {
    type: typeof DELETE_CATEGORY,
    payload: Category
}

interface GetAllCategoryAction {
    type: typeof GET_ALL_CATEGORY,
    payload: Category
}

export type CategoryActionTypes = AddCategoryAction | ModifyCategoryAction | DeleteCategoryAction | GetAllCategoryAction;


//Types related to PopUpModal

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSED_MODAL = 'CLOSED_MODAL';

interface OpenModalAction {
    type: typeof OPEN_MODAL;
    payload?: any
}

interface CloseModalAction {
    type: typeof CLOSE_MODAL;
    payload?: any
}

export type ModalActionsTypes = OpenModalAction | CloseModalAction;


// Todo Visibility (all, completed, ongoing)
export const VISIBILITY_FILTERS = {
    ALL: "all",
    COMPLETED: "completed",
    ONGOING: "ongoing"
};

export const SET_FILTER = 'SET_FILTER'

interface SetFilterAction {
    type: typeof SetFilter,
    payload?: any
}
