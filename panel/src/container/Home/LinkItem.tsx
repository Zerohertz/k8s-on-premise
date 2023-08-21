import Image from "next/image";
import Link from "next/link";

import type { AppInterface } from "@/common/types/app";

import styles from "./linkItem.module.scss";

interface Props {
  app: AppInterface;
}

const LinkItem: React.FC<Props> = ({ app }) => {
  return (
    <Link href={app.href} className={styles.wrapper} style={{ backgroundColor: 'white' }}>
      <div className={styles.imageWrapper}>
        <Image src={app.imageSrc} alt={`${app.name} 이미지`} fill />
      </div>
      <p className={styles.name}>{app.name}</p>
    </Link>
  );
};

export default LinkItem;
