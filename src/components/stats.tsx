export function Stats() {
  return (
    <section className="py-12 border-t border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold bg-gradient-to-br from-purple-600 to-pink-500 bg-clip-text text-transparent">
              10x
            </div>
            <div className="text-gray-600 text-sm mt-1">Faster delivery</div>
          </div>
          <div>
            <div className="text-4xl font-bold bg-gradient-to-br from-purple-600 to-pink-500 bg-clip-text text-transparent">
              50%
            </div>
            <div className="text-gray-600 text-sm mt-1">Lower cost</div>
          </div>
          <div>
            <div className="text-4xl font-bold bg-gradient-to-br from-purple-600 to-pink-500 bg-clip-text text-transparent">
              24hr
            </div>
            <div className="text-gray-600 text-sm mt-1">First prototype</div>
          </div>
          <div>
            <div className="text-4xl font-bold bg-gradient-to-br from-purple-600 to-pink-500 bg-clip-text text-transparent">
              ∞
            </div>
            <div className="text-gray-600 text-sm mt-1">Iterations</div>
          </div>
        </div>
      </div>
    </section>
  );
}
