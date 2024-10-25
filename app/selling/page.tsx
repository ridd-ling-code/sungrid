import Layout from '@/app/layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Selling() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Grid Price Monitor</h1>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Current Grid Price</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold mb-2">₹16.86/kWh</p>
            <p className="text-sm text-red-500">▼ ₹2.89</p>
            <p className="text-sm text-muted-foreground">Price updates every 5 seconds (simulated)</p>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Excess Solar Energy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-2">6 kWh</p>
              <p className="text-sm text-muted-foreground">Current excess energy available to sell</p>
              <Button className="w-full mt-4" variant="secondary">Sell Excess Energy</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Current Conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2"><strong>Time:</strong> Nighttime</p>
              <p className="mb-2"><strong>Weather:</strong> Partly Cloudy</p>
              <p><strong>Solar Production:</strong> Low</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Price Thresholds</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2"><span className="text-green-500">Low (₹8 - ₹16):</span> Buy/Use</p>
              <p className="mb-2"><span className="text-yellow-500">Medium (₹16 - ₹24):</span> Normal Use</p>
              <p><span className="text-red-500">High (₹24+):</span> Sell/Conserve</p>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Energy Management Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold mb-2">Save Energy</h3>
                <ul className="list-disc list-inside">
                  <li>Use energy-intensive appliances during off-peak hours</li>
                  <li>Ensure your home is well-insulated to reduce heating/cooling costs</li>
                  <li>Switch to LED bulbs for lighting</li>
                  <li>Unplug devices when not in use to avoid phantom energy draw</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Sell Energy</h3>
                <ul className="list-disc list-inside">
                  <li>Monitor grid prices and sell excess energy during peak hours</li>
                  <li>Optimize solar panel placement for maximum production</li>
                  <li>Consider adding battery storage to store excess energy for later use or sale</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}
