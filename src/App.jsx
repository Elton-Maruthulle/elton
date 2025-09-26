import React from 'react';
import Banner from './components/Banner';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import Projects from './components/Projects';
import Gallery from './components/Gallery';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-cream">
      <div className="resume-shell w-full bg-cream shadow-xl rounded-3xl overflow-hidden font-sans">
        <Banner />

        <div className="p-6 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-7">
            <LeftPanel />
          </div>
          <div className="col-span-12 lg:col-span-5">
            <RightPanel />
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="p-6">
          <Projects />
        </div>

        {/* Gallery Section */}
        <div id="gallery" className="p-6">
          <Gallery />
        </div>
      </div>
    </div>
  );
}
