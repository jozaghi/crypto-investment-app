import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import PriceChart from '../components/PriceChart';
import io from 'socket.io-client';
import { resetPriceFeed, updatePriceFeed } from '../store/coinLivePriceSlice';

const LivePricePage = ({ route, navigation }) => {
  const { coinId, coinName } = route.params;
  navigation.setOptions({ title: `${coinName} Live Price Feed` });
  const dispatch = useDispatch();
  useEffect(() => {
    const socket = io('http://localhost:5000');
    socket.on('connect', (s) => {
      console.log(socket.id);
      socket.emit('join', { room: coinId });
      socket.on('feed', (data) => {
        const dataObj = JSON.parse(data);
        dispatch(
          updatePriceFeed({
            lastUdatedAt: new Date(dataObj.date),
            latestPrice: dataObj.currentPrice,
          })
        );
      });
    });
    return () => {
      socket.emit('leave', { room: coinId });
      socket.disconnect();
      dispatch(resetPriceFeed());
    };
  }, []);

  const { latestPrice, lastUpdateAt, priceHistory } = useSelector(
    (state) => state.coinLivePrice
  );

  const loading = () => <Text>Loading...</Text>;

  const priceLiveFeed = () => (
    <View>
      <Text style={styles.priceLabel}>
        Latest price: ${parseFloat(latestPrice).toFixed(2)}
      </Text>
      <Text style={styles.timeLabel}>
        Last updated at: {lastUpdateAt.toString()}
      </Text>
      <PriceChart labels={[]} data={priceHistory} />
    </View>
  );

  return (
    <View style={styles.container}>
      {latestPrice == 0 ? loading() : priceLiveFeed()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  priceLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  timeLabel: {
    fontSize: 16,
  },
});

export default LivePricePage;
