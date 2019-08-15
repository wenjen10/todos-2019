export default function ToDos(toDos) {
    return`
         <ul>
            ${toDos.map(toDo => {
        return`
                     <li>
                        <h3>${value}</h3>
                    </li>
              `
            }).join('')}
            </ul>


    
