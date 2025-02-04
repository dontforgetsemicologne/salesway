'use server'

import { cookies } from "next/headers";

export async function loginAction(username: string, password: string) {
    if(username !== process.env.AUTH_USERNAME || password !== process.env.AUTH_PASSWORD) {
        console.error('Authentication Failed: Credentials do not match');
        return { success: false, message: 'Invalid Credentials'};
    }
    try {
        (await cookies()).set({
            name: 'auth',
            value: JSON.stringify({ 
                loggedIn: true, 
                username: username
            }),
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24 * 7,
        });

        console.log('Login successful, cookie set');
        return { success: true, message: 'Login Successful' };
    } catch(error) {
        console.error('Cookie Setting Error:', error);
        return { success: false, message: 'Internal Server Error' };
    }
}

export async function isAuthenticated() {
    try {
        const cookieStore = await cookies();
        const authCookie = cookieStore.get('auth');

        console.log('Detailed Auth Check:', {
            cookieExists: !!authCookie,
            cookieValue: authCookie?.value,
            cookieName: authCookie?.name
        });

        if (!authCookie) {
            console.log('No authentication cookie found');
            return false;
        }

        const parsedCookie = JSON.parse(authCookie.value);
        
        console.log('Parsed Cookie:', parsedCookie);

        return parsedCookie.loggedIn === true;
    } catch (error) {
        console.error('Authentication Check Error:', error);
        return false;
    }
}

export async function logoutAction() {
    (await cookies()).delete('auth');
}