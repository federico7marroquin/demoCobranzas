import React, { useEffect, useMemo, useState } from 'react'
import { ResponsiveLine } from '@nivo/line'

const ContactChart = (props) => {

    const { campaign, date } = props
    const [filteredData, setFilteredData] = useState(data)

    // const useHasChanged = (val) => {
    //     const prevVal = usePrevious(val)
    //     return prevVal !== val
    // }

    // const usePrevious = (value) => {
    //     const ref = useRef();
    //     useEffect(() => {
    //         ref.current = value;
    //     });
    //     return ref.current;
    // }
    // const hasVal1Changed = useHasChanged(campaign)
    // const hasVal2Changed = useHasChanged(date)


    const memoizedByDate = useMemo(() => {
        let array = []
        if (date === 'semana') {
            array = data.map(element => {
                let camp = {}
                camp.id = element.id
                camp.color = element.color
                camp.data = element.data.filter(item => item.x === "15" || item.x === "16")
                return camp
            })
        }
        else if (date === 'hoy') {
            array = data.map(element => {
                let camp = {}
                camp.id = element.id
                camp.color = element.color
                camp.data = element.data.filter(item => item.x === "16")
                return camp
            })
        }
        else if (date === 'mes') {
            array = data
        }

        if(campaign !== 'Todas las campañas'){
            return array.filter(element => element.id === campaign)
        }
        else{
            return array
        }
         
    }, [date, campaign])

    // const memoizedByCampaign = useMemo(() => memoizedByDate.filter(element => element.id === campaign), [memoizedByDate, campaign])




    useEffect(() => {
        setFilteredData(memoizedByDate)

        // if (hasVal1Changed) {
            // if (campaign !== 'Todas las campañas') {
            // }
            // else {
            //     setFilteredData(data)
            // }
        // }
        // else if (hasVal2Changed) {
            
        // }
        // setFilteredData(memoizedByDate)


    }, [
        // hasVal1Changed, 
        // hasVal2Changed, 
        // campaign, 
        // date, 
        // memoizedByCampaign, 
        memoizedByDate
        // memoizedByDate
    ])




    return (
        <MyResponsiveLine data={filteredData} />
    )
}

export default ContactChart

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data /* see data tab */ }) => (
    <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'transportation',
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
    }}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
        {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
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
    // <ResponsiveLine
    //     data={data}
    //     margin={{ top: 10, right: 130, bottom: 50, left: 50 }}
    //     xScale={{ type: 'point' }}
    //     yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
    //     yFormat=" >-.2f"
    //     curve="cardinal"
    //     axisTop={null}
    //     axisRight={null}
    //     axisBottom={{
    //         orient: 'bottom',
    //         tickSize: 5,
    //         tickPadding: 5,
    //         tickRotation: 0,
    //         legend: '',
    //         legendOffset: 36,
    //         legendPosition: 'middle'
    //     }}

    //     axisLeft={{
    //         orient: 'left',
    //         tickSize: 5,
    //         tickPadding: 5,
    //         tickRotation: 0,
    //         legend: 'count',
    //         legendOffset: -40,
    //         legendPosition: 'middle',
    //         format: value =>
    //             `${Number(value) / 10}%`,
    //     }}
    //     pointSize={10}
    //     pointColor={{ theme: 'background' }}
    //     pointBorderWidth={2}
    //     pointBorderColor={{ from: 'serieColor', modifiers: [] }}
    //     pointLabelYOffset={-12}
    //     enableArea={true}
    //     areaBaselineValue={20}
    //     useMesh={true}
    //     legends={[
    //         {
    //             anchor: 'right',
    //             direction: 'column',
    //             justify: false,
    //             translateX: 120,
    //             translateY: 0,
    //             itemsSpacing: 20,
    //             itemDirection: 'left-to-right',
    //             itemWidth: 80,
    //             itemHeight: 20,
    //             itemOpacity: 0.75,
    //             symbolSize: 20,
    //             symbolBorderColor: 'rgba(0, 0, 0, .5)',
    //             effects: [
    //                 {
    //                     on: 'hover',
    //                     style: {
    //                         itemBackground: 'rgba(0, 0, 0, .03)',
    //                         itemOpacity: 1
    //                     }
    //                 }
    //             ]
    //         }
    //     ]}
    // />
)

