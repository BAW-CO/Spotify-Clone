import React from "react"
import { useEffect, useState } from "react";
import getAccessToken from "../../auth";



const SearchSongs = async (accessToken, searchQuery, offset = 0) => {

    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(
          searchQuery
        )}&type=track&limit=${limit}&offset=${offset}`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      if (!response.ok) throw new Error("Failed to fetch search results");
      const data = await response.json();
      const tracks = data.tracks.items;
      const totalTracks = data.tracks.total;

      if (!tracks.length) throw new Error("No songs found");
      return { songs: tracks, total: totalTracks };
    } catch (error) {
      console.error("Error fetching search results:", error);
      setError("An error occurred while fetching songs.");
      return { songs: [], total: 0 };
    }
  };

  export default SearchSongs;