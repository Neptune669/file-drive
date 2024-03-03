"use client";
import { Button } from "@/components/ui/button";
import {
  SignIn,
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { useSession } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
export default function Home() {
  const createFile = useMutation(api.files.createFile);
  const files = useQuery(api.files.getFiles);
  const session = useSession();
  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <SignedIn>
        <SignOutButton>
          <Button>Sign Out</Button>
        </SignOutButton>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>
      {files?.map((file) => (
        <div key={file._id}>{file.name}</div>
      ))}
      <Button onClick={() => createFile({ name: "test" })}>Click Me</Button>
    </main>
  );
}
