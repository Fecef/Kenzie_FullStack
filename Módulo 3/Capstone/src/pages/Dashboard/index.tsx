import { useContext, useEffect, useState } from "react";
import { ContainerCards } from "../../components/CardsComponent";
import { Deck } from "../../components/Deck";
import { Search } from "../../components/Form/FormSearch";
import { Header } from "../../components/Header";
import { ModalFeedback } from "../../components/Modal";
import { OffPracticeContainer } from "../../components/OffPracticeContainer";
import { DeckContext } from "../../contexts/DeckContext";
import { DashboardStyled } from "../../styles/dashboardStyled";

export const DashboardPage = () => {
  const { filteredDecks, onPractice } = useContext(DeckContext);

  const [message, setMessage] = useState("Carregando decks");

  useEffect(() => {
    setMessage("Carregando decks");
    setTimeout(() => {
      setMessage("Nenhum deck encontrado");
    }, 2000);
  }, [filteredDecks]);

  return (
    <>
      <DashboardStyled onPractice={onPractice}>
        <div className="header">
          <Header />
        </div>
        <ModalFeedback />

        <div className="deckContainer">
          <Search />
          {filteredDecks.length ? (
            <ul>
              {filteredDecks.map((deck) => (
                <Deck key={deck.id} deck={deck} />
              ))}
            </ul>
          ) : (
            <p>{message}</p>
          )}
        </div>

        <div className={`ContainerCards ${onPractice ? "open" : "closee"}`}>
          {onPractice ? <ContainerCards /> : <OffPracticeContainer />}
        </div>
      </DashboardStyled>
    </>
  );
};
