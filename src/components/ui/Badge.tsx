interface BadgeProps {
   text: string;
   className?: string
}

export const Badge = ({ text, className = "" }: BadgeProps) => {
   return (
      <div className={`bg-brand text-white px-[6px] py-[2px] rounded-[10px] z-10 text-[12px] leading-none tracking-normal text-center min-h-[19px] flex items-center font-semibold ${className}`}>
         {text}
      </div>
   );
};