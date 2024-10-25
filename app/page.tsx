import Layout from './layout'

export default function Home() {
  return (
    <Layout>
      <div className="relative h-screen">
        <img
          src="/homepage.jpg"
          alt="House with solar panels"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to SunGrid Assistant</h1>
          <p className="text-xl mb-8">Optimize Energy, Maximize Savings</p>
        </div>
      </div>
    </Layout>
  )
}

