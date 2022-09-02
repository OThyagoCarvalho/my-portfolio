import Image from 'next/image'

const contentfulLoader = ({ src, width, quality }: any) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const ContentfulImage = (props: any) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image loader={contentfulLoader} {...props} />
}

export default ContentfulImage
