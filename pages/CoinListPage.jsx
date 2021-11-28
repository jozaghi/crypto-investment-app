import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import CoinInfoListItem from '../components/CoinInfoListItem';
import { getCoins } from '../store/coinListSlice';

const CoinListPage = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoins());
  }, []);

  const { coins } = useSelector((state) => state.coinList);
  const handleOnCoinSelected = (coinId, coinName) => {
    navigation.navigate('Live Feed', { coinId, coinName });
  };
  return (
    <SafeAreaView>
      <FlatList
        style={styles.listContainer}
        data={coins}
        renderItem={(coin) => (
          <CoinInfoListItem
            coin={coin}
            onPress={() => handleOnCoinSelected(coin.item.id, coin.item.name)}
          />
        )}
        keyExtractor={(coin) => coin.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    margin: 20,
  },
});

export default CoinListPage;
