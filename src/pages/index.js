import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome to Artastic</title>
      </Head>

      <main>
        <h1>Home page of our website</h1>
      </main>

      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}
