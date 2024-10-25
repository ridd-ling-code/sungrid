import Layout from '@/app/layout.tsx';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, BarChart } from '@/components/ui/chart';

export default function Dashboard() {
  return (
    <Layout>
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Dashboard</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
    <Card className="shadow-lg rounded-lg bg-white">
    <CardHeader>
    <CardTitle>Current Rate</CardTitle>
    </CardHeader>
    <CardContent>
    <p className="text-3xl font-bold text-green-600">₹12/kWh</p>
    <p className="text-sm text-gray-500">-2.1% from last rate</p>
    </CardContent>
    </Card>
    <Card className="shadow-lg rounded-lg bg-white">
    <CardHeader>
    <CardTitle>Next Rate</CardTitle>
    </CardHeader>
    <CardContent>
    <p className="text-3xl font-bold text-red-600">₹14/kWh</p>
    <p className="text-sm text-gray-500">+16.7% from current rate</p>
    </CardContent>
    </Card>
    <Card className="shadow-lg rounded-lg bg-white">
    <CardHeader>
    <CardTitle>Current Usage</CardTitle>
    </CardHeader>
    <CardContent>
    <p className="text-3xl font-bold text-blue-600">3.2 kWh</p>
    <p className="text-sm text-gray-500">-0.5 kWh from last hour</p>
    </CardContent>
    </Card>
    <Card className="shadow-lg rounded-lg bg-white">
    <CardHeader>
    <CardTitle>Production Today</CardTitle>
    </CardHeader>
    <CardContent>
    <p className="text-3xl font-bold text-orange-600">18.7 kWh</p>
    <p className="text-sm text-gray-500">+2.3 kWh from yesterday</p>
    </CardContent>
    </Card>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
    <Card className="shadow-lg rounded-lg bg-white">
    <CardHeader>
    <CardTitle>Estimated vs Actual Consumption</CardTitle>
    </CardHeader>
    <CardContent>
    <div className="flex justify-center">
    <LineChart className="h-[300px] w-full" />
    </div>
    </CardContent>
    </Card>
    <Card className="shadow-lg rounded-lg bg-white">
    <CardHeader>
    <CardTitle>Estimated vs Actual Production</CardTitle>
    </CardHeader>
    <CardContent>
    <div className="flex justify-center">
    <LineChart className="h-[300px] w-full" />
    </div>
    </CardContent>
    </Card>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <Card className="shadow-lg rounded-lg bg-white">
    <CardHeader>
    <CardTitle>Grid Usage vs Solar Usage</CardTitle>
    </CardHeader>
    <CardContent>
    <div className="flex justify-center">
    <BarChart className="h-[300px] w-full" />
    </div>
    </CardContent>
    </Card>
    <Card className="shadow-lg rounded-lg bg-white">
    <CardHeader>
    <CardTitle>Grid Cost vs Savings</CardTitle>
    </CardHeader>
    <CardContent>
    <div className="flex justify-center">
    <BarChart className="h-[300px] w-full" />
    </div>
    </CardContent>
    </Card>
    </div>
    </div>
    </Layout>
  );
}
