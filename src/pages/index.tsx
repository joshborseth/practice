import { UserButton } from "@clerk/nextjs";
import { trpc } from "~/utils/trpc";

export default function Home() {
  const hello = trpc.hello.useQuery({ text: "world" });
  return (
    <>
      <header>
        <UserButton />
      </header>
      <p>{hello.data?.greeting}</p>
    </>
  );
}
