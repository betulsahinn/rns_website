import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs, resolvers } from './graphql/schema.js';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { sequelize, setupAssociations } from './models/associations.js';
import { createContext } from './middleware/auth.js';

// ESM için __dirname tanımlama
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();

const corsOptions = {
    origin: process.env.NODE_ENV === 'production'
        ? [process.env.FRONTEND_URL]
        : '*',
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

// Database initialization
async function initializeDatabase() {
    try {
        // İlişkileri kur
        setupAssociations();

        // Veritabanı bağlantısını test et
        await sequelize.authenticate();
        console.log('✅ Successfully connected to PostgreSQL.');

        // Tabloları senkronize et
        await sequelize.sync({ alter: true });
        console.log('✅ Database synchronized successfully.');
    } catch (err) {
        console.error('❌ Error initializing database:', err);
        throw err;
    }
}

// Apollo Server configuration and startup
async function startApolloServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        formatError: (error) => {
            // Hata detaylarını loglama
            console.error('GraphQL Error:', {
                message: error.message,
                locations: error.locations,
                path: error.path,
                extensions: error.extensions
            });

            // Production'da hassas hata detaylarını gizleme
            if (process.env.NODE_ENV === 'production') {
                return new Error('Internal server error');
            }

            return error;
        },
        // Playground'u sadece development'ta aktif etme
        introspection: process.env.NODE_ENV !== 'production'
    });

    await server.start();

    app.use(
        '/graphql',
        cors(corsOptions),
        express.json(),
        expressMiddleware(server, {
            context: createContext
        })

    );

    const PORT = process.env.PORT || 4000;

    // Health check endpoint
    app.get('/health', (req, res) => {
        res.json({
            status: 'ok',
            timestamp: new Date().toISOString()
        });
    });

    // Server'ı başlat
    app.listen(PORT, () => {
        console.log(`
🚀 Server is running!
📊 GraphQL: http://localhost:${PORT}/graphql
🔍 Health: http://localhost:${PORT}/health
        `);
    });
}

// Uygulama başlatma
async function startApplication() {
    try {
        await initializeDatabase();
        await startApolloServer();

        // Beklenmedik hataları yakala
        process.on('unhandledRejection', (error) => {
            console.error('Unhandled Promise Rejection:', error);
        });

        process.on('uncaughtException', (error) => {
            console.error('Uncaught Exception:', error);
            process.exit(1);
        });
    } catch (err) {
        console.error('Failed to start server:', err);
        process.exit(1);
    }
}

// Uygulamayı başlat
startApplication();

export { sequelize };