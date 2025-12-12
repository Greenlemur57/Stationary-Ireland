import {useEffect, useState} from "react";
import {Journey} from "../utils/journey.ts";
import {useStorage} from "./useStorage.ts";

export function useJourneys() {
  const [journeys, setJourneys] = useState<Journey[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    useStorage().getJourneys().then((data) => {
      setJourneys(data);
      setLoading(false);
    });
  }, []);

  return { journeys, loading };
}