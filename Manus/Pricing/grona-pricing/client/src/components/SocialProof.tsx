export default function SocialProof() {
  const logos = [
    { name: "Company 1", width: 120 },
    { name: "Company 2", width: 100 },
    { name: "Company 3", width: 140 },
    { name: "Company 4", width: 110 },
    { name: "Company 5", width: 130 },
    { name: "Company 6", width: 115 },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-2xl font-semibold text-center mb-12 text-muted-foreground">
          Trusted by fast-growing ecommerce and SaaS teams
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="opacity-40 hover:opacity-60 transition-opacity duration-300 cursor-pointer"
              style={{ width: `${logo.width}px` }}
            >
              <div className="w-full h-12 bg-muted rounded flex items-center justify-center">
                <span className="text-xs font-medium text-muted-foreground">
                  {logo.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
