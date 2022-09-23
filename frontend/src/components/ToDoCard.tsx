import {ToDo} from "../model/ToDo";
import "./ToDoCard.css"

type ToDoCardProps = {
    ToDoCard: ToDo;
}

export default function ToDoCard (props: ToDoCardProps){

    return(
        <div className={"card"}>
            <div className={"todo-card"}>
                <h3>{props.ToDoCard.description}</h3>
                <p>{props.ToDoCard.status}</p>
            </div>
        </div>

    )

}