import React from 'react';
import { warrantyBadge, fastShipping } from '@/assets/images/ui';
import { useCartStore } from '@/store/useCartStore';
import { camerasList, plansList, sensorsList, accessoriesList } from '@/data/catalogSelectors';
import { ItemCategory } from '@/types';
import { ReviewItemLine } from './ReviewItemLine';
const allProducts = [...camerasList, ...plansList, ...sensorsList, ...accessoriesList];

export const ReviewPanel = () => {
   const cart = useCartStore((state) => state.cart);
   const updateQuantity = useCartStore((state) => state.updateQuantity);

   const hydratedCart = cart.map(cartItem => {
      const product = allProducts.find(p => p.id === cartItem.productId);
      return { ...cartItem, product };
   }).filter(item => item.product !== undefined);

   const cameras = hydratedCart.filter(item => item.product?.category === ItemCategory.CAMERA);
   const sensors = hydratedCart.filter(item => item.product?.category === ItemCategory.SENSOR);
   const accessories = hydratedCart.filter(item => item.product?.category === ItemCategory.ACCESSORY);
   const plans = hydratedCart.filter(item => item.product?.category === ItemCategory.PLAN);

   let currentTotal = 0;
   let originalTotal = 0;

   hydratedCart.forEach(({ quantity, product }) => {
      const multiplier = product?.category === ItemCategory.PLAN ? 1 : quantity;
      currentTotal += (product!.price * multiplier);
      originalTotal += ((product!.originalPrice || product!.price) * multiplier);
   });

   const totalSavings = originalTotal - currentTotal;
   const hasItems = hydratedCart.length > 0;

   return (
      <div className="w-full bg-[#EDF4FF] pt-[15px] pb-[31px] rounded-[10px] flex flex-col gap-[5px] sticky top-6">
         <p className='px-[15px] font-medium text-[12px] leading-none tracking-[1.6px] text-[#484848] uppercase md:hidden lg:block'>Review</p>
         <div className='pt-[20px] px-[20px]'>
            <div className='pb-[10px] flex flex-col gap-[10px]'>
               <div className="flex flex-col gap-[5px]">
                  <p className="text-[22px] font-semibold text-neutral-text leading-none tracking-[0.6px] align-middle">Your security system</p>
                  <p className="text-neutral-text/75 text-[14px] leading-[130%] font-medium align-middle tracking-[0.6px]">
                     Review your personalized protection system designed to keep what matters most safe.
                  </p>
               </div>

               {!hasItems ? (
                  <div className="text-neutral-text/75 py-8 text-center text-[14px] leading-[130%] font-medium align-middle tracking-[0.6px]">
                     Empty!. Start by choosing your cameras.
                  </div>
               ) : (
                  <div className='flex flex-col xl:flex-col md:flex-row md:gap-[52px] md:justify-between md:items-start'>
                     <div className="flex flex-col gap-[10px] flex-1">

                        {cameras.length > 0 && (
                           <div className='pt-[15px] flex flex-col gap-[8px] border-t-[1px] border-t-[#CED6DE]'>
                              <h3 className="text-[12px] font-normal text-[#A8B2BD] uppercase leading-[16px] tracking-[3%] align-middle">Cameras</h3>
                              <div className="flex flex-col gap-[12px]">
                                 {cameras.map((item, idx) => (
                                    <ReviewItemLine
                                       key={`${item.productId}-${item.selectedColor}-${idx}`}
                                       name={item.product!.name}
                                       image={item.product!.image}
                                       price={item.product!.price}
                                       originalPrice={item.product!.originalPrice}
                                       quantity={item.quantity}
                                       selectedColor={item.selectedColor}
                                       onUpdateQuantity={(newQty) => updateQuantity(item.productId, newQty, item.selectedColor)}
                                    />
                                 ))}
                              </div>
                           </div>
                        )}

                        {sensors.length > 0 && (
                           <div>
                              <div className='pt-[15px] flex flex-col gap-[8px] border-t-[1px] border-t-[#CED6DE]'>
                                 <h3 className="text-[12px] font-normal text-[#A8B2BD] uppercase leading-[16px] tracking-[3%] align-middle">Sensors</h3>
                                 <div className="flex flex-col gap-[12px]">
                                    {sensors.map((item, idx) => (
                                       <ReviewItemLine
                                          key={`${item.productId}-${item.selectedColor}-${idx}`}
                                          name={item.product!.name}
                                          image={item.product!.image}
                                          price={item.product!.price}
                                          originalPrice={item.product!.originalPrice}
                                          quantity={item.quantity}
                                          selectedColor={item.selectedColor}
                                          onUpdateQuantity={(newQty) => updateQuantity(item.productId, newQty, item.selectedColor)}
                                       />
                                    ))}
                                 </div>
                              </div>
                           </div>
                        )}

                        {accessories.length > 0 && (
                           <div className='pt-[15px] flex flex-col gap-[8px] border-t-[1px] border-t-[#CED6DE]'>
                              <h3 className="text-[12px] font-normal text-[#A8B2BD] uppercase leading-[16px] tracking-[3%] align-middle">Accessories</h3>
                              <div className="flex flex-col gap-[12px]">
                                 {accessories.map((item, idx) => (
                                    <ReviewItemLine
                                       key={`${item.productId}-${item.selectedColor}-${idx}`}
                                       name={item.product!.name}
                                       image={item.product!.image}
                                       price={item.product!.price}
                                       originalPrice={item.product!.originalPrice}
                                       quantity={item.quantity}
                                       selectedColor={item.selectedColor}
                                       onUpdateQuantity={(newQty) => updateQuantity(item.productId, newQty, item.selectedColor)}
                                    />
                                 ))}
                              </div>
                           </div>
                        )}

                        {plans.length > 0 && (
                           <div className='pt-[15px] flex flex-col gap-[8px] border-t-[1px] border-t-[#CED6DE]'>
                              <h3 className="text-[12px] font-normal text-[#A8B2BD] uppercase leading-[16px] tracking-[3%] align-middle">Plans</h3>
                              <div className="flex flex-col gap-[12px]">
                                 {plans.map((item, idx) => (
                                    <ReviewItemLine
                                       key={`${item.productId}-${idx}`}
                                       name={item.product!.name}
                                       image={item.product!.image}
                                       price={item.product!.price}
                                       originalPrice={item.product!.originalPrice}
                                       quantity={1}
                                       hideStepper={true}
                                    // billingCycle={(item.product as any).billingCycle}
                                    />
                                 ))}
                              </div>
                           </div>
                        )}

                        <div className="pt-[15px] flex flex-col gap-[8px] border-t-[1px] border-t-[#CED6DE]">
                           <div className="flex items-center justify-between gap-[16px]">
                              <div className="w-[41px] h-[41px] flex-shrink-0 flex items-center justify-center rounded-[5px] bg-white">
                                 <img
                                    src={fastShipping}
                                    alt="Fast Shipping"
                                    className="w-full h-full object-contain"
                                 />
                              </div>

                              <p className='font-medium text-[14px] text-[#0B0D10] leading-tight flex-1'>Fast Shipping</p>

                              <div className="text-right">
                                 <div className="text-[14px] font-medium leading-[16px] tracking-[0.5%] line-through text-[#6F7882]">$5.99</div>
                                 <div className="text-[14px] font-semibold leading-[16px] tracking-[0.5%] text-[#4E2FD2]">FREE</div>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>
               )}

            </div>
            <div className='flex flex-col gap-[8px] justify-start'>
               <div>
                  <div className='flex items-center md:items-start md:flex-col xl:flex-row'>
                     {/* IMAGE AND CONTENT */}
                     <div className='flex gap-[25px] items-center'>
                        <div className='md:w-[131px] md:h-[131px] w-[78px] h-[78px] xl:w-[78px] xl:h-[78px] flex-shrink-0'>
                           <img src={warrantyBadge} alt="100% Satisfaction Guarantee Badge" className='w-full h-full object-contain' />
                        </div>
                        <div className='text-[#1F1F1F] hidden md:block xl:hidden'>
                           <p className='mb-2'>30-day hassle-free returns</p>
                           <p className='font-normal'>If you're not totally in love with the product, we will refund you 100%.</p>
                        </div>
                     </div>

                     <div className="w-full flex flex-col items-end md:flex-row xl:flex-col md:justify-between md:items-center xl:items-end">
                        <div className="py-[5px] px-[8px] bg-[#4E2FD2] rounded-[3px] font-medium text-[12px] text-white leading-none tracking-[-5%]">as low as $19.19/mo</div>
                        <div className="flex items-center gap-[8px]">
                           {totalSavings > 0 && (
                              <div className="text-[22px] font-medium leading-[20px] tracking-[0.25%] line-through text-[#6F7882]">
                                 ${originalTotal.toFixed(2)}
                              </div>
                           )}
                           <div className="text-brand font-bold text-[28px] leading-[32px] align-middle text-right">
                              ${currentTotal.toFixed(2)}
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className='pt-[10px] flex flex-col gap-1'>
                     {totalSavings > 0 && (
                        <div className="text-center text-[#0AA288] font-semibold text-[14px] leading-none tracking-[-0.06px] align-middle">
                           Congrats! You're saving ${totalSavings.toFixed(2)} on your security bundle!
                        </div>
                     )}

                     <button className="w-full bg-brand py-[13px] px-[16px] rounded-[4px] text-white font-bold text-[17px] leading-none tracking-[0px] text-center align-middle hover:bg-opacity-90 transition-all">
                        Checkout
                     </button>
                  </div>
               </div>
               <button className="w-full italic underline font-normal align-middle leading-[120%] text-[14px] tracking-[-0.02px] text-[#484848]">
                  Save my system for later
               </button>
            </div>
         </div>
      </div>
   );
};