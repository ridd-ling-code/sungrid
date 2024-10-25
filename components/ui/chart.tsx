"use client"

import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { BarChart as RechartsBarChart, Bar } from 'recharts'

export function LineChart({ className }: { className?: string }) {
  const data = [
    { name: '00:00', value: 300 },
    { name: '04:00', value: 400 },
    { name: '08:00', value: 600 },
    { name: '12:00', value: 800 },
    { name: '16:00', value: 600 },
    { name: '20:00', value: 400 },
  ]

  return (
    <ResponsiveContainer width="100%" height="100%" className={className}>
      <RechartsLineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="hsl(var(--chart-1))" />
      </RechartsLineChart>
    </ResponsiveContainer>
  )
}

export function BarChart({ className }: { className?: string }) {
  const data = [
    { name: '00:00', value1: 200, value2: 100 },
    { name: '04:00', value1: 300, value2: 200 },
    { name: '08:00', value1: 100, value2: 400 },
    { name: '12:00', value1: 50, value2: 600 },
    { name: '16:00', value1: 400, value2: 300 },
    { name: '20:00', value1: 500, value2: 100 },
  ]

  return (
    <ResponsiveContainer width="100%" height="100%" className={className}>
      <RechartsBarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value1" fill="hsl(var(--chart-1))" />
        <Bar dataKey="value2" fill="hsl(var(--chart-2))" />
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}
