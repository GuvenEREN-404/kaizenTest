import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Carousel, {CarouselProps, Pagination} from 'react-native-snap-carousel';
import {
  SCREEN_WIDTH,
  responsiveHeight,
  responsiveWidth,
} from '../utils/Constant';
import Images from '../resources/Images';

export const SLIDER_WIDTH = Dimensions.get('window').width + 70;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.73);

interface Item {
  title: string;
  body: string;
  imgUrl: any;
  body_color: string;
  mini_imgUrl: any;
}

interface Props{
    navigation:any
}
const MyCarousel: React.FC<Props> = (props:Props) => {
  const carouselRef = useRef<Carousel<Item>>(null);
  const [index, setIndex] = useState(0);
  const data: Item[] = [
    {
      title: '2,5 LT Sprite kapakları 330 ML Kutu kazandırıyor!',
      body: 'Daha Daha',
      body_color: 'green',
      imgUrl: Images.sprite_carousel,
      mini_imgUrl: Images.sprite_mini,
    },
    {
      title: '2,5 LT Coca-Cola kapakları Coca-Cola +Coffee kazandırıyor!',
      body: 'Daha Daha',
      body_color: 'red',
      imgUrl: Images.coca_cola,
      mini_imgUrl: Images.coca_cola_mini,
    },
    {
      title: '2,5 LT Sprite kapakları 330 ML Kutu kazandırıyor!',
      body: 'Daha Daha',
      body_color: 'green',
      imgUrl: Images.sprite_carousel,
      mini_imgUrl: Images.sprite_mini,
    },
  ];

  const renderItem = ({item, index}: {item: Item; index: number}) => {
    return (
      <>
        <View style={styles.container} key={index}>
          <Image source={item.imgUrl} style={styles.image} />
          <View style={styles.mini_img_container}>
            <Image source={item.mini_imgUrl} style={styles.mini_image} />
            <View style={styles.mini_img_view}>
              <Text style={styles.mini_img_text}>son 12 gün</Text>
            </View>
          </View>
          <View style={styles.header_container}>
            <Text style={styles.header}>{item.title}</Text>
          </View>
          <TouchableOpacity onPress={()=>{
             props.navigation.navigate('DetailScreen')
          }}>
            <Text style={{color: item.body_color, ...styles.body}}>
              {item.body}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: item.body_color,
            width: ITEM_WIDTH - 2,
            top: -60,
            height: 80,
            borderBottomLeftRadius: 28,
            borderBottomRightRadius: 20,
            transform: [{rotate: '2.5deg'}],
            zIndex: -5,
          }}
        />
      </>
    );
  };

  const sliderWidth = SCREEN_WIDTH;
  const itemWidth = ITEM_WIDTH;

  return (
    <View>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        onSnapToItem={idx => setIndex(idx)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={carouselRef}
        renderDots={activeIndex => (
          <View style={styles.paginationContainer}>
            {data.map((_, i) => (
              <View
                key={i}
                style={[
                  styles.paginationDot,
                  i === activeIndex ? styles.activeDot : styles.inactiveDot,
                ]}
              />
            ))}
          </View>
        )}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: ITEM_WIDTH,
    paddingBottom: 25,
    padding: 5,
    display: 'flex',
    position: 'relative',
    zIndex: 5,
  },
  mini_img_container: {
    paddingLeft: 5,
    paddingRight: 15,
    top: responsiveHeight(220),
    width: responsiveWidth(320),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
  },
  mini_img_view: {
    display: 'flex',
    backgroundColor: '#1D1E1C',
    width: responsiveWidth(97),
    height: responsiveHeight(32),
    borderRadius: 27,
  },
  mini_img_text: {
    fontSize: 15,
    color: 'white',
    lineHeight: 17.25,
    textAlign: 'center',
    marginTop: responsiveHeight(7),
  },
  image: {
    width: ITEM_WIDTH - 15,
    height: responsiveHeight(277),
    marginTop: 2,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 16,
  },
  mini_image: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },
  header_container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    color: '#1D1E1C',
    fontSize: 14,
    fontWeight: '700',
    paddingLeft: 20,
    width: responsiveWidth(245),
    paddingTop: 20,
    textAlign: 'center',
  },
  body: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16,
    textAlign: 'center',
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: '#F40000',
  },
  activeDot: {
    backgroundColor: 'red',
  },
  inactiveDot: {
    backgroundColor: 'lightgray',
  },
});

export default MyCarousel;
