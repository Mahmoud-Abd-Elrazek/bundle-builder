import React, { useState } from 'react';
import { Camera, Shield, Radio, Layers } from 'lucide-react';
import { CameraCard } from '@/components/cards/CameraCard';
import { PlanCard } from '@/components/cards/PlanCard';
import { SensorCard } from '@/components/cards/SensorCard';
import { AccessoryCard } from '@/components/cards/AccessoryCard';
import { AccordionStep } from './AccordionStep';
import { camerasList, plansList, sensorsList, accessoriesList } from '@/data/catalogSelectors';
// 1. استدعاء الستور
import { useCartStore } from '@/store/useCartStore'; 

export const BuilderAccordion = () => {
   const [openStep, setOpenStep] = useState(1);

   // 2. نجيب السلة من الستور
   const cart = useCartStore((state) => state.cart);

   // 3. نحسب العدد لكل قسم بناءً على المنتجات اللي في السلة
   const camerasCount = cart.filter(cartItem => 
      camerasList.some(cam => cam.id === cartItem.productId)
   ).length;

   const plansCount = cart.filter(cartItem => 
      plansList.some(plan => plan.id === cartItem.productId)
   ).length;

   const sensorsCount = cart.filter(cartItem => 
      sensorsList.some(sensor => sensor.id === cartItem.productId)
   ).length;

   const accessoriesCount = cart.filter(cartItem => 
      accessoriesList.some(acc => acc.id === cartItem.productId)
   ).length;

   return (
      <div className="w-full bg-[#F8F9FB] p-4 sm:p-8 rounded-xl">

         <AccordionStep
            stepNumber={1}
            totalSteps={4}
            title="Choose your cameras"
            icon={<Camera size={24} />}
            isOpen={openStep === 1}
            onToggle={() => setOpenStep(openStep === 1 ? 0 : 1)}
            selectedCount={camerasCount} // 👈 ربطنا العداد هنا
            nextStepTitle="Choose your plan"
            onNext={() => setOpenStep(2)}
         >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
               {camerasList.map(camera => (
                  <CameraCard key={camera.id} camera={camera as any} />
               ))}
            </div>
         </AccordionStep>


         <AccordionStep
            stepNumber={2}
            totalSteps={4}
            title="Choose your plan"
            icon={<Shield size={24} />}
            isOpen={openStep === 2}
            onToggle={() => setOpenStep(openStep === 2 ? 0 : 2)}
            selectedCount={plansCount} // 👈 ربطنا العداد هنا
            nextStepTitle="Choose your sensors"
            onNext={() => setOpenStep(3)}
         >
            <div className="flex flex-col gap-4">
               {plansList.map(plan => (
                  <PlanCard key={plan.id} plan={plan as any} />
               ))}
            </div>
         </AccordionStep>


         <AccordionStep
            stepNumber={3}
            totalSteps={4}
            title="Choose your sensors"
            icon={<Radio size={24} />}
            isOpen={openStep === 3}
            onToggle={() => setOpenStep(openStep === 3 ? 0 : 3)}
            selectedCount={sensorsCount} // 👈 ربطنا العداد هنا
            nextStepTitle="Add extra protection"
            onNext={() => setOpenStep(4)}
         >
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
               {sensorsList.map(sensor => (
                  <SensorCard key={sensor.id} sensor={sensor as any} />
               ))}
            </div>
         </AccordionStep>


         <AccordionStep
            stepNumber={4}
            totalSteps={4}
            title="Add extra protection"
            icon={<Layers size={24} />}
            isOpen={openStep === 4}
            onToggle={() => setOpenStep(openStep === 4 ? 0 : 4)}
            selectedCount={accessoriesCount} // 👈 ربطنا العداد هنا
         >
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
               {accessoriesList.map(accessory => (
                  <AccessoryCard key={accessory.id} accessory={accessory as any} />
               ))}
            </div>
         </AccordionStep>

      </div>
   );
};