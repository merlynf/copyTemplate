import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';

export default function PhotoSlider() {
  return (
    <Carousel withIndicators height={200} className='text-center'>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}