'use client'

import {
    CartesianGrid,
    Line,
    LineChart,
    YAxis
} from 'recharts';

import {
    ChartConfig,
    ChartContainer, 
    ChartLegend, 
    ChartLegendContent, 
    ChartTooltip, 
    ChartTooltipContent 
} from '@/components/ui/chart'


const chartConfig = {
    webSales: {
        label: 'Web sales',
        color: '#0068f7',
    },
    offlineSales: {
        label: 'Offline selling',
        color: '#b1effe',
    },
} satisfies ChartConfig;

export default function CustomerDevice({ chartData }: { chartData: any[] }) {
    const formatYAxisTick = (value: number) => `${value/1000}k`;
    return(
        <ChartContainer className="h-30 w-full" config={chartConfig}
        >
            <LineChart 
                accessibilityLayer 
                data={chartData}
                margin={{
                    top: 5,
                    right: 0,
                    left: -25
                }}
            >
                <CartesianGrid vertical={false} strokeDasharray="3 3"/>
                <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={formatYAxisTick}
                    domain={[0, 8000]}
                    ticks={[0, 4000, 8000]}
                />
                <ChartTooltip cursor={false} content={ <ChartTooltipContent/> } />

                <ChartLegend content={<ChartLegendContent  />} />

                <Line 
                    dataKey={'webSales'}
                    stroke="var(--color-webSales)"
                    strokeWidth={0.5}
                    type={'natural'}
                    dot={false}
                />
                <Line 
                    dataKey={'offlineSales'}
                    stroke="var(--color-offlineSales)"
                    strokeWidth={0.5}
                    type={'natural'}
                    dot={false}
                />
            </LineChart>
        </ChartContainer>
    )
}