import { Spinner } from "@heroui/spinner";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex justify-center items-center h-dvh">
      <Spinner size="lg" />
    </div>
  );
}
