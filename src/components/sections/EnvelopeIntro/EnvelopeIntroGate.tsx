"use client";

import {
  useCallback,
  useEffect,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { getIntroSeen, markIntroSeen } from "@/lib/intro/session";
import { EnvelopeIntro } from "./EnvelopeIntro";

type Props = {
  monogram: string;
  addressLine: string;
  letterPreview: ReactNode;
  openLabel: string;
  skipLabel: string;
  hint: string;
};

const noopSubscribe = () => () => {};
const getSeenSnapshot = () => getIntroSeen();
const getSeenServerSnapshot = () => true;

export function EnvelopeIntroGate(props: Props) {
  const seen = useSyncExternalStore(
    noopSubscribe,
    getSeenSnapshot,
    getSeenServerSnapshot,
  );
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove("intro-pending");
  }, []);

  const handleComplete = useCallback(() => {
    markIntroSeen();
    setDismissed(true);
  }, []);

  if (seen || dismissed) return null;

  return <EnvelopeIntro {...props} onComplete={handleComplete} />;
}
