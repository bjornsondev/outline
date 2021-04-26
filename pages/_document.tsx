import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

class OutlineDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
        </Head>
        <Main />
        <NextScript />
      </Html>
    )
  }
}

export default OutlineDocument
