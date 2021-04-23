import Link from 'next/link'

import { PageWrapper } from 'features/common/PageWrapper'
import { PageHead } from 'heads/HomePage'

export default () => (
  <PageWrapper>
    <PageHead />

    <Link href='/login'>
      Login
    </Link>
  </PageWrapper>
)
