import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <header>
        <UserButton />
      </header>
      <div></div>
    </>
  );
}
