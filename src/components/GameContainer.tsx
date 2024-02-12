import { theme } from "../theme";
import ContainerForGameCards from "./ContainerForGameCards";
import styled from "styled-components";
import { LeaderboardSection } from "./LeaderboardSection";
import { useState } from "react";
import { useFetchData } from "../useFetchData";

export const GameContainer = () => {
  const [isExpandedLeaderBoard, setIsExpandedLeaderBoard] =
    useState<boolean>(false);

  const { users, games } = useFetchData();

  const handleClick = () => {
    setIsExpandedLeaderBoard(!isExpandedLeaderBoard);
  };

  return (
    <ContainerPage>
      <Container>
        <Title>
          <Round>Round 1</Round>
          <Date>Mar 20th 2023 - 10:45 AM</Date>
        </Title>

        <Divider />

        <GameSection>
          <Table>
            <LeaderboardSection
              users={users}
              isExpandedLeaderBoard={isExpandedLeaderBoard}
              handleClick={handleClick}
            />
          </Table>
          <ContainerForGameCards games={games} />
        </GameSection>
      </Container>
    </ContainerPage>
  );
};

const ContainerPage = styled.div`
  width: 100%;
  background-color: ${theme.colors.purple.dark};
  margin: 30px auto;
  position: relative;
  font-family: "Gill Sans", sans-serif;
`;

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  background-color: ${theme.colors.purple.dark};
`;

const Table = styled.div`
  width: 100%;
  display: flex;
  border-radius: 4px;
  background-color: ${theme.colors.purple.light};
`;

const GameSection = styled.div`
  width: 100%;
  border: 2px solid ${theme.colors.purple.light};
  border-radius: 8px;
  margin: 10px 0;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 15px 0;
`;

const Round = styled.h4`
  margin: 0;
  color: ${theme.colors.gray.medium};
`;

const Date = styled.h5`
  margin: 0;
  color: ${theme.colors.gray.medium};
`;

const Divider = styled.hr`
  width: 100%;
  margin: 5px 0;
  border: 1px ridge ${theme.colors.purple.medium};
  color: ${theme.colors.gray.medium};
`;
