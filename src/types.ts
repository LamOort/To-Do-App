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
    id: string,
    name: string,
    color: string
}

export interface CategoryState {
    categories: Category[]
}

export interface ModalState {
    modalType: string | null
}


//Interfaces and setting for Redux


//1) Types related to Todo Items
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const GET_ALL_TODO = 'GET_ALL_TODO';
export const MODIFY_TODO = 'MODIFY_TODO';

interface GetAllTodoAction {
    type: typeof GET_ALL_TODO,
    payload?: any
}

interface ToggleTodoAction {
    type: typeof TOGGLE_TODO,
    payload: Todo['id']
}

interface AddTodoAction {
    type: typeof ADD_TODO,
    payload: Todo
}

interface DeleteTodoAction {
    type: typeof DELETE_TODO,
    payload: Todo['id']
}

interface ModifyTodoAction {
    type: typeof MODIFY_TODO,
    payload: Todo
}

export type TodoActionTypes = AddTodoAction | DeleteTodoAction | GetAllTodoAction | ModifyTodoAction | ToggleTodoAction;

//2) Types related to Category

export const ADD_CATEGORY = 'ADD_CATEGORY'
export const MODIFY_CATEGORY_NAME = 'MODIFY_CATEGORY_NAME'
export const MODIFY_CATEGORY_COLOR = 'MODIFY_CATEGORY_COLOR'
export const DELETE_CATEGORY = 'DELETE_CATEGORY'
export const GET_ALL_CATEGORY = 'GET_ALL_CATEGORY'


interface AddCategoryAction {
    type: typeof ADD_CATEGORY,
    payload: Category
}

interface ModifyCategoryNameAction {
    type: typeof MODIFY_CATEGORY_NAME,
    payload: Category["id"]
}

interface ModifyCategoryColorAction {
    type: typeof MODIFY_CATEGORY_COLOR,
    payload: Category["id"]
}

interface DeleteCategoryAction {
    type: typeof DELETE_CATEGORY,
    payload: Category["id"]
}

interface GetAllCategoryAction {
    type: typeof GET_ALL_CATEGORY,
    payload?: Category
}

export type CategoryActionTypes = AddCategoryAction | ModifyCategoryNameAction | ModifyCategoryColorAction | DeleteCategoryAction | GetAllCategoryAction;


//Types related to PopUpModal

export const SET_MODAL_TYPE = 'SET_MODAL_TYPE';


interface SetModalTypeAction {
    type: typeof SET_MODAL_TYPE
    payload: string
}


export type ModalActionsTypes = SetModalTypeAction


