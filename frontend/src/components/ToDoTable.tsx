import {ToDo} from "../model/ToDo";
import ToDoCard from "./ToDoCard";

type ToDoTableProps = {
    toDos: ToDo[];
    filterToDo: string;
}

export default function ToDoTable (props: ToDoTableProps){

    return(
        <div className={"cards"}>
            {props.toDos.map(
            (toDo)=>{
                if(toDo.description.toLowerCase().includes(props.filterToDo.toLowerCase())){
                    return( <ToDoCard ToDoCard = {toDo}/>)}
                }
            )}
        </div>

    )

}