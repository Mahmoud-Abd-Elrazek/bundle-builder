import React, { useMemo, useState } from 'react';
import { Camera, Shield, Radio, Layers } from 'lucide-react';
import { CameraCard } from '@/components/cards/CameraCard';
import { PlanCard } from '@/components/cards/PlanCard';
import { SensorCard } from '@/components/cards/SensorCard';
import { AccessoryCard } from '@/components/cards/AccessoryCard';
import { AccordionStep } from './AccordionStep';
import { camerasList, plansList, sensorsList, accessoriesList } from '@/data/catalogSelectors';

import { useCartStore } from '@/store/useCartStore';

const generalStepStyleParent = 'flex flex-wrap justify-center gap-[15px] items-stretch';
const generalStepStyleChild = 'flex-grow flex-shrink-0 basis-[350px] max-w-[420px] flex';

export const BuilderAccordion = () => {
   const [openStep, setOpenStep] = useState(1);

   const cart = useCartStore((state) => state.cart);

   const camerasCount = useMemo(() => cart.filter(item => camerasList.some(cam => cam.id === item.productId)).length, [cart]);
   const plansCount = useMemo(() => cart.filter(item => plansList.some(plan => plan.id === item.productId)).length, [cart]);
   const sensorsCount = useMemo(() => cart.filter(item => sensorsList.some(sensor => sensor.id === item.productId)).length, [cart]);
   const accessoriesCount = useMemo(() => cart.filter(item => accessoriesList.some(acc => acc.id === item.productId)).length, [cart]);


   return (
      <div className="w-full flex flex-col gap-[13px]">

         <AccordionStep
            stepNumber={1}
            totalSteps={4}
            title="Choose your cameras"
            icon={<Camera size={24} />}
            isOpen={openStep === 1}
            onToggle={() => setOpenStep(openStep === 1 ? 0 : 1)}
            selectedCount={camerasCount}
            nextStepTitle="Choose your plan"
            onNext={() => setOpenStep(2)}
         >
            <div className={generalStepStyleParent}>
               {camerasList.map(camera => (
                  <div
                     key={camera.id}
                     className={generalStepStyleChild}
                  >
                     <CameraCard camera={camera as any} />
                  </div>
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
            selectedCount={plansCount}
            nextStepTitle="Choose your sensors"
            onNext={() => setOpenStep(3)}
         >
            <div className={generalStepStyleParent}>
               {plansList.map(plan => (
                  <div
                     key={plan.id}
                     className={generalStepStyleChild}
                  >
                     <PlanCard plan={plan as any} />
                  </div>
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
            selectedCount={sensorsCount}
            nextStepTitle="Add extra protection"
            onNext={() => setOpenStep(4)}
         >
            <div className={generalStepStyleParent}>
               {sensorsList.map(sensor => (
                  <div
                     key={sensor.id}
                     className={generalStepStyleChild}
                  >
                     <SensorCard sensor={sensor as any} />
                  </div>
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
            selectedCount={accessoriesCount}
         >
            <div className={generalStepStyleParent}>
               {accessoriesList.map(accessory => (
                  <div
                     key={accessory.id}
                     className={generalStepStyleChild}
                  >
                     <AccessoryCard accessory={accessory as any} />
                  </div>
               ))}
            </div>
         </AccordionStep>

      </div>
   );
};