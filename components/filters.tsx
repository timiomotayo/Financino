import { Suspense } from "react";

import { DateFilter } from "@/components/date-filter";
import { AccountFilter } from "@/components/account-filter";
import { Skeleton } from "@/components/ui/skeleton";

const FiltersContent = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-y-2 lg:gap-y-0 lg:gap-x-2">
      <AccountFilter />
      <DateFilter />
    </div>
  );
};

const FiltersFallback = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-y-2 lg:gap-y-0 lg:gap-x-2 w-full lg:w-auto">
      <Skeleton className="h-9 w-full lg:w-48 rounded-md bg-white/20" />
      <Skeleton className="h-9 w-full lg:w-52 rounded-md bg-white/20" />
    </div>
  );
};

export const Filters = () => {
  return (
    <Suspense fallback={<FiltersFallback />}>
      <FiltersContent />
    </Suspense>
  );
};
