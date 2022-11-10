import { createQuery } from "@tanstack/solid-query";

type ReverseGeocodeResponse = {
  address: {
    City: string;
    CntryName: string;
  };
};

export const useReverseGeocodeQuery = (longitude: number, latitude: number) =>
  createQuery(
    () => ["reverseGeocode", longitude, latitude],
    () =>
      fetch(
        `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=json&location=${encodeURIComponent(
          longitude
        )},${encodeURIComponent(latitude)}`,
        {}
      )
        .then((r) => r.json())
        .then((o) => o as ReverseGeocodeResponse),
    { cacheTime: 24 * 60 * 60 * 1000, staleTime: Infinity }
  );
