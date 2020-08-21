interface ITodo {
    name: string,
    description: string,
    status: boolean,
    categoryColor: string
}

interface Category {
    name: string,
    color: string
}

interface TodoProps {
    todo: ITodo
}


/* enum DeleteType {
    DeleteTask = 'Delete this task',
    DeleteCategory = 'Delete this category',
}

enum ModalType {
    CreateCategory = 'Create Category',
    Delete = 'Delete',
} */