import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-lg font-bold text-gray-900">
              Build Launch Iterate
            </div>
            <Image
              src="/logo.svg"
              alt="Build Launch Iterate Logo"
              width={100}
              height={75}
              className="h-10 w-auto"
            />
          </div>
          <div className="text-gray-600 text-sm">
            © 2024 - Ship faster or die trying
          </div>
        </div>
      </div>
    </footer>
  );
}
