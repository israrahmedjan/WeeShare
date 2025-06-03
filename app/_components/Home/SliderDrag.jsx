"use client";
import { initIntersectionObserver } from "@/public/fadeup";
import { useEffect } from "react";
//import { initIntersectionObserver } from "../utils/observer"; // adjust path if needed

export default function FadeUpTest() {
  useEffect(() => {
    const cleanup = initIntersectionObserver(".reveal", "active", 0.1);

    return () => {
      cleanup();
    };
  }, []);

  return (
    <main className="p-10 space-y-20">
      <section className="h-[50px] bg-gray-200">Scroll Down</section>

      <section className="reveal bg-white p-10 rounded">
        <h2 className="text-2xl">Animated Section 1222222222</h2>
        <p>Yeh section neeche se upar animate hota hai.</p>
      </section>

      <section className="reveal bg-white p-10 rounded">
        <h2 className="text-2xl">Animated Section 2</h2>
        <p>Yeh bhi animate hota hai jab screen par aata hai.</p>
      </section>
    </main>
  );
}
