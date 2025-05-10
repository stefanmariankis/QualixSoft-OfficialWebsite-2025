import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";

export default function TestApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-4xl font-bold text-primary mb-4">Test App</h1>
        <p className="text-gray-600 mb-8">Dacă vezi acest mesaj, aplicația funcționează corect.</p>
        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition">
          Buton de test
        </button>
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}