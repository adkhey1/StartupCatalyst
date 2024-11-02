import { useState } from 'react'

import Button from './ui/Button';
import Input from './ui/Input';
import ProgressBar from './ui/ProgressBar';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/Card';
import Image from '../assets/Finius.jpg'


function Homepage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState(Array(10).fill(''))
  const [output, setOutput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const questions = [
    "What is your startup's primary industry?",
    "What problem does your startup solve?",
    "Who is your target audience?",
    "What is your unique value proposition?",
    "What are your primary revenue streams?",
    "Who are your main competitors?",
    "What is your go-to-market strategy?",
    "What is your current team size and composition?",
    "What stage is your startup in (idea, MVP, growth, etc.)?",
    "What are your funding needs and plans?"
  ]

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleInputChange = (e) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = e.target.value
    setAnswers(newAnswers)
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    // Simulating AI response
    await new Promise(resolve => setTimeout(resolve, 2000))
    setOutput("Based on your inputs, we recommend: AWS Lambda for serverless functions, MongoDB for a scalable NoSQL database, and Stripe for payment integration. Consider using Docker for containerization and Kubernetes for orchestration to ensure scalability and ease of deployment.")
    setIsLoading(false)
  }

  const handleDelete = () => {
    setOutput('')
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="flex items-center justify-between">
          <div className="flex items-center">
            <CardTitle>AI Startup Architect</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ProgressBar progress={progress} />
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Question {currentQuestion + 1} of {questions.length}
            </h3>
            <p className="text-gray-700 mb-2">{questions[currentQuestion]}</p>
            <Input
              id={`question-${currentQuestion}`}
              placeholder="Your answer"
              value={answers[currentQuestion]}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-between">
            <Button 
              onClick={handlePrevious} 
              disabled={currentQuestion === 0}
              className="w-auto"
            >
              Previous
            </Button>
            {currentQuestion < questions.length - 1 ? (
              <Button 
                onClick={handleNext} 
                disabled={!answers[currentQuestion]}
                className="w-auto"
              >
                Next
              </Button>
            ) : (
              <Button 
                onClick={handleSubmit} 
                disabled={isLoading || !answers[currentQuestion]}
                className="w-auto"
              >
                {isLoading ? 'Generating Architecture...' : 'Generate Architecture'}
              </Button>
            )}
          </div>
          {output && (
            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Recommended Architecture:</h3>
                <button
                  onClick={handleDelete}
                  className="text-sm text-red-600 hover:text-red-800 focus:outline-none"
                >
                  Delete
                </button>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-gray-700">
                {output}
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <p className="text-sm text-gray-500">
            AI-powered architecture recommendations for your startup
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Homepage;