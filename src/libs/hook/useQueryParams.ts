import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function useQueryParams<T = {}>() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const urlSearchParams = new URLSearchParams(
    Array.from(searchParams.entries()),
  );

  function setQueryParams(params: Partial<T>, scroll = false) {
    Object.entries(params).forEach(([key, value]) => {
      if (!value) return;

      urlSearchParams.set(key, String(value));
    });

    const search = urlSearchParams.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`, { scroll: scroll });
  }

  function searchQueryParams(params: string[]) {
    let url: string = "";

    params.forEach((value) => {
      if (!value) return;

      if (!urlSearchParams.get(value)) return;

      if (!url) {
        url = "?" + value + "=" + String(urlSearchParams.get(value));
        return;
      }

      url = url + "&" + value + "=" + String(urlSearchParams.get(value));
    });

    return url;
  }

  function deleteQueryParams(params: string[]) {
    params.forEach((value) => {
      if (!value) return;

      urlSearchParams.delete(value);
    });

    const search = urlSearchParams.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`, { scroll: false });
  }

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return {
    urlSearchParams,
    setQueryParams,
    createQueryString,
    deleteQueryParams,
    searchQueryParams,
  };
}
