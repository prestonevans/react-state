import { useState } from 'react'

export default function State(props) {
    const {staticTitle = 'Hello World'} = props
    const [title, setTitle] = useState(staticTitle);
    function clickHandler() {
        setTitle('Updated')
    }
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    )
}