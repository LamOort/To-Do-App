//Core interfaces
export interface Todo {
    id: string,
    description: string,
    completed: boolean,
    categoryColor: string
}

export interface ToDoState {
    todos: Todo[],
    capturedTodoId: string
}

export interface Category {
    id: string,
    name: string,
    color: string
}

export interface CategoryState {
    categories: Category[],
    capturedCategoryId: string
}

export interface ModalState {
    modalType: string | null
}


//Interfaces and setting for Redux


//1) Types related to Todo Items
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const MODIFY_TODO = 'MODIFY_TODO';
export const GET_CAPTURED_TODO_ID = 'GET_CAPTURED_TODO_ID';



interface GetCapturedTodoIdAction {
    type: typeof GET_CAPTURED_TODO_ID,
    payload: Todo['id']
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

export type TodoActionTypes = AddTodoAction | DeleteTodoAction | GetCapturedTodoIdAction | ModifyTodoAction | ToggleTodoAction;

//2) Types related to Category

export const ADD_CATEGORY = 'ADD_CATEGORY'
export const MODIFY_CATEGORY = 'MODIFY_CATEGORY'
export const DELETE_CATEGORY = 'DELETE_CATEGORY'
export const GET_CAPTURED_CATEGORY_ID = 'GET_CAPTURED_CATEGORY_ID'


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
    payload: Category["id"]
}

interface GetCapturedCategoryIdAction {
    type: typeof GET_CAPTURED_CATEGORY_ID,
    payload: string
}



export type CategoryActionTypes = AddCategoryAction | ModifyCategoryAction | DeleteCategoryAction | GetCapturedCategoryIdAction;


//Types related to PopUpModal

export const SET_MODAL_TYPE = 'SET_MODAL_TYPE';


interface SetModalTypeAction {
    type: typeof SET_MODAL_TYPE
    payload: string
}


export type ModalActionsTypes = SetModalTypeAction


