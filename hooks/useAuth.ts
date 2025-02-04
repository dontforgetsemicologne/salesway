'use client'

import { useState, useEffect } from 'react';
import { loginAction, logoutAction, isAuthenticated } from '@/lib/auth';

export function useAuth() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    const checkAuth = async () => {
        console.log('Checking Authentication Status');
        try {
            const authStatus = await isAuthenticated();
            console.log('Authentication Status:', authStatus);
            setIsLoggedIn(authStatus);
        } catch (error) {
            console.error('Authentication Check Error:', error);
            setIsLoggedIn(false);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    useEffect(() => {
        const interval = setInterval(checkAuth, 60000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleStorageChange = () => {
            checkAuth();
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const login = async (username: string, password: string) => {
        try {
            const response = await loginAction(username, password);
            
            console.log('useAuth Login Response:', {
                success: response.success,
                message: response.message
            });

            if(response.success) {
                console.log('Setting Logged In State to True');
                await checkAuth();
                setIsLoggedIn(true);
            }

            return response;
        } catch (error) {
            console.error('Login Error in useAuth:', error);
            return { success: false, message: 'An unexpected error occurred' };
        }
    };

    const logout = async () => {
        try {
            await logoutAction();
            setIsLoggedIn(false);
            window.dispatchEvent(new Event('storage'));
        } catch (error) {
            console.error('Logout Error:', error);
        }
    };

    return { isLoggedIn, login, logout, loading };
}