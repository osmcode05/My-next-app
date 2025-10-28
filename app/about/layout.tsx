
export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-3">
      <nav className="text-3xl font-bold bg-green-800 p-4 text-white text-center">
        About Us
      </nav>
      {children}
    </div>
  );
}
