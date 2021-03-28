import React, { useRef } from 'react'

interface TodoFormProps {
    onAdd(title: string): void
}

export const ToDoForm: React.FC<TodoFormProps> = props => {
    // const [title, setTitle, titleDescription] = useState<string>('')
    const ref = useRef<HTMLInputElement>(null)
    const ref2 = useRef<HTMLInputElement>(null)
    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
            // console.log(title)
            // setTitle('')
        }
    }

    return (
<>
<div className="row">
        <div className="input-field mt2 px20 col s6">
            <input
                // onChange={changeHandler}
                // value={title}
                ref={ref}
                type="text"
                id="title"
                placeholder="Enter task name"
                onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className="active px1"></label>
            </div>
             <div className="input-field mt2  col s6">
                        <input

                            ref={ref2}
                            type="text"
                            id="titleDescription"
                            placeholder="Enter description"
                            onKeyPress={keyPressHandler}
                        />
                        <label htmlFor="title" className="active px1"></label>

            </div>
            </div>
</>
    )
}