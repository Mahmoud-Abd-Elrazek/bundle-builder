import React from 'react';

import './index.css'

import { BuilderAccordion } from './components/BuilderAccordion';

export default function App() {

  return (
    <div>
      <div className="min-h-screen bg-white p-4 sm:p-8 font-sans text-neutral-text">
        <div className="max-w-[1400px] mx-auto flex flex-col xl:flex-row gap-8 items-start">

          <div className="w-full xl:flex-1">
            <BuilderAccordion />
          </div>
          <div className="w-full xl:w-auto">
          </div>

        </div>

      </div>
    </div>
  );
}