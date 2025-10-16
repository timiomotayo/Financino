import { 
  Cell, 
  Legend, 
  Pie, 
  PieChart, 
  ResponsiveContainer,
  Tooltip
} from "recharts";

import { formatPercentage } from "@/lib/utils";
import { CategoryTooltip } from "@/components/category-tooltip";

const COLORS = ["#0062FF", "#12C6FF", "#FF647F", "#FF9354"];

type Props = {
  data: {
    name: string;
    value: number;
  }[];
};

export const PieVariant = ({ data }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Legend
          layout="horizontal"
          verticalAlign="bottom" 
          align="right"
          iconType="circle"
          content={({ payload }: any) => {
            const legendItems = Array.isArray(payload) ? payload : [];
            const total = legendItems.reduce(
              (sum: number, entry: any) => sum + (entry?.payload?.value ?? 0),
              0,
            );
            
            return (
              <ul className="flex flex-col space-y-2">
                {legendItems.map((entry: any, index: number) => {
                  const value = entry?.payload?.value ?? 0;
                  const percent = total === 0 ? 0 : (value / total) * 100;

                  return (
                    <li 
                    key={`item-${index}`}
                    className="flex items-center space-x-2"
                  >
                    <span
                      className="size-2 rounded-full"
                      style={{ backgroundColor: entry.color }}
                    />
                    <div className="space-x-1">
                      <span className="text-sm text-muted-foreground">
                        {entry.value}
                      </span>
                      <span className="text-sm">
                        {formatPercentage(percent)}
                      </span>
                    </div>
                  </li>
                  );
                })}
              </ul>
            );
          }}
        />
        <Tooltip content={<CategoryTooltip />} />
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={90}
          innerRadius={60}
          paddingAngle={2}
          fill="#8884d8"
          dataKey="value"
          labelLine={false}
        >
          {data.map((_entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
