import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        name: "Enero",
        first: 40,
        second: 24,
        third: 34,
        fourth: 16,
    },
    {
        name: "Febrero",
        first: 30,
        second: 43,
        third: 72,
        fourth: 50,
    },
    {
        name: "Marzo",
        first: 50,
        second: 48,
        third: 62,
        fourth: 26,
    },
    {
        name: "Abril",
        first: 27,
        second: 39,
        third: 70,
        fourth: 46,
    },
    {
        name: "Mayo",
        first: 18,
        second: 48,
        third: 71,
        fourth: 16,
    },
    {
        name: "Junio",
        first: 83,
        second: 38,
        third: 25,
        fourth: 36,
    },
    {
        name: "Julio",
        first: 34,
        second: 73,
        third: 31,
        fourth: 56,
    }
];


const renderColorfulLegendText = (value, entry) => {
    const { color } = entry;
  
    return <span style={{ color,  marginRight: '40px' }}>{value}</span>;
  };

const toPercent = (decimal, fixed = 0) =>
  `${(decimal)}%`;
  
function CallBarChart() {
    const theme = useTheme()

    return (
        <ResponsiveContainer>
            <BarChart
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={toPercent} />
                <Tooltip />
                <Legend 
                    verticalAlign="top" 
                    align="left"
                    height={36} 
                    formatter={renderColorfulLegendText}
                />
                <Bar legendType="diamond" dataKey="first" name="Primer contacto" fill={theme.charts.first} />
                <Bar legendType="diamond" dataKey="second" name="Segundo contacto" fill={theme.charts.second} />
                <Bar legendType="diamond" dataKey="third" name="Tercer contacto" fill={theme.charts.third} />
                <Bar legendType="diamond" dataKey="fourth" name="Cuarto contacto" fill={theme.charts.fourth} />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default CallBarChart