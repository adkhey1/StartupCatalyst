import { useState } from 'react'

import Button from './ui/Button';
import Textarea from './ui/Textarea';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/Card';


function Homepage() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async () => {
    setIsLoading(true)
    // Simulating AI response
    await new Promise(resolve => setTimeout(resolve, 2000))
    setOutput("Use AWS Lambda for serverless functions, MongoDB for a scalable NoSQL database and Stripe for payment integration")
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">AI Startup Architect</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="conditions" className="block text-sm font-medium text-gray-700 mb-1">
              Enter your startup conditions:
            </label>
            <Textarea
              id="conditions"
              placeholder="e.g., An e-commerce start-up needs a scalable and secure cloud architecture for payment processing"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={4}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <Button onClick={handleSubmit} disabled={isLoading || !input} className="w-full">
            {isLoading ? 'Generating Architecture...' : 'Generate Architecture'}
          </Button>
          {output && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Recommended Architecture:</h3>
              <div className="bg-white p-4 rounded-md border">
                {output}
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="text-center text-sm text-gray-500">
          AI-powered architecture recommendations for your startup
        </CardFooter>
      </Card>
    </div>
  )
}

export default Homepage;