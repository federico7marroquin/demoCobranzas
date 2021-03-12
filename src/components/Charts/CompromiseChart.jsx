import React from 'react'
import { ResponsiveStream } from '@nivo/stream'

const CompromiseChart = () => {
    return (
        <MyResponsiveStream data={data}/>
    )
}

export default CompromiseChart

// yarn add @nivo/core @nivo/stream
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveStream = ({ data /* see data tab */ }) => (
    <ResponsiveStream
        data={data}
        keys={[ 'Campaña 1', 'Campaña 2', 'Campaña 3', 'Campaña 4', 'Campaña 5', 'Campaña 6' ]}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Mes del año',
            legendOffset: 36
        }}
        axisLeft={{ 
            orient: 'left', 
            tickSize: 5, 
            tickPadding: 5, 
            tickRotation: 0, 
            legend: '', 
            legendOffset: -40 
        }}
        offsetType="silhouette"
        colors={{ scheme: 'nivo' }}
        fillOpacity={0.85}
        borderColor={{ theme: 'background' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#2c998f',
                size: 4,
                padding: 2,
                stagger: true
            },
            {
                id: 'squares',
                type: 'patternSquares',
                background: 'inherit',
                color: '#e4c912',
                size: 6,
                padding: 2,
                stagger: true
            }
        ]}
        fill={[
            {
                match: {
                    id: 'Campaña 5'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Campaña 3'
                },
                id: 'squares'
            }
        ]}
        dotSize={8}
        dotColor={{ from: 'color' }}
        dotBorderWidth={2}
        dotBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.7 ] ] }}
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                translateX: 100,
                itemsSpacing: 20,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#999999',
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000000'
                        }
                    }
                ]
            }
        ]}
    />
)

const data =
[
  {
    "Campaña 1": 133,
    "Campaña 2": 180,
    "Campaña 3": 114,
    "Campaña 4": 172,
    "Campaña 5": 55,
    "Campaña 6": 22
  },
  {
    "Campaña 1": 41,
    "Campaña 2": 71,
    "Campaña 3": 174,
    "Campaña 4": 54,
    "Campaña 5": 25,
    "Campaña 6": 108
  },
  {
    "Campaña 1": 198,
    "Campaña 2": 178,
    "Campaña 3": 178,
    "Campaña 4": 197,
    "Campaña 5": 178,
    "Campaña 6": 52
  },
  {
    "Campaña 1": 128,
    "Campaña 2": 136,
    "Campaña 3": 172,
    "Campaña 4": 122,
    "Campaña 5": 156,
    "Campaña 6": 172
  },
  {
    "Campaña 1": 179,
    "Campaña 2": 19,
    "Campaña 3": 93,
    "Campaña 4": 103,
    "Campaña 5": 27,
    "Campaña 6": 121
  },
  {
    "Campaña 1": 117,
    "Campaña 2": 196,
    "Campaña 3": 169,
    "Campaña 4": 21,
    "Campaña 5": 102,
    "Campaña 6": 51
  },
  {
    "Campaña 1": 175,
    "Campaña 2": 47,
    "Campaña 3": 109,
    "Campaña 4": 47,
    "Campaña 5": 177,
    "Campaña 6": 153
  },
  {
    "Campaña 1": 108,
    "Campaña 2": 173,
    "Campaña 3": 116,
    "Campaña 4": 30,
    "Campaña 5": 185,
    "Campaña 6": 112
  },
  {
    "Campaña 1": 159,
    "Campaña 2": 54,
    "Campaña 3": 47,
    "Campaña 4": 83,
    "Campaña 5": 46,
    "Campaña 6": 198
  },
  {
    "Campaña 1": 159,
    "Campaña 2": 54,
    "Campaña 3": 47,
    "Campaña 4": 83,
    "Campaña 5": 46,
    "Campaña 6": 198
  },
  {
    "Campaña 1": 133,
    "Campaña 2": 180,
    "Campaña 3": 114,
    "Campaña 4": 172,
    "Campaña 5": 55,
    "Campaña 6": 22
  },
  {
    "Campaña 1": 159,
    "Campaña 2": 54,
    "Campaña 3": 47,
    "Campaña 4": 83,
    "Campaña 5": 46,
    "Campaña 6": 198
  },
  {
    "Campaña 1": 41,
    "Campaña 2": 71,
    "Campaña 3": 174,
    "Campaña 4": 54,
    "Campaña 5": 25,
    "Campaña 6": 108
  }
]