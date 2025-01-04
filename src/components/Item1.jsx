export default function Item1({note , showFunc , removeFunc}){
    let show = () => {
        showFunc (note.id)
    }
    let remove = () => {
        removeFunc (note.id)
    }
    return(
        <li className="my-1 border px-3 flex justify-between"><span onClick={show}>{note.name}</span> <span onClick={remove}>x</span></li>
    )
}