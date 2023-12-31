import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useSession } from "next-auth/react";

export default function Home() {
  const { session, status } = useSession();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>
          {session
            ? `Welcome ${session.user.name}, to buycars.com`
            : "Welcome to buycars.com. Please sign in to see the full functionality"}
        </h1>
      </main>
    </>
  );
}
