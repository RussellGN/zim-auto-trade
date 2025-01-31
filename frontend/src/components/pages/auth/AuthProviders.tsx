"use client";

import { Button } from "@/components/ui/button";
import { authProviders } from "@/lib/constants";
import { capitalize } from "lodash";
import Image from "next/image";

export default function AuthProviders() {
  const size = 20;

  return (
    <>
      {authProviders.map((provider) => (
        <Button
          key={provider.name}
          onClick={provider.action}
          size="icon"
          variant="outline"
          type="button"
          title={`continue with ${capitalize(provider.name)}"`}
          className="rounded-full border-gray-300"
        >
          <Image
            width={size}
            height={size}
            alt={`${provider.name} logo`}
            src={`/logos/${provider.logo}`}
          />
        </Button>
      ))}
    </>
  );
}
