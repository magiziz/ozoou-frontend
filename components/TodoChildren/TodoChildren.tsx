import React from "react";
import styles from "../../styles/Todochildren.module.scss";

const TodoChildren = () => {
  return (
    <div className={styles.Todochildren}>
      <div className={styles.TodochildrenCheckTotal}>
        <input type="checkbox" checked={true} />

        <div className={styles.TododchildrenEditTime}>
            <div className={styles.TododchildrenEditTime}>

            </div>
        </div>
      </div>
    </div>
  );
};

export default TodoChildren;
