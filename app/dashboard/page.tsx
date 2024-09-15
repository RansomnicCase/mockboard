import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from './components/ui/card';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table';

const Dashboard = () => {
  const [shipWeight, setShipWeight] = useState('23740');
  const [initialVelocity, setInitialVelocity] = useState('15');
  const [departureTime, setDepartureTime] = useState('2019-07-01T00:00');

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Ship Navigation Dashboard</h1>
        
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="col-span-3 space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-blue-600 text-white">
                <h2 className="text-lg font-semibold">Ship Information</h2>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div>
                  <label htmlFor="shipWeight" className="block text-sm font-medium text-gray-700 mb-1">Ship Weight (tons)</label>
                  <Input id="shipWeight" value={shipWeight} onChange={(e) => setShipWeight(e.target.value)} className="w-full" />
                </div>
                <div>
                  <label htmlFor="initialVelocity" className="block text-sm font-medium text-gray-700 mb-1">Initial Velocity (kn)</label>
                  <Input id="initialVelocity" value={initialVelocity} onChange={(e) => setInitialVelocity(e.target.value)} className="w-full" />
                </div>
                <div>
                  <label htmlFor="departureTime" className="block text-sm font-medium text-gray-700 mb-1">Departure Time</label>
                  <Input id="departureTime" type="datetime-local" value={departureTime} onChange={(e) => setDepartureTime(e.target.value)} className="w-full" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-green-600 text-white">
                <h2 className="text-lg font-semibold">Position Information</h2>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <Input placeholder="Departure Lat" defaultValue="47" className="w-full" />
                <Input placeholder="Departure Lon" defaultValue="-52" className="w-full" />
                <Input placeholder="Destination Lat" defaultValue="41" className="w-full" />
                <Input placeholder="Destination Lon" defaultValue="-9" className="w-full" />
              </CardContent>
            </Card>
          </div>

          {/* Center Column (Map placeholder) */}
          <div className="col-span-6">
            <Card className="shadow-lg h-full">
              <CardHeader className="bg-gray-700 text-white">
                <h2 className="text-lg font-semibold">Navigation Area Sketch Map</h2>
              </CardHeader>
              <CardContent className="h-[calc(100%-4rem)] flex items-center justify-center bg-gray-200">
                <p className="text-gray-500 text-lg">Map Placeholder</p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="col-span-3 space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-purple-600 text-white">
                <h2 className="text-lg font-semibold">Weather Data</h2>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-gray-600">From 2019-07-01 00:00:00 to 2019-07-31 18:00:00</p>
                <p className="text-sm text-gray-600">Update Interval: 6 hours</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-yellow-600 text-white">
                <h2 className="text-lg font-semibold">Algorithm Parameters</h2>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Generation" defaultValue="100" readOnly className="bg-gray-100" />
                  <Input placeholder="Population" defaultValue="50" readOnly className="bg-gray-100" />
                  <Input placeholder="C1" defaultValue="2" readOnly className="bg-gray-100" />
                  <Input placeholder="C2" defaultValue="2" readOnly className="bg-gray-100" />
                  <Input placeholder="Mutation P" defaultValue="0.2" readOnly className="bg-gray-100" />
                  <Input placeholder="Crossover P" defaultValue="0.7" readOnly className="bg-gray-100" />
                  <Input placeholder="Selected P" defaultValue="0.5" readOnly className="bg-gray-100" />
                  <Select defaultValue="Glass">
                    <SelectTrigger>
                      <SelectValue placeholder="Mutation Method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Glass">Glass</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="Max V" defaultValue="0.8" readOnly className="bg-gray-100" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 space-y-6">
          <Card className="shadow-lg">
            <CardHeader className="bg-red-600 text-white">
              <h2 className="text-lg font-semibold">Route Information</h2>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Route Type</TableHead>
                    <TableHead>Distance (nm)</TableHead>
                    <TableHead>Time (hours)</TableHead>
                    <TableHead>Risk</TableHead>
                    <TableHead>Fuel (ton)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Min-Time Route</TableCell>
                    <TableCell>1870.73</TableCell>
                    <TableCell>134.043</TableCell>
                    <TableCell>0.259</TableCell>
                    <TableCell>486.546</TableCell>
                  </TableRow>
                  {/* Add more rows for other route types */}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="bg-indigo-600 text-white">
              <h2 className="text-lg font-semibold">Expected Route</h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expected Time</label>
                  <Input defaultValue="135" readOnly className="bg-gray-100" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expected Risk</label>
                  <Input defaultValue="0.24" readOnly className="bg-gray-100" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expected Fuel</label>
                  <Input defaultValue="385" readOnly className="bg-gray-100" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expected Res</label>
                  <Input defaultValue="40" readOnly className="bg-gray-100" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <Button>Show Pareto Frontier</Button>
          <Button>Show Pareto Assemble</Button>
          <Button>Show Route Information</Button>
          <Button>Show Speed Change</Button>
          <Button>Show Course Change</Button>
          <Button>Show Swave Change</Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
