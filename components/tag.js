import NextLink from 'next/link'
import { 
  Badge,
  Link } from '@chakra-ui/react'

const Tag = (props) => {
  const name = props.name
  const tagColor = props.tagColor
  let link

  if ( name === "blog" || name === "work" )
    link = "/" + (name === "work" ? "portfolio": "blog")
  else
    link = "/search?word=" + name

  return (
    <NextLink href={link}>
      <Link>
        <Badge borderRadius="full" px="2" colorScheme={ tagColor ? tagColor: "teal"}>
          {name}
        </Badge>
      </Link>
    </NextLink>
  )
}

export default Tag