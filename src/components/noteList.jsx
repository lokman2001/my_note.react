import { useRef } from "react";


export default function NoteList({ Create }) {
    let NoteNameRef = useRef();

    return (

        <>
            <div className="flex justify-between">
                <h1>Notes</h1>
                <button className=" w-1/6 border-2 rounded-md text-center">+</button>
            </div>
            <form action="" className="flex justify-around my-2" onSubmit={(e) => {
                e.preventDefault()
                let NoteName = NoteNameRef.current.value;
                Create(NoteName);
                e.currentTarget.reset();
            }}>

                <input ref={NoteNameRef} type="text" name="name" className="w-2/3 border-2 rounded-md px-1" placeholder="New Note Name" />
                <button className="w-1/4 border-2 rounded-md text-center" type="submit" >Create</button>

            </form>

        </>

    )


}