import Image from "next/image";
import Header from "@/components/header";
import Todo from "@/components/Todo";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Todo />
      </main>
    </>
  );
}
