import New from "./new"; 


export default async function Todolist() {
    
    const getTodos = async () => {
        let todos = await fetch("http://127.0.0.1:3001/api/todo/list");    
        return todos.json(); 
    }
    const {todos} = await getTodos();
    console.log(todos)
return (
    <div>
       <ul style= {{listStyleType: "none", padding: 0}}>
        {todos.map ((t: any) => { 
            return (
                <li key={t.id} style = {{ padding : "5px 0" }}>
                    <New todo={t}/>     
                </li>
            )
        })} 
       </ul>
      </div> 
  )
}

