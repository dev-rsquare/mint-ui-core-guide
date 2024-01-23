import { LineChart, SeriesType } from '@mint-ui/core';
import React from 'react';

import { Frame } from '../common/Frame';

export function LineChartBasic() {
  return <Frame>
    <LineChart
    height={400}
    data={[
      {time:2011, a:100, b:23, c:12, d:58},
      {time:2012, a:40, b:45, c:32, d:43},
      {time:2013, a:30, b:73, c:52, d:78},
      {time:2014, a:70, b:21, c:62, d:12},
      {time:2015, a:90, b:12, c:69, d:99},
    ]}
    seriesConfig={{
      keyX:'time',
      minValue: 0,
      maxValue: 100,
    }}
    series={[
      {type:'Fill', keyY:'d', lineStyle: { stroke: 'lightgreen', opacity:0.4, strokeWidth: 3 }},
      {type:'Point', keyY:'a', pointStyle: { fill: 'orange', pointSize: 5 },},
      {type:'PointAndLine', keyY:'b', pointStyle: { fill: 'red', pointSize: 3 }, lineStyle: { stroke: '#D97D4A', strokeWidth: 3 }},
      {type:'PointAndLine', keyY:'c', pointStyle: { fill: 'black', pointSize: 4 }, lineStyle: { stroke: 'blue', strokeWidth: 3 }},
    ]}
    />
  </Frame>
}

export function LineChartSamples({type}:{type:SeriesType}) {
  return <Frame>
    <LineChart
    height={300}
    data={[
      {time:2011, a:100, b:23, c:12, d:58},
      {time:2012, a:40, b:45, c:32, d:43},
      {time:2013, a:30, b:73, c:52, d:78},
      {time:2014, a:70, b:21, c:62, d:12},
      {time:2015, a:90, b:12, c:69, d:99},
    ]}
    seriesConfig={{
      keyX:'time',
      minValue: 0,
      maxValue: 100,
    }}
    series={[
      {
        type, 
        keyY:'b', 
        pointStyle: { 
          fill: 'red', pointSize: 4
        },
        lineStyle: {
          animationLength:1, fill:type==='Fill'||type==='PointAndFill'?'orange':'none', stroke: 'orange', strokeWidth: 2, fillOpacity: 0.4
        }
      },
    ]}
    />
  </Frame>
}