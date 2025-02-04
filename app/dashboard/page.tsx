'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { useAuth } from "@/hooks/useAuth";

import CustomerDevice from "@/components/CustomerDevice";
import ProductComparison from "@/components/ProductComparison";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SemiCircularProgress } from "@/components/ui/semicircular-progress";

import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow
} from "@/components/ui/table";

import { 
    Cable,
    ChartColumnBig, 
    ChevronDown, 
    CircleUserRound, 
    LayoutDashboard, 
    LayoutList, 
    Plug2, 
    Settings, 
    Star, 
    TrendingDown, 
    TrendingUp 
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchComponentData } from "@/lib/api";
import CustomerFeedback from "@/components/CustomerFeedback";
import { fetchComponent } from "@/lib/actions";

export default function DashboardPage() {
    const { isLoggedIn, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if(!isLoggedIn) {
            router.push('/login');
        }
    }, [isLoggedIn]);

    const { data: Component1, isLoading: Loading1, error: Error1 } = useQuery({
        queryKey: ['Component', 1],
        queryFn: () => fetchComponentData(1),
        enabled: isLoggedIn,
    });

    const { data: Component2, isLoading: Loading2, error: Error2 } = useQuery({
        queryKey: ['Component', 2],
        queryFn: () => fetchComponent('sales'),
    });
    
    const { data: Component3, isLoading: Loading3, error: Error3 } = useQuery({
        queryKey: ['Component', 3],
        queryFn: () => fetchComponentData(3),
        enabled: isLoggedIn,
    });

    const { data: Component4, isLoading: Loading4, error: Error4 } = useQuery({
        queryKey: ['Component', 4],
        queryFn: () => fetchComponent('4'),
    });

    const { data: Component5, isLoading: Loading5, error: Error5 } = useQuery({
        queryKey: ['Component', 5],
        queryFn: () => fetchComponentData(5),
        enabled: isLoggedIn,
    });

    const { data: Component6, isLoading: Loading6, error: Error6 } = useQuery({
        queryKey: ['Component', 6],
        queryFn: () => fetchComponent('6'),
    });
    console.log(Component6);

    if(!isLoggedIn) return null;

    return (
        <div className="flex h-screen bg-white">
            <main className="flex flex-1 gap-2 p-2 mx-4 my-2 bg-gray-100 rounded-xl shadow-md">
                {/*Left Sidebar*/}
                <aside className="w-64 p-6">
                    <div className="flex items-center gap-1 mb-6">
                        <Image
                            src='/assets/logo.png'
                            height={30}
                            width={30}
                            alt="logo"
                        />
                        <span className="font-bold text-xl">Salesway</span>
                    </div>

                    <div className="space-y-6 flex flex-col items-center justify-center">
                        <div className="space-y-1">
                            <Button 
                                variant='transparent' 
                                className="text-gray-600"
                                size={'menu'}
                            >
                                <Settings size={20} strokeWidth={1} className="transition-colors"/>
                                <span>Settings</span>
                            </Button>
                            <Button 
                                variant='transparent' 
                                className="text-gray-600"
                                size={'menu'}
                            >
                                <CircleUserRound size={20} strokeWidth={1} className="transition-colors"/>
                                <span>Team</span>
                            </Button>
                        </div>

                        <div className="pt-2 space-y-3">
                            <p className="text-xs text-gray-400 mb-3 px-4">MENU</p>
                            <div className="space-y-1">
                                <Button 
                                    variant={'selected'}
                                    className="text-black"
                                    size={'menu'}
                                >
                                    <LayoutDashboard size={20} strokeWidth={1} fill="#2563eb" color="#2563eb"/>
                                    <span>Dashboard</span>
                                </Button>
                                <Button 
                                    variant={'transparent'}
                                    size={'menu'}
                                > 
                                    <ChartColumnBig size={20} strokeWidth={1}/>
                                    <span>Campaigns</span>
                                </Button>
                                <Button 
                                    variant={'transparent'}
                                    size={'menu'}
                                >
                                    <Cable size={20} strokeWidth={1}/>
                                    <span>Flows</span>
                                </Button>
                                <Button 
                                    variant={'transparent'}
                                    size={'menu'}
                                >
                                    <Plug2 size={20} strokeWidth={1}/>
                                    <span>Integrations</span>
                                </Button>
                                <Button 
                                    variant={'transparent'}
                                    size={'menu'}
                                >
                                    <LayoutList size={20} strokeWidth={1}/>
                                    <span>Customers</span>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-10 flex items-center gap-3">
                        <button className="text-black text-[17px] font-semibold flex items-center gap-4">
                            <img
                                src="/assets/profile.jpeg"
                                className="rounded-full h-7 w-7"
                            />
                            <span>Tom Wang</span>
                        </button>
                    </div>
                </aside>

                {/*Main Dashboard*/}
                <main className="flex-1 px-8 pt-6 bg-white rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                        {/*Compare to last year button*/}
                        <div className="flex items-center gap-3 tracking-tight">
                            <span>Compare to</span>
                            <Button variant={'outline'} className="rounded-3xl gap-1 text-black/80">
                                Last year
                                <ChevronDown className="transition-colors"/>
                            </Button>
                        </div>
                    </div>
                    {/*Stats*/}
                    <div className="grid grid-cols-3 gap-4 mb-2">
                        <div className="p-4 border border-black border-opacity-10 rounded-2xl shadow-sm">
                            <p className="text-gray-600 mb-3 text-sm">Purchases</p>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-semibold">
                                    {Component1?.purchases}
                                </span>
                                <Badge variant={'green'} className="rounded-2xl gap-1">
                                    +32%
                                    <TrendingUp className="transition-colors" size={12}/>
                                </Badge>
                            </div>
                        </div>
                        <div className="p-4 border border-black border-opacity-10 rounded-2xl shadow-sm">
                            <p className="text-gray-600 mb-3 text-sm">Revenue</p>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-semibold">
                                    <span className="font-sans">$</span>
                                    {Component1?.revenue}
                                </span>
                                <Badge variant={'green'} className="rounded-2xl gap-1">
                                    +49%
                                    <TrendingUp className="transition-colors" size={12}/>
                                </Badge>
                            </div>
                        </div>
                        <div className="p-4 border border-black border-opacity-10 rounded-2xl shadow-sm">
                            <p className="text-gray-600 mb-3 text-sm">Refunds</p>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-semibold">
                                    <span className="font-sans">$</span>
                                    {Component1?.refunds}
                                </span>
                                <Badge variant={'red'} className="rounded-2xl gap-1">
                                    +7%
                                    <TrendingDown className="transition-colors" size={12}/>
                                </Badge>
                            </div>
                        </div>
                    </div>
                    {/*Comparisons Chart*/}
                    <div>
                        <div className="flex justify-between items-center mb-6 tracking-tight">
                            <h2 className="text-lg font-semibold">Comparison</h2>
                            <Button variant={'outline'} className="rounded-3xl gap-1 text-black/80">
                                6 months
                                <ChevronDown className="transition-colors"/>
                            </Button>
                        </div>
                        <div className="flex justify-between items-center">
                            <ProductComparison chartData={Component2 || []}/>
                        </div>
                    </div>
                    {/*Products Table*/}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-lg font-semibold">Top Products</h2>
                            <Button variant={'outline'} className="rounded-3xl gap-1 text-black/80 px-4">
                                Full results
                            </Button>
                        </div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-72">Product</TableHead>
                                    <TableHead>Sold amount</TableHead>
                                    <TableHead>Unit price</TableHead>
                                    <TableHead>Revenue</TableHead>
                                    <TableHead>Rating</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    Component6?.map((product) => (
                                        <TableRow key={product.product}>
                                            <TableCell className="flex flex-row items-center gap-1 font-medium">
                                                <img
                                                    src={`/assets/${product.product}.png`}
                                                    className="w-8 h-8 rounded-md bg-gray-200"
                                                />
                                                {product.product}
                                            </TableCell>
                                            <TableCell>{product.soldAmount}</TableCell>
                                            <TableCell>${product.unitPrice}</TableCell>
                                            <TableCell>${product.revenue}</TableCell>
                                            <TableCell>
                                                <span className="inline-flex items-center gap-1">
                                                    <Star fill="#FFAA53" color="#FFAA53" size={12}/>{product.rating}
                                                </span>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </div>
                </main>

                {/*Right Dashboard*/}
                <aside className="w-80">
                    {/*Sales Perfomance*/}
                    <div className="bg-white rounded-xl shadow-sm p-6 mb-2">
                        <div className="flex justify-center mb-1">
                            <SemiCircularProgress value={Number(Component3?.score) || 0}/>
                        </div>
                        <p className="text-center text-gray-500 mb-4 text-sm">of 100 points</p>
                        <hr className="mb-4"/>
                        <h3 className="text-lg font-bold mb-2">{Component3?.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm">{Component3?.message}</p>
                        <Button 
                            className="text-black font-normal border border-gray-600/20 rounded-3xl text-sm mb-0"
                            variant={'transparent'}
                        >
                            Improve your score
                        </Button>
                    </div>
                    {/*Customers */}
                    <div className="bg-white rounded-xl shadow-sm p-6 mb-2 flex flex-col items-start justify-start">
                        <h3 className="text-lg font-semibold mb-4">Customers by device</h3>
                        <div className="w-full items-center justify-center">
                            <CustomerDevice chartData={Component4 || []}/>
                        </div>
                    </div>
                    {/* Community Feedback */}
                    <CustomerFeedback
                        categories={[
                            { label: "Negative", count: Number(Component5?.negative) || 0, color: "bg-red-400" },
                            { label: "Neutral", count: Number(Component5?.neutral) || 0, color: "bg-yellow-400" },
                            { label: "Positive", count: Number(Component5?.positive) || 0, color: "bg-green-400" }
                        ]}
                    />
                </aside>
            </main>
        </div>
    );
}
  