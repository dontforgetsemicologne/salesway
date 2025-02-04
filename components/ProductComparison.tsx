'use client'
import { 
    Bar, 
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis 
} from "recharts"

import { 
    ChartConfig, 
    ChartContainer, 
    ChartLegend, 
    ChartLegendContent, 
    ChartTooltip, 
    ChartTooltipContent 
} from "@/components/ui/chart"

const formatNumber = (value: number) => {
    if(value >= 1000) {
        return `${(value / 1000).toFixed(0)}k`;
    }
    return value.toString();
}

const chartConfig = {
    thisYear: {
        label: 'This year',
        color: '#0068f7'
    },
    lastYear: {
        label: 'Last year',
        color: '#b1effe'
    },
} satisfies ChartConfig;

interface ChartData {
    month: string;
    thisYear: number;
    lastYear: number;
}

export default function ProductComparison({ chartData }: { chartData: ChartData[] }) {
  return (
    <ChartContainer config={chartConfig} className="h-60 w-11/12">
        <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
                top: 5,
                right: 0,
                left: 0
            }}
            barSize={30}
            barGap={3}
            barCategoryGap={15}
        >
            <CartesianGrid 
                vertical={false}
                strokeDasharray='3 3'
            />
            <XAxis
                dataKey={'month'}
                tickLine={false}
                tickMargin={10}
                axisLine={false}
            />
            <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={formatNumber}
            />
            <ChartTooltip
                cursor={false}
                content={
                    <ChartTooltipContent/>
                }
            />
            <ChartLegend content={<ChartLegendContent  />} />
            <Bar 
                dataKey={'lastYear'} 
                fill="var(--color-lastYear)"
                radius={[4, 4, 4, 4]}
            />
            <Bar 
                dataKey={'thisYear'} 
                fill="var(--color-thisYear)"
                radius={[4, 4, 4, 4]}
            />
        </BarChart>
    </ChartContainer>
  )
}
