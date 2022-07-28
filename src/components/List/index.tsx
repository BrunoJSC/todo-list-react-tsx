import { ChangeEvent, useEffect, useState } from "react";
import ListItem from "../ListItem";

import { v4 as uuid } from "uuid";

import { Button, Container, Header, Input, Title } from "./style";

export interface Tasks {
  id: string;
  title: string;
  date: string;
  isComplete: boolean;
}

export default function List() {
  let maxLength = 10;

  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [text, setText] = useState("");

  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(setText(e.target.value));
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
    JSON.parse(localStorage.getItem("task")!!);
  }, [tasks]);

  const handleClick = () => {
    const newTask: Tasks = {
      id: uuid(),
      title:
        text.length > maxLength ? text.substring(0, maxLength) + "..." : text,
      date: new Date().toLocaleString("pt-br", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",

        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
      isComplete: false,
    };
    setTasks((prevent) => [...prevent, newTask]);
    setText("");
  };

  const completedTask = (taskId: string) => {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isComplete: !task.isComplete,
        };
      }
      return task;
    });
    setTasks(newTask);
  };

  const deleted = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <Header>
      <Title>Todo List</Title>
      <Container>
        <div>{tasks.length}</div>
        <Input onChange={handleText} value={text} />
        <Button onClick={handleClick}>Adicionar</Button>
        <ul>
          {tasks.map((task) => (
            <ListItem
              key={task.id}
              task={task}
              completed={completedTask}
              deleted={deleted}
            />
          ))}
        </ul>
      </Container>
    </Header>
  );
}
