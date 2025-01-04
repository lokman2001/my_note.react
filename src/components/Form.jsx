import { useRef } from "react"

export default function Form ({createFunc , TFB}){
    let inputRef = useRef()
    
    let create = (e) => {
        e.preventDefault()
        let val = inputRef.current.value
        createFunc(val)
        e.target.reset()
    }

    return(
        <form action="" className="flex justify-around" onSubmit={create}>
            <input className="w-2/3 border-2 px-1" type="text" name="" id="" ref={inputRef} required/>
            <button type="submit">{TFB}</button>
        </form>
    )
}