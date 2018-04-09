import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Users from "../components/Users/Users";
import TodoInput from "../components/TodoInput/TodoInput";
import "bootstrap/dist/css/bootstrap.css";
storiesOf("React ToDo", module)
  .add("Users form", () => <Users />)
  .add("Tasks form", () => <TodoInput />);

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
