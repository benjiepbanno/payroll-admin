import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export function RegularTabsList() {
  return (
    <TabsList>
      <TabsTrigger value="emd">Earnings and Mandatory Deductions</TabsTrigger>
      <TabsTrigger value="od">Other Deductions</TabsTrigger>
      <TabsTrigger value="r">Remittances</TabsTrigger>
    </TabsList>
  );
}

export function SpecialTabsList() {
  return (
    <TabsList>
      <TabsTrigger value="ed">Earnings and Deductions</TabsTrigger>
      <TabsTrigger value="r">Remittances</TabsTrigger>
    </TabsList>
  );
}