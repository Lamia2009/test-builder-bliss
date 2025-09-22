import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, BookOpen, Trophy, RotateCcw, Code2, Cpu } from 'lucide-react';
import { questions, type Question } from '@/data/questions';
import { QuizResults } from './QuizResults';
import { TechDecorations } from './TechDecorations';

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
    <div className="min-h-screen py-8 px-4 relative">
      <TechDecorations />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 animate-slide-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative">
              <Code2 className="h-10 w-10 text-primary animate-tech-pulse" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Test de Fonaments de Programació
            </h1>
            <div className="relative">
              <Cpu className="h-10 w-10 text-secondary animate-float" />
            </div>
          </div>
          <p className="text-muted-foreground text-lg">
            Llenguatges de programació i diagrames de flux
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Pregunta {currentQuestionIndex + 1} de {questions.length}
            </span>
            <Badge variant="secondary" className="gradient-secondary text-white shadow-md">
              {currentQuestion.category}
            </Badge>
          </div>
          <div className="relative">
            <Progress value={progress} className="h-3 shadow-sm" />
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-primary opacity-20 rounded-full" 
                 style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        {/* Question Card */}
        <Card className="p-8 shadow-card-custom transition-smooth hover:shadow-primary relative overflow-hidden animate-slide-up" 
              style={{ animationDelay: '0.4s' }}>
          {/* Tech decoration overlay */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M20 20 L80 20 L80 80 L20 80 Z M40 40 L60 40 L60 60 L40 60 Z" 
                    fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
            </svg>
          </div>
          
          <div className="space-y-6 relative z-10">
            <h2 className="text-xl font-semibold leading-relaxed flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-primary">
                <span className="text-white font-bold text-sm">{currentQuestionIndex + 1}</span>
              </div>
              <span className="flex-1">{currentQuestion.question}</span>
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
                    <div className="flex items-center gap-3 w-full">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-secondary text-white text-sm font-bold flex items-center justify-center shadow-sm transition-transform hover:scale-110">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="flex-1 text-left">{option}</span>
                      <div className="flex-shrink-0">
                        {showAnswer && index === currentQuestion.correctAnswer && (
                          <CheckCircle className="h-5 w-5 text-accent-foreground animate-pulse" />
                        )}
                        {showAnswer && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                          <XCircle className="h-5 w-5 text-destructive-foreground animate-pulse" />
                        )}
                      </div>
                    </div>
                  </Button>
                );
              })}
            </div>

            {/* Explanation */}
            {showAnswer && (
              <Card className="p-5 bg-gradient-to-r from-muted/30 to-muted/50 border-accent/20 animate-slide-up relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10 pointer-events-none">
                  <BookOpen className="w-full h-full text-accent" />
                </div>
                <div className="flex items-start gap-3 relative z-10">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
                      Explicació
                      <div className="w-1 h-1 bg-accent rounded-full animate-pulse"></div>
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {currentQuestion.explanation}
                    </p>
                  </div>
                </div>
              </Card>
            )}

            {/* Action Buttons */}
            <div className="flex justify-between items-center pt-6 border-t border-border/50">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-accent animate-pulse-glow" />
                  <span className="font-medium">Puntuació:</span>
                </div>
                <div className="px-3 py-1 bg-gradient-primary rounded-full text-white font-bold text-xs shadow-sm">
                  {score}/{questions.length}
                </div>
              </div>
              
              <div className="flex gap-3">
                {!showAnswer ? (
                  <Button
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer === null}
                    className="gradient-primary text-white shadow-primary hover:shadow-lg transition-shadow px-6"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Confirmar resposta
                  </Button>
                ) : (
                  <Button
                    onClick={handleNextQuestion}
                    className="gradient-secondary text-white shadow-lg hover:shadow-xl transition-shadow px-6"
                  >
                    {currentQuestionIndex === questions.length - 1 ? (
                      <>
                        <Trophy className="h-4 w-4 mr-2" />
                        Veure resultats
                      </>
                    ) : (
                      <>
                        <Code2 className="h-4 w-4 mr-2" />
                        Següent pregunta
                      </>
                    )}
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