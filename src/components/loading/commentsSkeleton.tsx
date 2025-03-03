import { Skeleton } from "../ui/skeleton";

const CommentsSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex flex-col h-96 space-y-10">
        <div className="h-20 gap-x-3 flex">
          <Skeleton className="h-full rounded-full aspect-square" />
          <Skeleton className="h-full w-full" />
        </div>
        <div className="h-20 gap-x-3 flex">
          <Skeleton className="h-full rounded-full aspect-square" />
          <Skeleton className="h-full w-full" />
        </div>
        <div className="h-20 gap-x-3 flex">
          <Skeleton className="h-full rounded-full aspect-square" />
          <Skeleton className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default CommentsSkeleton;
