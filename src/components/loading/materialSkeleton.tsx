import { Skeleton } from "../ui/skeleton";

const MaterialSkeleton = () => {
  return (
    <div className="flex flex-col">
      <Skeleton className="w-full aspect-video rounded-xl" />
      <div className="py-8 flex gap-x-4">
        <Skeleton className="size-7 rounded-full" />
        <Skeleton className="size-7 rounded-full" />
        <Skeleton className="size-7 rounded-full" />
        <Skeleton className="size-7 rounded-full" />
      </div>
      <Skeleton className="w-full h-60 my-16 rounded-lg" />
    </div>
  );
};

export default MaterialSkeleton;
