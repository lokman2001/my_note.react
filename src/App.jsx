import Header from './components/header'
import NoteList from './components/noteList'
import './App.css'
import { useState } from 'react'
import Notes from './components/note'
import NoteData from './components/NotesData'

function App() {

  const [Note , setNote] = useState([
    {
      id : 1 ,
      name : "Note 1",
      data : []
    }
  ]);
  const[detail, setDetail] = useState()

  let Create = (name) => {
    let data = [];
    let id;
    if(Note.length === 0){
      id = 1
    }else{
      id = Note[Note.length -1].id + 1;
    }
    setNote([...Note,{id , name , data}])

  }
  let remove = (id) => {
    setNote(Note.filter((note)=>note.id !== id));
  }
  let showData = (id) => {
    let data =  Note.filter(note => note.id === id).data
    let name = Note.filter(note => note.id === id).name
    setDetail([id , name , data])
    console.log(detail)
    
  }

  return (
    <>
      <Header></Header>
      <div className='mx-5 flex '>
        <div className="border-2 rounded-md w-1/3 px-2 py-2">
          <NoteList Create={Create} />
          <ul>
              {Note.map( note => {
                return <Notes key={note.id} data={note} remove={remove} showData={showData}/>
              })} 
          </ul>
        </div>
        <div className='py-2 px-2 w-2/3'>
            <NoteData data={detail}/>
        </div>
      </div>
    </>
  )
}

export default App
