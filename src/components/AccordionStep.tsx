import React from 'react';
import { ChevronDown } from 'lucide-react';

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
  children
}: AccordionStepProps) => {
  return (
    <div className="border-b border-neutral-border last:border-b-0 pb-6 mb-6">

      {/* 1. رأس الخطوة (Header) */}
      <div
        className="cursor-pointer group flex flex-col gap-2"
        onClick={onToggle}
      >
        <span className="text-[10px] font-bold tracking-widest text-neutral-muted uppercase">
          Step {stepNumber} of {totalSteps}
        </span>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-neutral-muted group-hover:text-[#5E3BC0] transition-colors duration-300">
              {icon}
            </div>
            <h2 className="text-xl font-bold text-neutral-text">{title}</h2>
          </div>

          <div className="flex items-center gap-4">
            {selectedCount > 0 && (
              <span className="text-sm font-medium text-[#5E3BC0] animate-pulse">
                {selectedCount} selected
              </span>
            )}

            {/* إضافة Animation للسهم عشان يلف 180 درجة لما يفتح */}
            <div className={`text-[#5E3BC0] transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
              <ChevronDown size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* 2. محتوى الخطوة (Body) مع الـ Grid Animation */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'
          }`}
      >
        {/* الحاوية دي مهمة جداً عشان تخفي المحتوى وهو بيقفل */}
        <div className="overflow-hidden">
          <div className="flex flex-col gap-4">
            {children}
          </div>

          {nextStepTitle && onNext && (
            <div className="mt-8 flex justify-center border-t border-neutral-border pt-8">
              <button
                onClick={onNext}
                className="px-8 py-3 border border-[#5E3BC0] text-[#5E3BC0] rounded-lg font-bold hover:bg-[#5E3BC0] hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Next: {nextStepTitle}
              </button>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};