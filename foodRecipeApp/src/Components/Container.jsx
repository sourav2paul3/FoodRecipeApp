import styles from "../css/Container.module.css";

export function Container({ children }) {
  return <div className={styles.parentContainer}>{children}</div>;
}
