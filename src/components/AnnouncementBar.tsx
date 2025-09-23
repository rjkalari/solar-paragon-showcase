import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-accent text-accent-foreground py-3 px-4 relative">
      <div className="container mx-auto flex justify-center items-center text-sm md:text-base">
        <div className="flex items-center gap-4">
          <span className="font-semibold text-center">
            🎉 Federal Government Battery Rebate 2025 - Get up to $18,600 in Incentives
          </span>
          <Button 
            variant="secondary" 
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
          >
            Contact Me
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 h-6 w-6 text-accent-foreground hover:bg-accent-foreground/10"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default AnnouncementBar;