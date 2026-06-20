import React from 'react';

import './index.css'
import { BuilderAccordion } from '@/components/BuilderAccordion';
import { ReviewPanel } from '@/components/review/ReviewPanel';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-text font-sans antialiased">

      <main className="px-4 pt-4">
        <div className="flex flex-col xl:flex-row gap-8 items-start">
          <div className="w-full">
            <BuilderAccordion />
          </div>
          <div className="w-full xl:w-[399px] xl:flex-shrink-0">
            <ReviewPanel />
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;