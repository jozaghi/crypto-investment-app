import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CoinInfoListItem = (props) => {
  const coin = props.coin.item;
  console.log(props);
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.listItem}>
        <View style={styles.iconContainer}>
          <Image
            source={{ uri: coin.icon }}
            fadeDuration={300}
            resizeMode="cover"
            style={styles.icon}
          />
        </View>
        <View style={styles.infoCointainer}>
          <View style={styles.coinNameContainer}>
            <Text style={styles.coinNameText}>{coin.name}</Text>
          </View>
          <View>
            <Text style={styles.coinSymbolText}>{coin.symbol}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 5,
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    borderRadius: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    overflow: 'hidden',
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  infoCointainer: {
    flex: 1,
    marginLeft: 10,
  },
  coinNameContainer: {
    marginBottom: 2,
  },
  coinNameText: {
    fontSize: 18,
  },
  coinSymbolText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CoinInfoListItem;
