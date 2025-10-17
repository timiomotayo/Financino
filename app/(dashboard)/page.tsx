import { Suspense } from "react";

import { DataGrid, DataGridSkeleton } from "@/components/data-grid";
import { DataCharts, DataChartsSkeleton } from "@/components/data-charts";

export default function DashboardPage() {
  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <Suspense fallback={<DataGridSkeleton />}>
        <DataGrid />
      </Suspense>
      <Suspense fallback={<DataChartsSkeleton />}>
        <DataCharts />
      </Suspense>
    </div>
  );
};
