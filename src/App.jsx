import { Aside } from "./Components/Aside";
import { Container } from "./Components/Container";
import { Main } from "./Components/Main";
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
          </Main>
        </Container>
      </div>
    </>
  );
}

export default App;
