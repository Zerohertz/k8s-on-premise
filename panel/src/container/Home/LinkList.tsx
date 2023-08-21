import type { ReactNode } from "react";

import styles from "./linkList.module.scss";

interface Props {
  children: ReactNode;
}

const LinkList: React.FC<Props> = ({ children }) => {
  return <nav className={styles.wrapper}>{children}</nav>;
};

export default LinkList;
