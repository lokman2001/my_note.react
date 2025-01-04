import Header from './components/header'
import './App.css'
import { useState } from 'react'
import SideOne from './components/SideOne';
import List1 from './components/List1';
import Item1 from './components/Item1';
import Item2 from './components/Item2';
import Form from './components/Form';
import SideTwo from './components/SideTwo';
import List2 from './components/List2';


function App() {

  let tempData = [];

  const [Notes, setNotes] = useState([
    {
      id: 1,
      name: "Note 1",
      notes: [{
        id: 1,
        note: "this is the sample Note"
      },]
    }
  ]);
  const [Detail, setDetail] = useState([])

  let Create = (val) => {
    console.log(val)
    let id;
    if (Notes.length === 0) {
      id = 1
    } else {
      id = Notes[Notes.length - 1].id + 1;
    }
    let data = {
      id: id,
      name: val,
      notes: [{
        id: 1,
        note: "this is the sample Note"
      },]
    };
    setNotes([...Notes, data])

  }

  let remove = (id) => {
    setNotes(Notes.filter((note) => note.id !== id));
    if (id === Detail[0].id) {
      setDetail([]);
    }

  }

  let showData = (id) => {
    let d = Notes.filter(note => note.id === id)
    setDetail(d)

    console.log(tempData)
  }

  let addNote = (note) => {
    let data = Detail[0]
    let notes = data.notes
    let id = notes[notes.length - 1].id + 1;
    notes = [...notes, { id, note }]
    data.notes = notes
    setDetail([data])
    console.log(notes)
  }


  return (
    <>
      <Header></Header>
      <div className='flex justify-between px-4'>
        <SideOne>
          <h1>Create New Notes</h1>
          <Form createFunc={Create} TFB={"Create"} />
          <List1>
            <h1>Note list</h1>
            {Notes.map(note => <Item1 key={note.id} note={note} removeFunc={remove} showFunc={showData} ></Item1>)}
          </List1>
        </SideOne>
        <SideTwo>
          {Detail.map(d =>
            <List2 key={d.id}>
              <h1>{d.name}</h1>
              <hr className='my-2' />
              {d.notes.map(note =>
                <Item2 key={note.id} note={note.note}></Item2>)}
              <hr className='my-2' />
              <Form createFunc={addNote} TFB={"Create"} />
            </List2>)}


        </SideTwo>
      </div>

    </>
  )
}

export default App
