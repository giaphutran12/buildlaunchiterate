export function Footer() {
  return (
    <footer className="py-8 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold luxury-text-gradient">
            Build Launch Iterate
          </div>
          <div className="text-gray-400 text-sm">
            © 2024 - Ship faster or die trying
          </div>
        </div>
      </div>
    </footer>
  );
}
