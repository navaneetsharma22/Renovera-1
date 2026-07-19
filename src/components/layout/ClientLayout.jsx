"use client";

import { useState } from "react";
import { Preloader } from "@/components/preloader";

export function ClientLayout({ children }) {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
      {!preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}
      {children}
    </>
  );
}
