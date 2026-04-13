import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";

export type SavedTour = {
  id: string;
  tour_title: string;
  tour_image: string | null;
  tour_days: string | null;
  tour_destination: string | null;
  tour_description: string | null;
  created_at: string;
};

export const useSavedTours = () => {
  const { user } = useAuth();
  const [savedTours, setSavedTours] = useState<SavedTour[]>([]);
  const [savedTitles, setSavedTitles] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);

  const fetchSavedTours = useCallback(async () => {
    if (!user) { setSavedTours([]); setSavedTitles(new Set()); return; }
    setLoading(true);
    const { data } = await supabase
      .from("saved_tours")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });
    const tours = (data ?? []) as SavedTour[];
    setSavedTours(tours);
    setSavedTitles(new Set(tours.map(t => t.tour_title)));
    setLoading(false);
  }, [user]);

  useEffect(() => { fetchSavedTours(); }, [fetchSavedTours]);

  const saveTour = async (tour: { title: string; img: string; days: string; destination: string; desc: string }) => {
    if (!user) return;
    await supabase.from("saved_tours").insert({
      user_id: user.id,
      tour_title: tour.title,
      tour_image: tour.img,
      tour_days: tour.days,
      tour_destination: tour.destination,
      tour_description: tour.desc,
    });
    fetchSavedTours();
  };

  const removeTour = async (id: string) => {
    await supabase.from("saved_tours").delete().eq("id", id);
    fetchSavedTours();
  };

  const isSaved = (title: string) => savedTitles.has(title);

  return { savedTours, loading, saveTour, removeTour, isSaved, refetch: fetchSavedTours };
};
