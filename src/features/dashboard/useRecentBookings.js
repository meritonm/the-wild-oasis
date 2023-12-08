import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom/dist";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBooking() {
  const [searchParams] = useSearchParams();

  const numsDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  const queryDate = subDays(new Date(), numsDays).toISOString();

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ["bookings", `last-${numsDays}`],
  });

  return { isLoading, bookings };
}
