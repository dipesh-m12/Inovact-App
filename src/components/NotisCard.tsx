import { BellRing } from "lucide-react";

export function NotisCard() {
  return (
    <div className="relative">
      <button className="p-2 rounded-full hover:bg-gray-100">
        <BellRing className="h-6 w-6 text-gray-600" />
      </button>
      <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500"></span>
    </div>
  );
}
