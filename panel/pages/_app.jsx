import { ApolloProvider } from '@apollo/client'
import client from '@/src/graphql/panel'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}

export default MyApp