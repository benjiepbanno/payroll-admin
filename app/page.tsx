import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default async function Page() {
  return (
    <div className="flex justify-center items-center h-dvh">
      <div className="justify-items-center space-y-4">
        <div className="text-2xl">Welcome to Payroll Management!</div>
        <Button asChild>
          <Link href="/dashboard">
            Go to Dashboard
            <ChevronRight />
          </Link>
        </Button>
      </div>
    </div>
  );
}
