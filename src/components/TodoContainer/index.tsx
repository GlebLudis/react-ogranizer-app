import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import './styles.css';


function TodoContainer() {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [todoText, setTodoText] = useState('');

    return (
        <div className="add-todo-box-root" data-active={isInputFocused}>
       <span className="add-todo-box-leading">
       </span>

            <input
                type="text"
                placeholder="Type it ..."
                className="add-todo-box-input"
                value={todoText}
                onChange={(e) => setTodoText(e.currentTarget.value)}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
            />

            <div className="add-todo-button-root">
                <button
                    type="submit"
                    className="add-todo-button"
                    title="Add todo"
                    disabled={(todoText.trim()).length === 0}
                >
                    <AddIcon />
                </button>
            </div>
        </div>
    )
}

export default TodoContainer;
