import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 p-8 md:p-16">
      <div className="max-w-4xl mx-auto text-left">
        
        {/* Header Section */}
        <header className="mb-16 border-b border-stone-300 pb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Vision & Perspective
          </h1>
          <p className="text-2xl text-stone-600">
            A visual storytelling photography portfolio.
          </p>
        </header>

        {/* Introduction Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-stone-800">
            About the Work
          </h2>
          <p className="text-lg leading-relaxed text-stone-700 mb-4">
            Photography is more than capturing light; it is about structuring a narrative. 
            My work focuses on the intersection of raw environments and deliberate composition. 
            This approach to visual clarity mirrors my professional philosophy: combining strong leadership with focused, technical execution.
          </p>
        </section>

        {/* Photography Gallery Mockup */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-stone-800">
            Selected Works
          </h2>
          {/* Grid layout for images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-200 aspect-[4/3] flex items-center justify-center text-stone-500 rounded shadow-sm">
              <span className="text-lg font-medium">[ Portrait Photography ]</span>
            </div>
            <div className="bg-stone-200 aspect-[4/3] flex items-center justify-center text-stone-500 rounded shadow-sm">
              <span className="text-lg font-medium">[ Landscape Photography ]</span>
            </div>
            <div className="bg-stone-200 aspect-[4/3] flex items-center justify-center text-stone-500 rounded shadow-sm">
              <span className="text-lg font-medium">[ Event Coverage ]</span>
            </div>
            <div className="bg-stone-200 aspect-[4/3] flex items-center justify-center text-stone-500 rounded shadow-sm">
              <span className="text-lg font-medium">[ Abstract Compositions ]</span>
            </div>
          </div>
        </section>

        {/* CI/CD Context Section (Optional, but great for your internship CV) */}
        <section className="mb-10 pt-8 border-t border-stone-300">
          <h2 className="text-xl font-semibold mb-2 text-stone-800">
            Infrastructure Note
          </h2>
          <p className="text-base leading-relaxed text-stone-600">
            This gallery is delivered via an automated CI/CD pipeline using Docker, GitHub Actions, and an Ubuntu host server.
          </p>
        </section>

      </div>
    </div>
  );
}

export default App;