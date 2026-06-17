import { Product } from '@/types';
import { camV4, camPanV3, camFloodlight, camDoorbell, camBatteryPro } from '@/assets/images/cameras'
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
         { name: 'White', hex: '#FFFFFF' },
         { name: 'Grey', hex: '#E5E7EB' },
         { name: 'Black', hex: '#111827' }
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
         { name: 'White', hex: '#FFFFFF' },
         { name: 'Black', hex: '#111827' }
      ]
   },
   {
      id: 'wyze-cam-floodlight-v2',
      name: 'Wyze Cam Floodlight v2',
      description: '2K floodlight camera with a 160° wide-angle view.',
      image: camFloodlight,
      price: 69.98,
      originalPrice: 89.98,
      badge: 'Save 22%',
      colors: [
         { name: 'White', hex: '#FFFFFF' },
         { name: 'Black', hex: '#111827' }
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
         { name: 'White', hex: '#FFFFFF' },
         { name: 'Black', hex: '#111827' }
      ]
   }
];