import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Images from '../resources/Images';
import {SCREEN_WIDTH} from '../utils/Constant';

type Props = {};

const Discover = (props: Props) => {
  const [pressedIndex, setPressedIndex] = useState(null);

  const onPressInHandler = (index: any) => {
    setPressedIndex(index);
  };

  const onPressOutHandler = () => {
    setPressedIndex(null);
  };

  const tabData = [
    {
      icon: Images.magnifying_glass,
      name: 'Fırsat Bul',
    },
    {
      icon: Images.burger_king,
      name: 'Burger King',
    },
    {
      icon: Images.trendyol,
      name: 'Trendyol',
    },
    {
      icon: Images.sprite,
      name: 'Sprite',
    },
  ];

  return (
    <SafeAreaView>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: 15,
          marginLeft: 15,
          marginBottom: 20,
        }}>
        <Image source={Images.daha_daha} style={{width: 81, height: 40}} />
        <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              backgroundColor: '#F40000',
              width: 91,
              height: 40,
              borderRadius: 80,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 12,
                fontWeight: '600',
                lineHeight: 13.8,
              }}>
              Giriş Yap
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              backgroundColor: '#1D1E1C',
              width: 40,
              height: 40,
              borderRadius: 80,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={Images.profile_icon}
              style={{width: 16, height: 17}}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={{marginRight: 15, marginLeft: 15, marginBottom: 20}}
        showsHorizontalScrollIndicator={false}
        horizontal>
        {tabData.map((item: any, index: number) => {
          return (
            <TouchableOpacity
              style={{
                display: 'flex',
                flexDirection: 'row',
                padding: 6,
                borderWidth: 1.5,
                borderRadius: 12,
                borderColor: pressedIndex === index ? '#F40000' : '#ECEEEF',
                marginRight: 5,
              }}
              onPressIn={() => onPressInHandler(index)}
              onPressOut={() => onPressOutHandler}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 12,
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={item.icon} style={{width: 40, height: 40}} />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    lineHeight: 13.8,
                  }}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discover;
