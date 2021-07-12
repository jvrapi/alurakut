import React, { HTMLAttributes } from 'react'
import NextLink from 'next/link'

// import { Container } from './styles';

type LinkProps = HTMLAttributes<HTMLAnchorElement> & {
  href: string
}

const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <a {...props}>{children}</a>
    </NextLink>
  )
}

export default Link
