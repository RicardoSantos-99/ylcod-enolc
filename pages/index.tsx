import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
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
      <Image
        className={styles.banner}
        src="/docly.png"
        alt="Banner"
        width={760}
        height={465}
      />
      {/* <img className={styles.banner} src="docly.png" alt="banner" /> */}
      <aside className={styles.content}>
        <Image
          className={styles.logo}
          src="/docly-logo.png"
          alt="logo docly"
          width={150}
          height={121}
        />
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
