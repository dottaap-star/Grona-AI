import { Box } from "lucide-react";

const integrations = [
  { name: "Shopify", category: "E-commerce" },
  { name: "WooCommerce", category: "E-commerce" },
  { name: "Webflow", category: "Website Builder" },
  { name: "WordPress", category: "CMS" },
  { name: "Wix", category: "Website Builder" },
  { name: "Squarespace", category: "Website Builder" },
  { name: "BigCommerce", category: "E-commerce" },
  { name: "Plain HTML / JS", category: "Custom" }
];

export default function Integrations() {
  return (
    <section className="py-16 bg-background" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
      <div className="container max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Connects with Your Favorite Tools
          </h2>
          <p className="text-muted-foreground">
            Seamlessly integrate Grona with your existing tech stack
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-200 group"
              style={{ padding: '18px' }}
            >
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-2 group-hover:bg-primary/10 transition-colors">
                <Box className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="text-sm font-medium text-center text-foreground">
                {integration.name}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {integration.category}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-3" style={{ marginTop: '24px' }}>
          <p className="text-sm text-muted-foreground font-medium">
            Backend-agnostic — Grona works with any CMS or website stack.
          </p>
          <p className="text-sm text-muted-foreground">
            Need a custom integration?{' '}
            <a
              href="mailto:support@grona.ai"
              className="text-primary hover:underline font-medium"
            >
              Email us at support@grona.ai
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
