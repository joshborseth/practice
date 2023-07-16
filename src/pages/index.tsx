import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex h-full w-full items-start justify-end">
      <header>
        <UserButton />
      </header>
    </div>
  );
}
