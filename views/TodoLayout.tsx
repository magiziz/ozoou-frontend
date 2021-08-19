import styles from "../styles/Todo.module.scss";
import Image from "next/image";
import TodoTable from "../components/Todo/TodoTable";

const TodoLayout: React.FC = () => {
  return (
    <div className={styles.todoOverlay}>
      <h1 className={styles.todoTitle}>JavaScript Test For OZZOU</h1>
      <Image src="/logo.png" width={250} height={250} />
      <div className={styles.todoInputAddContainer}>
        <input type="text" placeholder="Search for Todo List" />
        <button>Add New List</button>
      </div>
      <TodoTable />
    </div>
  );
};

export default TodoLayout;
