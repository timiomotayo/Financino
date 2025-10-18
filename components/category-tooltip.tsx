import { formatCurrency } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

type TooltipEntry = {
  payload?: {
    name?: string;
    value?: number;
  };
  value?: number;
};

type CategoryTooltipProps = {
  active?: boolean;
  payload?: TooltipEntry[];
};

export const CategoryTooltip = ({
  active,
  payload,
}: CategoryTooltipProps) => {
  const firstItem = Array.isArray(payload) ? payload[0] : undefined;

  if (!active || !firstItem?.payload) {
    return null;
  }

  const name = firstItem.payload.name ?? "Unknown";
  const value = typeof firstItem.value === "number" ? firstItem.value : 0;

  return (
    <div className="rounded-sm bg-white shadow-sm border overflow-hidden">
      <div className="text-sm p-2 px-3 bg-muted text-muted-foreground">
        {name}
      </div>
      <Separator />
      <div className="p-2 px-3 space-y-1">
        <div className="flex items-center justify-betwen gap-x-4">
          <div className="flex items-center gap-x-2">
            <div className="size-1.5 bg-rose-500 rounded-full" />
            <p className="text-sm text-muted-foreground">Expenses</p>
          </div>
          <p className="text-sm text-right font-medium">
            {formatCurrency(Math.abs(value))}
          </p>
        </div>
      </div>
    </div>
  );
};
