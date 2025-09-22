import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, BookOpen, Trophy, RotateCcw } from 'lucide-react';
import { questions, type Question } from '@/data/questions';
import { QuizResults } from './QuizResults';

export const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (showAnswer) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    setShowAnswer(true);
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = selectedAnswer;
    setUserAnswers(newAnswers);

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setIsQuizComplete(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setUserAnswers([]);
    setShowAnswer(false);
    setIsQuizComplete(false);
    setScore(0);
  };

  if (isQuizComplete) {
    return (
      <QuizResults
        score={score}
        totalQuestions={questions.length}
        userAnswers={userAnswers}
        questions={questions}
        onRestart={restartQuiz}
      />
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Test de Fonaments de Programació
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Llenguatges de programació i diagrames de flux
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Pregunta {currentQuestionIndex + 1} de {questions.length}
            </span>
            <Badge variant="secondary" className="gradient-secondary text-white">
              {currentQuestion.category}
            </Badge>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="p-8 shadow-card-custom transition-smooth hover:shadow-primary">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold leading-relaxed">
              {currentQuestion.question}
            </h2>

            {/* Answer Options */}
            <div className="grid gap-3">
              {currentQuestion.options.map((option, index) => {
                let buttonClass = "w-full p-4 text-left justify-start h-auto transition-smooth";
                
                if (showAnswer) {
                  if (index === currentQuestion.correctAnswer) {
                    buttonClass += " bg-accent text-accent-foreground border-accent";
                  } else if (index === selectedAnswer && index !== currentQuestion.correctAnswer) {
                    buttonClass += " bg-destructive text-destructive-foreground border-destructive";
                  } else {
                    buttonClass += " opacity-50";
                  }
                } else if (selectedAnswer === index) {
                  buttonClass += " bg-primary text-primary-foreground border-primary shadow-primary";
                } else {
                  buttonClass += " hover:bg-muted";
                }

                return (
                  <Button
                    key={index}
                    variant="outline"
                    className={buttonClass}
                    onClick={() => handleAnswerSelect(index)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-sm font-medium flex items-center justify-center">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="flex-1">{option}</span>
                      {showAnswer && index === currentQuestion.correctAnswer && (
                        <CheckCircle className="h-5 w-5 text-accent-foreground" />
                      )}
                      {showAnswer && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                        <XCircle className="h-5 w-5 text-destructive-foreground" />
                      )}
                    </div>
                  </Button>
                );
              })}
            </div>

            {/* Explanation */}
            {showAnswer && (
              <Card className="p-4 bg-muted/50 border-accent/20">
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <h4 className="font-medium text-accent mb-1">Explicació:</h4>
                    <p className="text-sm text-muted-foreground">
                      {currentQuestion.explanation}
                    </p>
                  </div>
                </div>
              </Card>
            )}

            {/* Action Buttons */}
            <div className="flex justify-between pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Trophy className="h-4 w-4" />
                Puntuació: {score}/{questions.length}
              </div>
              
              <div className="flex gap-3">
                {!showAnswer ? (
                  <Button
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer === null}
                    className="gradient-primary text-white shadow-primary"
                  >
                    Confirmar resposta
                  </Button>
                ) : (
                  <Button
                    onClick={handleNextQuestion}
                    className="gradient-secondary text-white"
                  >
                    {currentQuestionIndex === questions.length - 1 ? 'Veure resultats' : 'Següent pregunta'}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};