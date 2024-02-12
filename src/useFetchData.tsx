import { useEffect, useState } from "react";
import { Game, User } from "./interfaces";

export const useFetchData = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await fetch("http://localhost:9000/users").then((res) =>
        res.json()
      );
      setUsers(userData);
    };

    const fetchGames = async () => {
      const gameData = await fetch("http://localhost:9000/games").then((res) =>
        res.json()
      );
      setGames(gameData);
    };

    fetchUsers();
    fetchGames();
  }, []);

  return { users, games };
};
