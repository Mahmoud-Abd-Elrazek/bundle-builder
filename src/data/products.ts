import { Product } from '@/types';
import {
   camV4,
   camPanV3,
   camFloodlight,
   camDoorbell,
   camBatteryPro,
   camV4White,
   camV4Black,
   camV4Gray,
   camPanV3White,
   camPanV3Black,
   camFloodlightWhite,
   camFloodlightBlack,
   camBatterywhite,
   camBatteryBlack
} from '@/assets/images/cameras';

export const productsList: Product[] = [
   {
      id: 'wyze-cam-v4',
      name: 'Wyze Cam v4',
      description: 'The clearest Wyze Cam ever made.',
      image: camV4,
      price: 27.98,
      originalPrice: 35.98,
      badge: 'Save 22%',
      colors: [
         { name: 'White', hex: '#FFFFFF', imageUrl: camV4White },
         { name: 'Grey', hex: '#E5E7EB', imageUrl: camV4Gray },
         { name: 'Black', hex: '#111827', imageUrl: camV4Black }
      ]
   },
   {
      id: 'wyze-cam-pan-v3',
      name: 'Wyze Cam Pan v3',
      description: '360° pan and 180° tilt security camera.',
      image: camPanV3,
      price: 34.98,
      originalPrice: 39.98,
      badge: 'Save 12%',
      colors: [
         { name: 'White', hex: '#FFFFFF', imageUrl: camPanV3White },
         { name: 'Black', hex: '#111827', imageUrl: camPanV3Black }
      ]
   },
   {
      id: 'wyze-cam-floodlight-v2',
      name: 'Wyze Cam Floodlight v2',
      description: '2K floodlight camera with a 160° wide-angle view for your garage.',
      image: camFloodlight,
      price: 69.98,
      originalPrice: 89.98,
      badge: 'Save 22%',
      colors: [
         { name: 'White', hex: '#FFFFFF', imageUrl: camFloodlightWhite },
         { name: 'Black', hex: '#111827', imageUrl: camFloodlightBlack }
      ]
   },
   {
      id: 'wyze-duo-cam-doorbell',
      name: 'Wyze Duo Cam Doorbell',
      description: 'Two cameras. Two views. Double the porch protection.',
      image: camDoorbell,
      price: 69.98
   },
   {
      id: 'wyze-battery-cam-pro',
      name: 'Wyze Battery Cam Pro',
      description: 'Protect anywhere. See everything in 2.5K HDR.',
      image: camBatteryPro,
      price: 89.98,
      colors: [
         { name: 'White', hex: '#FFFFFF', imageUrl: camBatterywhite },
         { name: 'Black', hex: '#111827', imageUrl: camBatteryBlack }
      ]
   }
];