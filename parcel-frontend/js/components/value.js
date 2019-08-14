export default function Values(values) {
    //console.log(values)
    return `
        <ul>
        ${values.map(value => {
            console.log(value);
            return  `
                <li>
                    <h3>${value}</h3>
                </li>   
                `
        }).join('')}
        </ul>
    `    
}

