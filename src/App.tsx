import { GridCard } from './components/GridCard'
import { GridImage } from './components/GridImage'
import { GridSection } from './components/GridSection'
import { Header } from './components/Header'
import { HeaderSection } from './components/HeaderSection'
import { ArrowDownIcon } from './components/icons/ArrowDown'

function App() {
  return (
    <>
      <HeaderSection>
        <Header />
        <h1>we are creatives</h1>
        <ArrowDownIcon />
      </HeaderSection>
      <GridSection>
        <GridCard
          title="Transform your brand"
          desc=" We are a full-service creative agency specializing in helping brands grow fast. 
          Engage your clients through compelling visuals that do most of the marketing for you."
          color="yellow"
        />
        <GridImage srcImg="/assets/images/desktop/image-transform.jpg" />
        <GridImage srcImg="/assets/images/desktop/image-stand-out.jpg" />
        <GridCard
          title="Stand out to the right audience"
          desc=" Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. "
          color="pink"
        />
      </GridSection>
    </>
  )
}

export default App
