export interface User {
  id: number;
  rank: number;
  name: string;
  score: string;
  color_rank: string;
  backgroundColor_rank: string;
}

export interface Game {
  game: string;
  users: User[];
}

export interface TableRowProps {
  isExpandedLeaderBoard: boolean;
  index: number;
}

export interface RankProps {
  color: string;
  backgroundColor: string;
}

export interface DividerTableProps {
  index: number;
  length: number;
}
