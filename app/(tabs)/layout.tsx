
import Header from "@/components/layout/Header"; // Import the Header component

export default function TabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Main div for the layout
    <div className="bg-gray-800 min-h-screen text-white">
      {/* The Header component is placed here, so it appears on every page in this group */}
      <Header />
      
      {/* The 'children' will be the actual page content (e.g., the Swap page UI) */}
      <main className="p-4 sm:p-6 lg:p-8">
        {children}
      </main>
    </div>
  );
}