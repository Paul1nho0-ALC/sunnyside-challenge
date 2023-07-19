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
        <GridImage srcImg="/assets/images/desktop/image-transform.jpg" />
      </GridSection>
    </>
  )
}

export default App
