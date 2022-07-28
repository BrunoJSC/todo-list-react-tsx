import { FiCheckCircle, FiTrash2 } from "react-icons/fi";
import { Tasks } from "../List";
import { Button, InputChecked, Li } from "./styles";

interface ListItemProps {
  task: Tasks;
  deleted: (taskId: string) => void;
  completed: (taskId: string) => void;
}

export default function ListItem({ task, deleted, completed }: ListItemProps) {
  return (
    <Li>
      <InputChecked
        className="checked"
        onClick={() => console.log(completed(task.id))}
      >
        {task.isComplete ? (
          <FiCheckCircle color="red" />
        ) : (
          <div />
        )}
      </InputChecked>

      <strong>{task.title}</strong>
      <p>{task.date}</p>
      <Button onClick={() => console.log(deleted(task.id))}>
        <FiTrash2 size={26} />
      </Button>
    </Li>
  );
}
