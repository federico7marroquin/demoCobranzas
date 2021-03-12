import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

const TopBarChart = () => {
    return (
        <MyResponsiveBar data={data} />
    )
}

export default TopBarChart

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveBar = ({ data }) => (
    <ResponsiveBar
        data={data}
        keys={[
            'Falta de liquidez',
            'Priorización de otras deudas',
            'Olvido',
            'Rehusar a pagar',
            'Desinformación',
            'Inconformidad',
            'Fallos',
            'En validación',
            'Prorroga',
            'Ampliación de plazo'
        ]}
        indexBy="reasons"
        margin={{ top: 0, right: 230, bottom: 50, left: 30 }}
        padding={0.05}
        layout="horizontal"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisLeft={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '# veces',
            legendPosition: 'middle',
            legendOffset: 40
        }}
        enableGridY={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 20,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
)

const data = [
    {
        "reasons": "10",
        "Ampliación de plazo": 34,
        "Ampliación de plazoColor": "hsl(311, 70%, 50%)"
    },
    {
        "reasons": "9",
        "Prorroga": 74,
        "ProrrogaColor": "hsl(311, 70%, 50%)"
    },
    {
        "reasons": "8",
        "En validación": 104,
        "En validaciónColor": "hsl(311, 70%, 50%)"
    },
    {
        "reasons": "7",
        "Fallos": 154,
        "FallosColor": "hsl(311, 70%, 50%)"
    },
    {
        "reasons": "6",
        "Inconformidad": 177,
        "InconformidadColor": "hsl(158, 70%, 50%)",

    },
    {
        "reasons": "5",
        "Desinformación": 180,
        "DesinformaciónColor": "hsl(107, 70%, 50%)"
    },
    {
        "reasons": "4",
        "Rehusar a pagar": 234,
        "Rehusar a pagarColor": "hsl(6, 70%, 50%)",
    },

    {
        "reasons": "3",
        "Olvido": 260,
        "OlvidoColor": "hsl(100, 70%, 50%)",
    },
    {
        "reasons": "2",
        "Priorización de otras deudas": 330,
        "Priorización de otras deudasColor": "hsl(159, 70%, 50%)",

    },
    {
        "reasons": "1",
        "Falta de liquidez": 432,
        "Falta de liquidezColor": "hsl(42, 70%, 50%)",

    },
]