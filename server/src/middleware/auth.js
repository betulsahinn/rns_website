import jwt from 'jsonwebtoken';
import { sequelize } from '../models/associations.js';

export const authMiddleware = async (token) => {
    try {
        if (!token) {
            return null;
        }

        // Bearer token'ı temizle
        const cleanToken = token.replace('Bearer ', '');

        // Token'ı doğrula
        const decoded = jwt.verify(cleanToken, process.env.JWT_SECRET);

        // Kullanıcıyı veritabanından bul
        const user = await sequelize.models.User.findByPk(decoded.userId);

        if (!user) {
            throw new Error('User not found');
        }

        return user;
    } catch (error) {
        console.error('Auth error:', error);
        return null;
    }
};

export const createContext = async ({ req }) => {
    const token = req.headers.authorization;
    const user = await authMiddleware(token);

    return {
        user,
        db: sequelize
    };
};