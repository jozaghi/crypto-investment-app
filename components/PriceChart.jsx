import React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const PriceChart = (props) => {
  return (
    <View>
      <LineChart
        data={{
          labels: props.labels,
          datasets: [
            {
              data: props.data,
            },
          ],
        }}
        width={Dimensions.get('window').width - 40}
        height={300}
        yAxisLabel="$"
        yAxisSuffix=""
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: '#000000',
          backgroundGradientFrom: '#FFFFFF',
          backgroundGradientTo: '#FFFFFF',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '1',
            strokeWidth: '1',
            stroke: 'gray',
          },
        }}
        bezier
        style={{
          marginVertical: 10,
          borderRadius: 5,
        }}
      />
    </View>
  );
};

export default PriceChart;