const data = [
    {
        "id": "Campaña 1",
        "color": "hsl(104, 70%, 50%)",
        "data": [
            {
                "x": "1",
                "y": 86
            },
            {
                "x": "2",
                "y": 181
            },
            {
                "x": "3",
                "y": 167
            },
            {
                "x": "4",
                "y": 150
            },
            {
                "x": "5",
                "y": 133
            },
            {
                "x": "6",
                "y": 121
            },
            {
                "x": "7",
                "y": 220
            },
            {
                "x": "8",
                "y": 76
            },
            {
                "x": "9",
                "y": 123
            },
            {
                "x": "10",
                "y": 241
            },
            {
                "x": "11",
                "y": 32
            },
            {
                "x": "12",
                "y": 283
            },
            {
                "x": "13",
                "y": 203
            },
            {
                "x": "14",
                "y": 175
            },
            {
                "x": "15",
                "y": 24
            },
            {
                "x": "16",
                "y": 154
            },
            //         {
            //             "x": "17",
            //             "y": 67
            //         },
            //         {
            //             "x": "18",
            //             "y": 45
            //         },
            //         {
            //             "x": "19",
            //             "y": 200
            //         },
            //         {
            //             "x": "20",
            //             "y": 175
            //         },
            //         {
            //             "x": "21",
            //             "y": 46
            //         },
            //         {
            //             "x": "22",
            //             "y": 92
            //         },
            //         {
            //             "x": "23",
            //             "y": 326
            //         },
            //         {
            //             "x": "24",
            //             "y": 123
            //         },
            //         {
            //             "x": "25",
            //             "y": 98
            //         },
            //         {
            //             "x": "26",
            //             "y": 153
            //         },
            //         {
            //             "x": "27",
            //             "y": 123
            //         },
            //         {
            //             "x": "28",
            //             "y": 23
            //         },
            //         {
            //             "x": "29",
            //             "y": 167
            //         },
            //         {
            //             "x": "30",
            //             "y": 36
            //         },
            //         {
            //             "x": "31",
            //             "y": 12
            //         },
        ]
    },
    {
        "id": "Campaña 2",
        "color": "hsl(125, 70%, 50%)",
        "data": [
            {
                "x": "1",
                "y": 278
            },
            {
                "x": "2",
                "y": 136
            },
            {
                "x": "3",
                "y": 83
            },
            {
                "x": "4",
                "y": 101
            },
            {
                "x": "5",
                "y": 119
            },
            {
                "x": "6",
                "y": 226
            },
            {
                "x": "7",
                "y": 133
            },
            {
                "x": "8",
                "y": 234
            },
            {
                "x": "9",
                "y": 105
            },
            {
                "x": "10",
                "y": 238
            },
            {
                "x": "11",
                "y": 138
            },
            {
                "x": "12",
                "y": 134
            },
            {
                "x": "13",
                "y": 100
            },
            {
                "x": "14",
                "y": 42
            },
            {
                "x": "15",
                "y": 56
            },
            {
                "x": "16",
                "y": 78
            },
            //         {
            //             "x": "17",
            //             "y": 67
            //         },
            //         {
            //             "x": "18",
            //             "y": 45
            //         },
            //         {
            //             "x": "19",
            //             "y": 200
            //         },
            //         {
            //             "x": "20",
            //             "y": 175
            //         },
            //         {
            //             "x": "21",
            //             "y": 46
            //         },
            //         {
            //             "x": "22",
            //             "y": 92
            //         },
            //         {
            //             "x": "23",
            //             "y": 326
            //         },
            //         {
            //             "x": "24",
            //             "y": 123
            //         },
            //         {
            //             "x": "25",
            //             "y": 98
            //         },
            //         {
            //             "x": "26",
            //             "y": 153
            //         },
            //         {
            //             "x": "27",
            //             "y": 123
            //         },
            //         {
            //             "x": "28",
            //             "y": 23
            //         },
            //         {
            //             "x": "29",
            //             "y": 167
            //         },
            //         {
            //             "x": "30",
            //             "y": 36
            //         },
            //         {
            //             "x": "31",
            //             "y": 12
            //         },
        ]
    },
    {
        "id": "Campaña 3",
        "color": "hsl(44, 70%, 50%)",
        "data": [
            {
                "x": "1",
                "y": 127
            },
            {
                "x": "2",
                "y": 222
            },
            {
                "x": "3",
                "y": 1
            },
            {
                "x": "4",
                "y": 65
            },
            {
                "x": "5",
                "y": 245
            },
            {
                "x": "6",
                "y": 55
            },
            {
                "x": "7",
                "y": 61
            },
            {
                "x": "8",
                "y": 3
            },
            {
                "x": "9",
                "y": 52
            },
            {
                "x": "10",
                "y": 39
            },
            {
                "x": "11",
                "y": 227
            },

            {
                "x": "12",
                "y": 283
            },
            {
                "x": "13",
                "y": 106
            },
            {
                "x": "14",
                "y": 123
            },
            {
                "x": "15",
                "y": 67
            },
            {
                "x": "16",
                "y": 54
            },
            // {
            //     "x": "17",
            //     "y": 67
            // },
            // {
            //     "x": "18",
            //     "y": 45
            // },
            // {
            //     "x": "19",
            //     "y": 200
            // },
            // {
            //     "x": "20",
            //     "y": 175
            // },
            // {
            //     "x": "21",
            //     "y": 46
            // },
            // {
            //     "x": "22",
            //     "y": 92
            // },
            // {
            //     "x": "23",
            //     "y": 326
            // },
            // {
            //     "x": "24",
            //     "y": 123
            // },
            // {
            //     "x": "25",
            //     "y": 98
            // },
            // {
            //     "x": "26",
            //     "y": 153
            // },
            // {
            //     "x": "27",
            //     "y": 123
            // },
            // {
            //     "x": "28",
            //     "y": 23
            // },
            // {
            //     "x": "29",
            //     "y": 167
            // },
            // {
            //     "x": "30",
            //     "y": 36
            // },
            // {
            //     "x": "31",
            //     "y": 12
            // },
        ]
    },
    {
        "id": "Campaña 4",
        "color": "hsl(120, 70%, 50%)",
        "data": [
            {
                "x": "1",
                "y": 295
            },
            {
                "x": "2",
                "y": 153
            },
            {
                "x": "3",
                "y": 109
            },
            {
                "x": "4",
                "y": 212
            },
            {
                "x": "5",
                "y": 257
            },
            {
                "x": "6",
                "y": 93
            },
            {
                "x": "7",
                "y": 122
            },
            {
                "x": "8",
                "y": 45
            },
            {
                "x": "9",
                "y": 8
            },
            {
                "x": "10",
                "y": 152
            },
            {
                "x": "11",
                "y": 205
            },
            {
                "x": "12",
                "y": 192
            },
            {
                "x": "13",
                "y": 106
            },
            {
                "x": "14",
                "y": 230
            },
            {
                "x": "15",
                "y": 145
            },
            {
                "x": "16",
                "y": 57
            },
            // {
            //     "x": "17",
            //     "y": 67
            // },
            // {
            //     "x": "18",
            //     "y": 45
            // },
            // {
            //     "x": "19",
            //     "y": 200
            // },
            // {
            //     "x": "20",
            //     "y": 175
            // },
            // {
            //     "x": "21",
            //     "y": 46
            // },
            // {
            //     "x": "22",
            //     "y": 92
            // },
            // {
            //     "x": "23",
            //     "y": 326
            // },
            // {
            //     "x": "24",
            //     "y": 123
            // },
            // {
            //     "x": "25",
            //     "y": 98
            // },
            // {
            //     "x": "26",
            //     "y": 153
            // },
            // {
            //     "x": "27",
            //     "y": 123
            // },
            // {
            //     "x": "28",
            //     "y": 23
            // },
            // {
            //     "x": "29",
            //     "y": 167
            // },
            // {
            //     "x": "30",
            //     "y": 36
            // },
            // {
            //     "x": "31",
            //     "y": 12
            // },
        ]
    },
    {
        "id": "Campaña 5",
        "color": "hsl(51, 70%, 50%)",
        "data": [
            {
                "x": "1",
                "y": 157
            },
            {
                "x": "2",
                "y": 11
            },
            {
                "x": "3",
                "y": 59
            },
            {
                "x": "4",
                "y": 37
            },
            {
                "x": "5",
                "y": 254
            },
            {
                "x": "6",
                "y": 130
            },
            {
                "x": "7",
                "y": 237
            },
            {
                "x": "8",
                "y": 280
            },
            {
                "x": "9",
                "y": 217
            },
            {
                "x": "10",
                "y": 28
            },
            {
                "x": "11",
                "y": 112
            },
            {
                "x": "12",
                "y": 136
            },
            {
                "x": "13",
                "y": 89
            },
            {
                "x": "14",
                "y": 34
            },
            {
                "x": "15",
                "y": 45
            },
            {
                "x": "16",
                "y": 154
            },
            // {
            //     "x": "17",
            //     "y": 67
            // },
            // {
            //     "x": "18",
            //     "y": 45
            // },
            // {
            //     "x": "19",
            //     "y": 200
            // },
            // {
            //     "x": "20",
            //     "y": 175
            // },
            // {
            //     "x": "21",
            //     "y": 46
            // },
            // {
            //     "x": "22",
            //     "y": 92
            // },
            // {
            //     "x": "23",
            //     "y": 326
            // },
            // {
            //     "x": "24",
            //     "y": 123
            // },
            // {
            //     "x": "25",
            //     "y": 98
            // },
            // {
            //     "x": "26",
            //     "y": 153
            // },
            // {
            //     "x": "27",
            //     "y": 123
            // },
            // {
            //     "x": "28",
            //     "y": 23
            // },
            // {
            //     "x": "29",
            //     "y": 167
            // },
            // {
            //     "x": "30",
            //     "y": 36
            // },
            // {
            //     "x": "31",
            //     "y": 12
            // },
        ]
    }
]
