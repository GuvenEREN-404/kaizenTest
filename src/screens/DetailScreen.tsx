import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';
import Images from '../resources/Images';
import {
  SCREEN_WIDTH,
  responsiveHeight,
  responsiveWidth,
} from '../utils/Constant';
import { useRoute } from '@react-navigation/native';
import { UseGetTagsById } from '../api/service';

type Props = {navigation: any;route: any;};

const DetailScreen = (props: Props) => {
  const route = useRoute();
  const { id } = route.params as { id: number };
  const { data: getTagsById } = UseGetTagsById(id)
  const regex = /(<([^>]+)>)/ig;
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={{position: 'relative'}}>
          <Image
            source={{uri:getTagsById?.ImageUrl}}
            style={{
              width: SCREEN_WIDTH,
              height: responsiveHeight(355),
              borderBottomLeftRadius: 100,
            }}
          />
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}
            style={{
              backgroundColor: '#1D1E1C',
              left: 15,
              top: 50,
              width: 40,
              height: 40,
              borderRadius: 80,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
            }}>
            <Image source={Images.backIcon} style={{width: 17, height: 13}} />
          </TouchableOpacity>
          <View style={{position: 'absolute', bottom: -10, right: 0}}>
            <View
              style={{
                paddingLeft: 5,
                paddingRight: 15,
                width: SCREEN_WIDTH,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                source={{uri:getTagsById?.BrandIconUrl}}
                style={{width: 65, height: 65, borderRadius: 50}}
              />
              <View
                style={{
                  display: 'flex',
                  backgroundColor: '#1D1E1C',
                  width: responsiveWidth(97),
                  height: responsiveHeight(32),
                  borderRadius: 27,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'white',
                    lineHeight: 17.25,
                    textAlign: 'center',
                    marginTop: responsiveHeight(7),
                  }}>
                  {getTagsById?.RemainingText}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{padding: 15}}>
          <Text
            style={{
              width: responsiveWidth(315),
              color: '#1D1E1C',
              fontSize: 26,
              lineHeight: 29,
              fontWeight: '700',
              marginBottom: 30,
            }}>
           {getTagsById?.Title.replace(regex,'')}
          </Text>

          <View style={{gap: 35}}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                lineHeight: 22,
                color: '#1D1E1C',
              }}>
             {getTagsById?.Description.replace(regex,'')}
            </Text>
          {/*   <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                lineHeight: 22,
                color: '#1D1E1C',
              }}>
              Kahve tiryakilerinin bir yudum ferahlık istediği anlarda tercihi
              olacak ürün, dünyada en çok yankı uyandıran kola edisyonları
              arasında yer almaktadır. İçeceğin soğuk tüketilmesi önerilir.
              Buzla beraber içilebilir. Özellikle sıcak yaz günlerinde
              ferahlatıcı etki gösterir.
            </Text> */}
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          paddingRight: 20,
          paddingLeft: 20,
          paddingBottom: Platform.OS == 'ios' ? 0 : 15,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#F40000',
            width: SCREEN_WIDTH * 0.9,

            height: 52,
            borderRadius: 80,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 14,
              fontWeight: '700',
              lineHeight: 16,
            }}>
            Hemen Katıl
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
