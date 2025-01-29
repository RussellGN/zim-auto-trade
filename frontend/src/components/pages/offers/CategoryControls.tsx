"use client";

import { Button } from "@/components/ui/button";
import { categories } from "@/lib/constants";
import React, { useState } from "react";

export default function CategoryControls() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="flex items-center justify-center gap-4">
      {categories.map((category) => (
        <Button
          key={category.name}
          onClick={() => setActiveCategory(category)}
          size="icon"
          title={category.name}
          variant="outline"
          className={`rounded-full border-2 border-primary-default ${
            activeCategory.name === category.name
              ? "bg-primary-default text-white"
              : "text-primary-default"
          }`}
        >
          {category.icon}
        </Button>
      ))}
    </div>
  );
}
