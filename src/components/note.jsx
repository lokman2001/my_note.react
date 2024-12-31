export default function Notes ({data , remove , showData}){
    return(
        <li className="flex justify-between border-2 px-2 py-4 rounded-md my-2" > 
            <button onClick={()=>{
            showData(data.id)}}>
                {data.name}
            </button>
            
            <button onClick={()=>{
                remove(data.id)
            }}>x</button>
        </li>
    )
}