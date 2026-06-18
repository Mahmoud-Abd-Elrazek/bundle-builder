import { CatalogItem, ItemCategory } from '@/types';
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

import { motionSensor, hubSensor } from '@/assets/images/sensors';
import { microSd } from '@/assets/images/accessories';

export const catalogData: CatalogItem[] = [
   // ============== CAMERAS ==============
   {
      id: 'wyze-cam-v4',
      category: ItemCategory.CAMERA,
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
      category: ItemCategory.CAMERA,
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
      category: ItemCategory.CAMERA,
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
      category: ItemCategory.CAMERA,
      name: 'Wyze Duo Cam Doorbell',
      description: 'Two cameras. Two views. Double the porch protection.',
      image: camDoorbell,
      price: 69.98
   },
   {
      id: 'wyze-battery-cam-pro',
      category: ItemCategory.CAMERA,
      name: 'Wyze Battery Cam Pro',
      description: 'Protect anywhere. See everything in 2.5K HDR.',
      image: camBatteryPro,
      price: 89.98,
      colors: [
         { name: 'White', hex: '#FFFFFF', imageUrl: camBatterywhite },
         { name: 'Black', hex: '#111827', imageUrl: camBatteryBlack }
      ]
   },

   // ============== SENSORS ==============
   {
      id: 'wyze-sense-motion-sensor',
      category: ItemCategory.SENSOR,
      name: 'Wyze Sense Motion Sensor',
      description: 'Detects motion inside your home.',
      image: motionSensor,
      price: 59.98,
      colors: [
         { name: 'White', hex: '#FFFFFF', imageUrl: '' },
         { name: 'Grey', hex: '#E5E7EB', imageUrl: '' },
         { name: 'Black', hex: '#111827', imageUrl: '' }
      ]
   },
   {
      id: 'wyze-sense-hub',
      category: ItemCategory.SENSOR,
      name: 'Wyze Sense Hub (Required)',
      description: 'The central brain of your security system.',
      image: hubSensor,
      price: 0,
      originalPrice: 29.98,
      isRequired: true
   },

   // ============== ACCESSORIES ==============
   {
      id: 'wyze-microsd-256gb',
      category: ItemCategory.ACCESSORY,
      name: 'Wyze MicroSD Card (256GB)',
      description: 'Local storage for continuous recording.',
      image: microSd,
      price: 41.96,
      colors: [
         { name: 'White', hex: '#FFFFFF', imageUrl: '' },
         { name: 'Black', hex: '#111827', imageUrl: '' }
      ]
   },

   // ============== PLANS ==============
   {
      id: 'cam-unlimited',
      category: ItemCategory.PLAN,
      name: 'Cam Unlimited',
      description: 'Unlimited active cameras with cloud recording.',
      image: 'https://cdn-icons-png.flaticon.com/512/1161/1161388.png', // temp image for the time being
      price: 9.99,
      originalPrice: 12.99,
      billingCycle: 'mo'
   },
   {
      id: 'cam-unlimited-annual',
      category: ItemCategory.PLAN,
      name: 'Cam Unlimited (Annual)',
      description: 'Get 2 months free! Unlimited active cameras with cloud recording, billed annually.',
      image: 'https://cdn-icons-png.flaticon.com/512/1161/1161388.png',
      price: 99.00,
      originalPrice: 155.88,
      billingCycle: 'yr',
      badge: 'Save 40%'
   },
   {
      id: 'cam-plus-single',
      category: ItemCategory.PLAN,
      name: 'Cam Plus (Single)',
      description: 'Advanced AI detection and cloud recording for a single camera.',
      image: 'https://cdn-icons-png.flaticon.com/512/836/836069.png',
      price: 2.99,
      billingCycle: 'mo'
   }

];