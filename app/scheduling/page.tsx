import Layout from '@/app/layout.tsx';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Scheduling() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Appliance Scheduler</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Schedule Your Appliances</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <Select>
                    <option value="">Select Appliance</option>
                    <option value="dryer">Dryer</option>
                    <option value="ev-charger">EV Charger</option>
                    <option value="dishwasher">Dishwasher</option>
                  </Select>
                  <Input type="time" placeholder="Start Time" />
                  <Input type="number" placeholder="Duration (hours)" min="0" step="0.5" />
                </div>
                <Button className="w-full">Add Another Appliance</Button>
                <Button className="w-full" variant="default">Save Schedule</Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Energy Usage Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">0.00 kWh</p>
                <p className="text-sm text-muted-foreground">Estimated total energy usage</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Scheduling Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2"><strong>Peak Hours:</strong> 2 PM - 8 PM</p>
                <p className="mb-2"><strong>Off-Peak Hours:</strong> 8 PM - 2 PM</p>
                <p>Avoid scheduling during peak hours to reduce costs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}
