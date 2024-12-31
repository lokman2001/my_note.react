export default function NoteData({ id, name, data }) {
    return (
        <>
            <div className="border-2 rounded-md">
                <span>{name}</span>
                <div className="h-60 ">
                    <ul>
                        { data.map(){d => return <li></li>
                            
                        }}
                    </ul>
                </div>

            </div>
        </>

    )
}