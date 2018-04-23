import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Users from "../components/Users/Users";
import TodoInput from "../components/TodoInput/TodoInput";
import TaskList from "../components/TaskList/TaskList";
import "bootstrap/dist/css/bootstrap.css";
import App from "../App";
storiesOf("React ToDo", module)
  .add("Users form", () => <Users />)
  .add("Tasks form", () => <TodoInput />)
  .add("Tasks list", () => <TaskList />)
  .add("App", () => <App />);

// storiesOf("Button", module)
//   .add("with text", () => (
//     <Button onClick={action("clicked")}>Hello Button</Button>
//   ))
//   .add("with some emoji", () => (
//     <Button onClick={action("clicked")}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
