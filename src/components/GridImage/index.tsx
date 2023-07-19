interface GridImageProps {
  srcImg: string
}

export const GridImage = ({ srcImg }: GridImageProps) => {
  return <img style={{ width: '100%' }} src={srcImg} alt="Ilustration" />
}
