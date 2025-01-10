import "@/styles/index.scss";
import { ApolloProvider } from '@apollo/client';
import client from '@/graphql/client';
import queries from '@/graphql/queries';
import { AuthProvider } from '@/context/AuthContext';
import { AppProvider } from '@/context/AppContext';

if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <AuthProvider>
                <AppProvider>
                    <Component {...pageProps} />
                </AppProvider>
            </AuthProvider>
        </ApolloProvider>
    );
}