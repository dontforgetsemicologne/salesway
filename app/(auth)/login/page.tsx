'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { useAuth } from '@/hooks/useAuth';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login, loading, isLoggedIn } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isLoggedIn) {
            router.push('/dashboard');
        }
    }, [isLoggedIn, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        console.log('Attempting login with:', { username, password });

        const response = await login(username, password);

        console.log('Login response:', response);

        if(response.success) {
            router.push("/dashboard");
        } else {
            setError("Invalid credentials");
        }
    };

    return(
        <div className="flex min-h-[100dvh] relative items-center justify-center bg-gray-100 px-4 dark:bg-white">
            <div className="absolute inset-0 z-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"/>
            </div>
            <div className="absolute top-0 z-[-1] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"/>
            <div className="mx-auto z-10 text-gray-700 w-full max-w-[500px]">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-normal font-geist tracking-tighter">Welcome back</h1>
                    <p className="text-gray-800/90 dark:text-gray-400 font-geist font-normal">
                        Sign in to your account to continue
                    </p>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <Label htmlFor="username">Username</Label>
                        <Input
                            id="username"
                            placeholder="Username"
                            required
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            placeholder="••••••••"
                            required
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button 
                        className="relative h-12 w-full mx-auto text-center font-geist tracking-tighter overflow-hidden rounded bg-neutral-950 px-5 py-2.5 text-white transition-all duration-300 hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2"
                        type='submit'
                    >
                        <span className="relative">Sign In</span>
                    </button>
                </form>
            </div>
        </div>
    )
}