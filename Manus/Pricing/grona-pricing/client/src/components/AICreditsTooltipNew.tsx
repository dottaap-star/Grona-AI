import { HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function AICreditsTooltipNew() {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          <button
            className="inline-flex items-center justify-center ml-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="AI Credits information"
          >
            <HelpCircle className="h-4 w-4" />
          </button>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs p-4" side="top">
          <div className="space-y-2">
            <p className="font-semibold text-sm">AI Credits are used when Grona:</p>
            <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
              <li>Analyzes a page for drop-offs</li>
              <li>Generates copy, layout, or offer variants</li>
              <li>Runs optimization cycles</li>
              <li>Applies personalization logic</li>
            </ul>
            <p className="text-xs text-muted-foreground italic mt-3 pt-2 border-t border-border">
              <strong>Example:</strong> A typical optimization loop uses 120–180 credits depending on page complexity.
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
