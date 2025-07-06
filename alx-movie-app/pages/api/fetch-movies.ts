import type { NextApiRequest, NextApiResponse } from "next";
import { MoviesProps } from "@/interfaces";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { year, page = 1, genre } = req.body;
  const currentYear = new Date().getFullYear();

  const params = new URLSearchParams({
    year: String(year || currentYear),
    sort: "year.decr",
    limit: "12",
    page: String(page),
  });

  if (genre) params.append("genre", genre);

  try {
    const response = await fetch(`https://moviesdatabase.p.rapidapi.com/titles?${params.toString()}`, {
      headers: {
        "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
        "x-rapidapi-key": process.env.MOVIE_API_KEY || "",
      },
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(`Request failed: ${response.status} - ${message}`);
    }

    const { results } = await response.json();
    const movies: MoviesProps[] = results;

    return res.status(200).json({ movies });
  } catch (error: any) {
    console.error("Movie API error:", error.message);
    return res.status(500).json({ error: "Failed to fetch movies" });
  }
}
