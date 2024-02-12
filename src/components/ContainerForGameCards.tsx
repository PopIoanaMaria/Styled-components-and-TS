import styled from "styled-components";
import { LuUser } from "react-icons/lu";
import { theme } from "../theme";
import { Game, User } from "../interfaces";

type Props = {
  games: Game[];
};

const ContainerForGameCards = ({ games }: Props) => {
  return (
    <ContainerCardsGame>
      {games.map((game: Game, gameIndex: number) => (
        <CardGame key={gameIndex}>
          <TextOverlay>{game.game}</TextOverlay>
          {game.users.map((user: User, userIndex: number) => (
            <Details>
              <IconAndName key={userIndex}>
                <Icon>
                  <LuUser color={theme.colors.gray.medium} />
                </Icon>
                <UserName>{user.name}</UserName>
              </IconAndName>
              <RoundScore>{user.score}</RoundScore>
            </Details>
          ))}
        </CardGame>
      ))}
    </ContainerCardsGame>
  );
};

export default ContainerForGameCards;

const ContainerCardsGame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
  padding: 15px 0;
  background-color: ${theme.colors.purple.dark};
`;

const CardGame = styled.div`
  width: 240px;
  height: 110px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 10px 15px;
  border: 1px solid ${theme.colors.purple.medium};
  border-radius: 4px;
  padding: 16px 12px;
  gap: 16px;
`;

const TextOverlay = styled.div`
  width: 100px;
  position: absolute;
  top: -8px;
  left: 0;
  right: 125px;
  margin: auto;
  background-color: ${theme.colors.purple.dark};
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.purple.medium};
  font-weight: 600;
  font-size: 12px;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const IconAndName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

const Icon = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.purple.light};
  border-radius: 16px;
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.gray.light};
  font-weight: 600;
  font-size: 14px;
`;

const RoundScore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  font-weight: 600;
  font-size: 14px;
`;
