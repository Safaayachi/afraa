import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export function useRoomTypes() {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/Hotels/getRoomTypes`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
