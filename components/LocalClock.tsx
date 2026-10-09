"use client";

import { useSyncExternalStore } from "react";

const formatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Bogota",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 15_000);
  return () => clearInterval(id);
}

const getTime = () => formatter.format(new Date());
const getServerTime = () => "--:--";

export default function LocalClock() {
  const time = useSyncExternalStore(subscribe, getTime, getServerTime);
  return <span suppressHydrationWarning>{time}</span>;
}
