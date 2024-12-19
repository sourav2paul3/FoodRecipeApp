import styles from "../css/InnerContainer.module.css";
export function InnerContainer({ children }) {
  return <div className={styles.innerContainer}>{children}</div>;
}
