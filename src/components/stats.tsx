export function Stats() {
  return (
    <section className="py-12 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold luxury-accent-gradient mb-2">
              10x
            </div>
            <div className="text-gray-300 text-sm">Faster delivery</div>
          </div>
          <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold luxury-accent-gradient mb-2">
              50%
            </div>
            <div className="text-gray-300 text-sm">Lower cost</div>
          </div>
          <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold luxury-accent-gradient mb-2">
              24hr
            </div>
            <div className="text-gray-300 text-sm">First prototype</div>
          </div>
          <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold luxury-accent-gradient mb-2">
              ∞
            </div>
            <div className="text-gray-300 text-sm">Iterations</div>
          </div>
        </div>
      </div>
    </section>
  );
}
