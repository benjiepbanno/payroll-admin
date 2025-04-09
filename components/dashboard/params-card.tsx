"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ParamsForm from "./params-form";

export default function ParamsCard() {
  return (
    <Card className="border-none shadow-none">
      {/* <CardHeader>
        <CardTitle className="text-xl">Search Payroll</CardTitle>
      </CardHeader> */}
      <CardContent className="p-0">
        <ParamsForm />
      </CardContent>
    </Card>
  );
}
