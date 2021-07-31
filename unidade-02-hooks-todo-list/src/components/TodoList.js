import React, {useState, useMemo} from "react";
import {TodoListItem} from "./TodoListItem";

export const TodoList = () => {

    const defaultListItems = [
        {name: 'Tarefa 1', isCompleted: true},
        {name: 'Tarefa 2', isCompleted: false},
        {name: 'Tarefa 3', isCompleted: false},
        {name: 'Tarefa 4', isCompleted: false},
        {name: 'Tarefa 5', isCompleted: false},
    ]

    const [items, setItems] = useState(defaultListItems)
    const [taskValue, setTaskValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (items.find(i => i.name === taskValue)){
            return
        }
        setItems([...items, {name: taskValue, isCompleted: true}])
        setTaskValue('')
    }

    const handleOnTaskChanged = (e, item) => {
        console.log("handleOnTaskChanged ", item)
        setItems(items.map(i => {
            if (i.name === item.name){
                return{
                    ...i,
                    isCompleted: e.target.checked
                }
            }
            return i
        }))
    }

    const totalDeTarefasConcluidas = useMemo(()=>items.filter(item => item.isCompleted).length, [items])

    return (
        <div className='todo-list-container'>
            <p>Você completou {totalDeTarefasConcluidas}</p>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={taskValue}
                    placeholder='Adicione uma nova tarefa'
                    onChange={(e) => setTaskValue(e.target.value)}
                />
                <button
                    type='submit'
                >
                    Adicionar
                </button>
            </form>
            <ul>
                {items.map((item, index) => (
                    <TodoListItem
                        key={index}
                        item={item}
                        handleOnTaskChanged={handleOnTaskChanged}
                    />
                ))}
            </ul>
        </div>
    )
}