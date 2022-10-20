import { forwardRef } from 'react'
import type { HTMLAttributes, LegacyRef } from 'react'
import Link, { LinkProps } from 'next/link'

const NextLink = forwardRef(
  (
    props: HTMLAttributes<HTMLAnchorElement> & { link: LinkProps },
    ref: LegacyRef<HTMLAnchorElement>
  ) => {
    const { link, children, ...rest } = props

    return (
      <Link {...link}>
        <a {...rest} ref={ref}>
          {children}
        </a>
      </Link>
    )
  }
)

NextLink.displayName = 'NextLink'

export default NextLink
