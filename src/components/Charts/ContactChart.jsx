import React from 'react'
import { ResponsiveLine } from '@nivo/line'

const ContactChart = () => {
    return (
        <MyResponsiveLine data={data} />
    )
}

export default ContactChart

const format = {
    format: value =>
        `${Number(value)/10}%`,
}
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data /* see data tab */ }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 10, right: 130, bottom: 50, left: 50 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        curve="cardinal"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Meses',
            legendOffset: 36,
            legendPosition: 'middle'
        }}

        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
            

        }, {...format}
        }
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor', modifiers: [] }}
        pointLabelYOffset={-12}
        enableArea={true}
        areaBaselineValue={20}
        useMesh={true}
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 20,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 20,
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

const data = [
    {
        "id": "Campaña 1",
        "color": "hsl(104, 70%, 50%)",
        "data": [
            {
                "x": "Enero",
                "y": 86
            },
            {
                "x": "Febrero",
                "y": 181
            },
            {
                "x": "Marzo",
                "y": 167
            },
            {
                "x": "Abril",
                "y": 150
            },
            {
                "x": "Mayo",
                "y": 133
            },
            {
                "x": "Junio",
                "y": 121
            },
            {
                "x": "Julio",
                "y": 220
            },
            {
                "x": "Agosto",
                "y": 76
            },
            {
                "x": "Septiempre",
                "y": 123
            },
            {
                "x": "Octubre",
                "y": 241
            },
            {
                "x": "Noviembre",
                "y": 32
            },
            {
                "x": "Diciembre",
                "y": 283
            }
        ]
    },
    {
        "id": "Campaña 2",
        "color": "hsl(125, 70%, 50%)",
        "data": [
            {
                "x": "Enero",
                "y": 278
            },
            {
                "x": "Febrero",
                "y": 136
            },
            {
                "x": "Marzo",
                "y": 83
            },
            {
                "x": "Abril",
                "y": 101
            },
            {
                "x": "Mayo",
                "y": 119
            },
            {
                "x": "Junio",
                "y": 226
            },
            {
                "x": "Julio",
                "y": 133
            },
            {
                "x": "Agosto",
                "y": 234
            },
            {
                "x": "Septiempre",
                "y": 105
            },
            {
                "x": "Octubre",
                "y": 238
            },
            {
                "x": "Noviembre",
                "y": 138
            },
            {
                "x": "Diciembre",
                "y": 134
            }
        ]
    },
    {
        "id": "Campaña 3",
        "color": "hsl(44, 70%, 50%)",
        "data": [
            {
                "x": "Enero",
                "y": 127
            },
            {
                "x": "Febrero",
                "y": 222
            },
            {
                "x": "Marzo",
                "y": 1
            },
            {
                "x": "Abril",
                "y": 65
            },
            {
                "x": "Mayo",
                "y": 245
            },
            {
                "x": "Junio",
                "y": 55
            },
            {
                "x": "Julio",
                "y": 61
            },
            {
                "x": "Agosto",
                "y": 3
            },
            {
                "x": "Septiempre",
                "y": 52
            },
            {
                "x": "Octubre",
                "y": 39
            },
            {
                "x": "Noviembre",
                "y": 227
            },
            {
                "x": "Diciembre",
                "y": 125
            }
        ]
    },
    {
        "id": "Campaña 4",
        "color": "hsl(120, 70%, 50%)",
        "data": [
            {
                "x": "Enero",
                "y": 295
            },
            {
                "x": "Febrero",
                "y": 153
            },
            {
                "x": "Marzo",
                "y": 109
            },
            {
                "x": "Abril",
                "y": 212
            },
            {
                "x": "Mayo",
                "y": 257
            },
            {
                "x": "Junio",
                "y": 93
            },
            {
                "x": "Julio",
                "y": 122
            },
            {
                "x": "Agosto",
                "y": 45
            },
            {
                "x": "Septiempre",
                "y": 8
            },
            {
                "x": "Octubre",
                "y": 152
            },
            {
                "x": "Noviembre",
                "y": 205
            },
            {
                "x": "Diciembre",
                "y": 192
            }
        ]
    },
    {
        "id": "Campaña 5",
        "color": "hsl(51, 70%, 50%)",
        "data": [
            {
                "x": "Enero",
                "y": 157
            },
            {
                "x": "Febrero",
                "y": 11
            },
            {
                "x": "Marzo",
                "y": 59
            },
            {
                "x": "Abril",
                "y": 37
            },
            {
                "x": "Mayo",
                "y": 254
            },
            {
                "x": "Junio",
                "y": 130
            },
            {
                "x": "Julio",
                "y": 237
            },
            {
                "x": "Agosto",
                "y": 280
            },
            {
                "x": "Septiempre",
                "y": 217
            },
            {
                "x": "Octubre",
                "y": 28
            },
            {
                "x": "Noviembre",
                "y": 112
            },
            {
                "x": "Diciembre",
                "y": 136
            }
        ]
    }
]
