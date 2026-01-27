export default function Hero() {
  return (
    <section className="px-4 lg:px-40 flex flex-1 justify-center py-20">
      <div className="max-w-[1200px] flex-1">
        <div className="@container">
          <div className="flex flex-col gap-12 @[864px]:flex-row items-center">
            
            {/* LEFT CONTENT */}
            <div className="flex flex-col gap-8 @[480px]:min-w-[400px] @[864px]:w-1/2">
              <div className="flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Enterprise Excellence
                </div>

                <h1 className="text-5xl @[480px]:text-7xl font-black leading-[1.1] tracking-[-0.04em]">
                  <span className="text-gradient">TechFest 2026:</span>
                  <br />
                  Redefining Corporate Innovation
                </h1>

                <p className="text-[#606e8a] text-lg max-w-[500px]">
                  Join 5,000+ industry leaders and visionaries to explore the next
                  frontier of enterprise technology, AI ethics, and digital growth.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="h-14 px-6 bg-primary text-white font-bold rounded-lg shadow-xl shadow-primary/25">
                  Reserve Your Seat
                </button>
                <button className="h-14 px-6 bg-white border font-bold rounded-lg">
                  View Schedule
                </button>
              </div>
            </div>

            {/* RIGHT ILLUSTRATION */}
            <div className="w-full @[864px]:w-1/2 relative">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-tech-purple/10 rounded-full blur-3xl"></div>

              <div className="relative aspect-square bg-gradient-to-tr from-primary/5 to-tech-purple/5 rounded-3xl border shadow-2xl flex items-center justify-center">
                <div className="relative w-3/4 h-3/4 bg-white/20 backdrop-blur-xl rounded-2xl border shadow-inner flex items-center justify-center rotate-6 scale-105">
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/40 rounded-lg"></div>

                  <div className="w-48 h-48 bg-white/80 rounded-full shadow-2xl flex items-center justify-center">
                    <span className="text-6xl text-primary font-black">TF</span>
                  </div>

                  <div className="absolute bottom-10 right-10 p-4 glass-card rounded-xl shadow-lg">
                    <div className="flex gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div className="h-2 w-24 bg-primary/20 rounded"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
