import React,{useState} from "react";

type TodoInsertProps = {
    onInsert: (text:string) => void;
}

function TodoInsert({onInsert}: TodoInsertProps) {
    const [value, setValue] = useState('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onInsert(value);
        setValue('');
    }
    
    return (
        <form onSubmit={onSubmit}>
            <input
                value={value}
                onChange={onChange}
                placeholder="할 일을 입력하세요."
            />
            <button type="submit">등록</button>
        </form>
    );
}

export default TodoInsert;