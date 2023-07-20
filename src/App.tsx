import { Footer } from './components/Footer'
import { GridCard } from './components/GridCard'
import { GridFourColums } from './components/GridFourColumns'
import { GridImage } from './components/GridImage'
import { GridImageWithText } from './components/GridImageWithText'
import { GridSection } from './components/GridSection'
import { Header } from './components/Header'
import { HeaderSection } from './components/HeaderSection'
import { TestimonialsCard } from './components/TestimonialsCard'
import { TestimonialsCards } from './components/TestimonialsCards'
import { TestimonialsSection } from './components/TestimonialsSection'
import { ArrowDownIcon } from './components/icons/ArrowDown'

function App() {
  // This don´t update so if you want to see the mobile images reload the page with the width < 480px
  const { innerWidth: width } = window

  const mobileOrDesktop = width <= 480 ? 'mobile/' : 'desktop/'

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
        <GridImage
          srcImg={
            '/sunnyside-challenge/assets/images/' +
            mobileOrDesktop +
            'image-transform.jpg'
          }
        />
      </GridSection>

      <GridSection>
        <GridImage
          srcImg={
            '/sunnyside-challenge/assets/images/' +
            mobileOrDesktop +
            'image-stand-out.jpg'
          }
        />
        <GridCard
          title="Stand out to the right audience"
          desc=" Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. "
          color="pink"
        />
      </GridSection>

      <GridSection>
        <GridImageWithText
          color="cyan"
          title="Graphic Design"
          text="
  Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
          srcImg={
            '/sunnyside-challenge/assets/images/' +
            mobileOrDesktop +
            'image-graphic-design.jpg'
          }
        />
        <GridImageWithText
          color="blue"
          title="Photography"
          text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
          srcImg={
            '/sunnyside-challenge/assets/images/' +
            mobileOrDesktop +
            'image-photography.jpg'
          }
        />
      </GridSection>
      <TestimonialsSection>
        <h2>Client testimonials</h2>
        <TestimonialsCards>
          <TestimonialsCard
            srcImg="/assets/images/image-emily.jpg"
            text="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
            name="Emily R."
            ocupation="Marketing Director"
          />
          <TestimonialsCard
            srcImg="/sunnyside-challenge/assets/images/image-thomas.jpg"
            text="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
            name="Thomas S."
            ocupation="Chief Operating Officer"
          />
          <TestimonialsCard
            srcImg="/sunnyside-challenge/assets/images/image-jennie.jpg"
            text="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
            name="Jennie F."
            ocupation="Business Owner"
          />
        </TestimonialsCards>
      </TestimonialsSection>

      <GridFourColums>
        <GridImage
          srcImg={
            '/sunnyside-challenge/assets/images/' +
            mobileOrDesktop +
            'image-gallery-milkbottles.jpg'
          }
        />
        <GridImage
          srcImg={
            './sunnyside-challenge/images/' +
            mobileOrDesktop +
            'image-gallery-orange.jpg'
          }
        />
        <GridImage
          srcImg={
            '/sunnyside-challenge/assets/images/' +
            mobileOrDesktop +
            'image-gallery-cone.jpg'
          }
        />
        <GridImage
          srcImg={
            '/sunnyside-challenge/assets/images/' +
            mobileOrDesktop +
            'image-gallery-sugarcubes.jpg'
          }
        />
      </GridFourColums>
      <Footer />
    </>
  )
}

export default App
