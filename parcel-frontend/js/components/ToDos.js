export default function ToDos(toDos) {
    return`
         <ul>
            ${toDos.map(toDo => {
        return`
                     <li>
                        <h3>${toDo}</h3>
                    </li>
              `
            }).join('')}
            </ul>

            <section class='add-todo'>
                <input class=add-todo_todoname' type='text' placeholder='Add a todo!'
                <button class=add-todo_submit'>Submit</button>
                </section>
                `

    
