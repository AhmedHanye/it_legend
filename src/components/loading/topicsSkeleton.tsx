import React from "react";
import { Skeleton } from "../ui/skeleton";

const TopicsSkeleton = () => {
  return (
    <div className="flex flex-col space-y-16 max-md:py-10">
      <Skeleton className="w-full aspect-square max-md:h-32" />
      <Skeleton className="w-full aspect-square max-md:h-32" />
    </div>
  );
};

export default TopicsSkeleton;
