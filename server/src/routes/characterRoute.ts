import express, { Router, Request, Response } from "express";
const axios = require("axios");

const router: Router = express.Router();

interface ICharacter {
  name: string;
  height: number;
  mass: number;
  gender: string
}

const parseUrl = (url:string | null) => {
  if (url) {
    return url.split('&page=')[1] 
  }
  return url;

}

router.get("/", async (req: Request, res: Response) => {
  try {
    // Extract query parameters
    const search = req.query.search || "";
    const page = req.query.page || ""; 
    // Build the Star Wars API URL with query parameters
    const apiUrl = `https://swapi.dev/api/people/?search=${search}&page=${page}`;
    console.log(apiUrl)
    
    // Make a GET request to the Star Wars API
    const response = await axios.get(apiUrl);
    // res.json(response.data);

    // Extract character data from the API response
    const characters = response.data.results.map((character: ICharacter) => ({
      name: character.name,
      height: character.height,
      mass: character.mass,
      gender: character.gender,
    }));
    const previous = parseUrl(response.data.previous);
    const next = parseUrl(response.data.next);
    res.json({results:characters, count: response.data.count, previous, next });
  } catch (error) {
    console.error("Error fetching data from Star Wars API:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
