import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";

export default function AICreditsTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="inline-flex items-center justify-center ml-1">
          <HelpCircle className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
        </button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs p-4" side="top">
        <div className="space-y-3">
          <p className="font-semibold text-sm">AI Credits are used when Grona:</p>
          <ul className="space-y-1 text-sm">
            <li>• Analyzes a page for drop-offs</li>
            <li>• Generates copy, layout, or offer variants</li>
            <li>• Runs optimization cycles</li>
            <li>• Applies personalization logic</li>
          </ul>
          <div className="pt-2 border-t border-border">
            <p className="text-sm font-medium">Example:</p>
            <p className="text-sm text-muted-foreground">
              A typical optimization loop uses 120–180 credits depending on page
              complexity.
            </p>
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
