import type { NextPage } from "next";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Docly</title>
      </Head>
      <div className={styles.banner}></div>
      <aside className={styles.content}>
        <div className={styles.logo}></div>
        <form action="">
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
          <Button />

          <a href="/">
            <FontAwesomeIcon icon={faLock} /> Esqueceu sua senha?
          </a>
        </form>
      </aside>
    </div>
  );
};

export default Home;
