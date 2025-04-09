import { Skeleton } from "../ui/skeleton";

export default function DataTableSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-24 rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-8" />
        <Skeleton className="h-8" />
      </div>
    </div>
  );
}
