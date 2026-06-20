import React from 'react';
import { ChevronDown, Triangle } from 'lucide-react';

interface AccordionStepProps {
  stepNumber: number;
  totalSteps: number;
  title: string;
  icon: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  selectedCount: number;
  nextStepTitle?: string;
  onNext?: () => void;
  className?: string;
  children: React.ReactNode;
}

export const AccordionStep = ({
  stepNumber,
  totalSteps,
  title,
  icon,
  isOpen,
  onToggle,
  selectedCount,
  nextStepTitle,
  onNext,
  className,
  children
}: AccordionStepProps) => {
  return (
    <div className={`${stepNumber === 1 ? 'pt-[15px]' : ''} transition-all duration-300 ${isOpen ? 'bg-[#EDF4FF] pb-[15px]' : 'bg-white'} rounded-[10px] ${className}`}>

      <div className="px-[20px]">

        <div
          className="cursor-pointer group flex flex-col gap-[5px] pt-[15px]"
          onClick={onToggle}
        >
          <span className="text-[10px] font-medium leading-none text-[#484848] tracking-[1.6px] align-middle uppercase">
            Step {stepNumber} of {totalSteps}
          </span>

          <div className={`border-y-[0.5px] border-[#1F1F1F] flex justify-between items-center py-[20px] transition-colors duration-300 ${isOpen ? 'border-b-transparent ' : 'border-b-[#1F1F1F]'}`}>
            <div className="flex items-center gap-[8px]">
              <div className="text-neutral-muted w-[26px] h-[26px] group-hover:text-[#5E3BC0] transition-colors duration-300">
                {icon}
              </div>
              <p className="text-[22px] font-semibold text-[#0B0D10] leading-none tracking-[0px]">{title}</p>
            </div>

            <div className="flex items-center gap-[4px]">
              {selectedCount > 0 && (
                <span className="text-[14px] font-medium text-[#4E2FD2] leading-[16px] tracking-[0px] text-center">
                  {selectedCount} selected
                </span>
              )}

              <div className={`text-[#5E3BC0] transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                <Triangle size={12} fill='#5E3BC0' className="rotate-180" />
              </div>
            </div>
          </div>
        </div>

        {/* Grid Animation */}
        <div
          className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="overflow-hidden">

            <div
              className="">
              {children}
            </div>

            {nextStepTitle && onNext && (
              <div className="mt-[15px] flex justify-center">
                <button
                  onClick={onNext}
                  className="px-[24px] py-[5px] text-[18px] leading-[24px] tracking-[0%] align-middle text-center border-[1px] border-[#4E2FD2] text-[#4E2FD2] rounded-[7px] font-semibold hover:bg-[#4E2FD2] hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  Next: {nextStepTitle}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};