/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { Services } from './components/Services';
import { About } from './components/About';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#121110] relative selection:bg-[#8B1417] selection:text-[#FBF9F5] overflow-x-hidden font-body">
      {/* Desktop bespoke cursor tracker */}
      <CustomCursor />

      {/* Subtle Studio Architectural Grain / Ambient Grid Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none -z-10 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(#121110 0.75px, transparent 0.75px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Selected Work Portfolio Section */}
        <SelectedWork />

        {/* Services Section */}
        <Services />

        {/* About Section */}
        <About />

        {/* Process Section */}
        <Process />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Studio Footer */}
      <Footer />
    </div>
  );
}
