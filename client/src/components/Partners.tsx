export default function Partners() {
  return (
    <section className="py-10 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-white text-sm mb-8">Our partners help us build trust in us</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <div key={index} className="partner-logo bg-white p-4 rounded-xl flex items-center justify-center h-16 w-full max-w-[140px]">
              <div className="text-gray-400 font-semibold text-xs">PARTNER LOGO</div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .partner-logo {
          filter: grayscale(100%);
          transition: filter 0.3s ease, transform 0.3s ease;
        }
        
        .partner-logo:hover {
          filter: grayscale(0%);
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
