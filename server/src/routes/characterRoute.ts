import express, { Router, Request, Response } from "express";
const axios = require("axios");

const router: Router = express.Router();

interface ICharacter {
  name: string;
  height: number;
  mass: number;
  gender: string
}

router.get("/", async (req: Request, res: Response) => {
  try {
    // Extract query parameters
    const search = req.query.search || "";
    // Build the Star Wars API URL with query parameters
    const apiUrl = `https://swapi.dev/api/people/?search=${search}`;
    
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
    res.json({results:characters, count: response.data.count});
  } catch (error) {
    console.error("Error fetching data from Star Wars API:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
