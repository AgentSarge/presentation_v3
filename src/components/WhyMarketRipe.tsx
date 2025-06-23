export default function WhyMarketRipe() {
  return (
    <div className="space-y-8">
      {/* Why This Market Is Ripe */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="card p-6 bg-black/40 border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-6">Why This Market Is Ripe</h3>
          <div className="space-y-4">
            <p className="text-text-muted leading-relaxed">
              <span className="text-pink-400 font-medium">These reps close millions of deals per year</span> — yet fly blind
            </p>
            <p className="text-text-muted leading-relaxed">
              <span className="text-blue-400 font-medium">No Gong. No Chorus.</span> No field intelligence layer exists
            </p>
            <p className="text-text-muted leading-relaxed">
              <span className="text-green-400 font-medium">SalesTag turns every conversation into data</span> — and every data point into coaching
            </p>
          </div>
        </div>

        <div className="card p-6 bg-black/40 border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-6">What This Means</h3>
          <div className="space-y-4">
            <p className="text-text-muted leading-relaxed">
              <span className="text-pink-400 font-bold text-xl">$668M TAM</span> is just the beginning.
            </p>
            <p className="text-text-muted leading-relaxed">
              These are just the known, structured field sales roles in the U.S.
            </p>
            <p className="text-text-muted leading-relaxed mb-4">From there, we expand:</p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌍</span>
                <span className="text-blue-400 font-medium">Globally</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🤖</span>
                <span className="text-purple-400 font-medium">Into tech-assisted reps</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🧰</span>
                <span className="text-green-400 font-medium">Into blue-collar + hybrid frontline roles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 