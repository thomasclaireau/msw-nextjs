import { AppProps } from "next/app";
import Link from "next/link";

if (process.env.NODE_ENV === "development") {
  require("../mocks");
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Link href="/">User</Link>
      <br />
      <Link href="/todos">Todos</Link>
      <Component {...pageProps} />
    </>
  );
}
