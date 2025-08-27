"use client";

import { Button } from "@/components/ui/button";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";

export default function Home() {
  const { onOpen } = useNewAccount();

  return (
    <div className="flex flex-cols items-center justify-center min-h-screen gap-4">
      <Button onClick={onOpen}>Add new account</Button>
    </div>
  );
}
