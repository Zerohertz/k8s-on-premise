import Image from "next/image";

import { APP_LIST } from "@/common/constants";

import LinkItem from "./LinkItem";
import LinkList from "./LinkList";

import styles from "./homeContainer.module.scss";

const HomeContainer: React.FC = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/main-logo.png"
          alt="메인 로고"
          objectFit="contain"
          sizes="(max-width: 600px) 100%, (min-width: 601px) 70%"
        />
      </div>
      <LinkList>
        {APP_LIST.map((app) => (
          <LinkItem app={app} key={app.name} />
        ))}
      </LinkList>
    </main>
  );
};

export default HomeContainer;
