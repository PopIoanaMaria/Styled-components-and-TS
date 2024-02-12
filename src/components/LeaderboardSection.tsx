import styled from "styled-components";
import { theme } from "../theme";
import { LuUser } from "react-icons/lu";

import {
  DividerTableProps,
  RankProps,
  TableRowProps,
  User,
} from "../interfaces";

type Props = {
  users: User[];
  isExpandedLeaderBoard: boolean;
  handleClick: () => void;
};

export const LeaderboardSection = ({
  users,
  isExpandedLeaderBoard,
  handleClick,
}: Props) => {
  return (
    <LeaderBoardContainer>
      <MatchText>Match 1.1</MatchText>
      <TableMatch>
        <Container>
          <TableRowHeader>
            <RankAndName>
              <TableHeader>RANK</TableHeader>
              <TableHeader>NAME</TableHeader>
            </RankAndName>
            <TableHeader>SCORE</TableHeader>
          </TableRowHeader>

          {users.map((user: User, index: number) => (
            <TableRow
              key={index}
              isExpandedLeaderBoard={isExpandedLeaderBoard}
              index={index}
            >
              <UserDetails>
                <RankAndName>
                  <RankIcon>
                    <Rank
                      color={user.color_rank}
                      backgroundColor={user.backgroundColor_rank}
                    >
                      {user.rank}
                    </Rank>
                  </RankIcon>
                  <IconAndName>
                    <LuUser color={theme.colors.gray.medium} />
                    {user.name}
                  </IconAndName>
                </RankAndName>
                <Score>{user.score}</Score>
              </UserDetails>
              <DividerTable index={index} length={users.length} />
            </TableRow>
          ))}

          <ContainerButton>
            <Button onClick={handleClick}>See Leaderboard</Button>
          </ContainerButton>
        </Container>
      </TableMatch>
    </LeaderBoardContainer>
  );
};

const LeaderBoardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: 15px;
`;

const Button = styled.button`
  width: 200px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  background-color: ${theme.colors.gray.dark};
  color: ${theme.colors.gray.medium};
  font-weight: 600;
  font-size: 14px;
`;

const MatchText = styled.h4`
  margin: 0;
  color: ${theme.colors.white};
  padding: 15px 25px;
`;

const TableMatch = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

const TableRow = styled.li<TableRowProps>`
  display: flex;
  justify-content: space-between;
  height: 30px;
  align-items: center;
  margin: 10px 0;
  display: ${(props) =>
    props.isExpandedLeaderBoard || props.index < 3 ? "block" : "none"};
  filter: ${(props) =>
    props.index === 2 && !props.isExpandedLeaderBoard ? "blur(1px)" : "none"};
`;

const UserDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
  height: 30px;
`;

const TableRowHeader = styled.li`
  display: flex;
  justify-content: space-between;
  height: 30px;
  align-items: center;
  width: 100%;
  position: relative;
`;

const RankAndName = styled.div`
  display: flex;
`;

const TableHeader = styled.div`
  padding-right: 15px;
  color: ${theme.colors.gray.medium};
  font-size: 12px;
  margin-left: 10px;
  font-weight: 700;
`;

const RankIcon = styled.div`
  width: 60px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Rank = styled.div<RankProps>`
  position: relative;
  width: 20px;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 20px;
  background-color: ${(props) => props.backgroundColor};
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
  overflow: hidden;
  border: 2px solid ${(props) => props.color};
  color: ${(props) => props.color};
`;

const IconAndName = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  color: ${theme.colors.white};
  gap: 12px;
  margin-left: 10px;
`;

const Score = styled.div`
  width: 80px;
  align-items: center;
  display: flex;
  justify-content: center;
  color: ${theme.colors.white};
  font-weight: 600;
  font-size: 14px;
`;

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0 10px;
  background-color: ${theme.colors.purple.light};
`;

const DividerTable = styled.hr<DividerTableProps>`
  width: 100%;
  display: ${(props) => (props.index < props.length - 1 ? "block" : "none")};
  margin: 5px 0;
  border: 1px ridge ${theme.colors.purple.medium};
  color: ${theme.colors.gray.medium};
`;
