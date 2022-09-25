package de.neuefische.backend.repo;

import de.neuefische.backend.model.ToDo;
import de.neuefische.backend.model.ToDoDto;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class ToDoRepo {

    private Map<String, ToDo> toDos = new HashMap<>();

    public List<ToDo> getAllToDos() {
        return new ArrayList<ToDo>(toDos.values());
    }

    public ToDo getToDoById(String id) {
        return toDos.get(id);
    }

    public ToDo addNewToDo(ToDo toDo) {
        toDos.put(toDo.getId(), toDo);
        return toDo;
    }

    public Map<String, ToDo> getToDos() {
        return toDos;
    }

    public ToDo editToDo(ToDo editedToDo) {
        toDos.put(editedToDo.getId(), editedToDo);
        return editedToDo;
    }

    public ToDo deleteToDo(String id) {
        return toDos.remove(id);
    }

    public ToDo setToDoDone(String id) {
        toDos.get(id).setStatus("DONE");
        return toDos.get(id);
    }

    public List<ToDo> getOnlyDone() {
        ArrayList<ToDo> doneToDos = new ArrayList<>();
        for(ToDo toDo :toDos.values()){
            if(toDo.getStatus().equals("DONE")){
                doneToDos.add(toDo);
            }
        }
        return doneToDos;
    }
}
