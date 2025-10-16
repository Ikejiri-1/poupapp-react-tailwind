import { Aside } from "./Components/Aside";
import Card from "./Components/Card";
import { Container } from "./Components/Container";
import { DailyBudget } from "./Components/DailyBudget";
import { Main } from "./Components/Main";
import { SavingsStatus } from "./Components/SavingsStatus";
import { SearchInput } from "./Components/SearchInput";
import { Typography } from "./Components/Typography";

function App() {
  return (
    <>
      <div className="bg-neutral-background min-h-screen">
        <Container>
          <Aside />
          <Main>
            <SearchInput name="q" />
            <div>
              <Typography variant="h1">Olá, Vinny!</Typography>
              <Typography>Veja como estão suas finanças hoje!</Typography>
            </div>
            <section>
              <Card>
                <Card.Header>Orçamento diário disponível</Card.Header>
                <Card.Body>
                  <DailyBudget amount={200} />
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>Progresso da meta financeira</Card.Header>
                <Card.Body>
                  <SavingsStatus />
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>Movimentação financeira</Card.Header>
                <Card.Body></Card.Body>
              </Card>
              <Card>
                <Card.Header>Minhas contas</Card.Header>
                <Card.Body>R$ 200,00</Card.Body>
              </Card>
            </section>
          </Main>
        </Container>
      </div>
    </>
  );
}

export default App;
