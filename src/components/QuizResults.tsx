import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Trophy, RotateCcw, CheckCircle, XCircle, Star, BookOpen } from 'lucide-react';
import { type Question } from '@/data/questions';

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  userAnswers: number[];
  questions: Question[];
  onRestart: () => void;
}

export const QuizResults = ({ score, totalQuestions, userAnswers, questions, onRestart }: QuizResultsProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getGradeInfo = (percentage: number) => {
    if (percentage >= 90) return { grade: 'Excel·lent!', color: 'text-accent', icon: Star };
    if (percentage >= 80) return { grade: 'Molt bé!', color: 'text-primary', icon: Trophy };
    if (percentage >= 70) return { grade: 'Bé!', color: 'text-secondary', icon: CheckCircle };
    if (percentage >= 60) return { grade: 'Aprovat', color: 'text-muted-foreground', icon: BookOpen };
    return { grade: 'Suspès', color: 'text-destructive', icon: XCircle };
  };

  const gradeInfo = getGradeInfo(percentage);
  const GradeIcon = gradeInfo.icon;

  // Group questions by category for analysis
  const categoryStats = questions.reduce((acc, question, index) => {
    const category = question.category;
    if (!acc[category]) {
      acc[category] = { correct: 0, total: 0 };
    }
    acc[category].total++;
    if (userAnswers[index] === question.correctAnswer) {
      acc[category].correct++;
    }
    return acc;
  }, {} as Record<string, { correct: number; total: number }>);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Trophy className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Resultats del Test
            </h1>
          </div>
        </div>

        {/* Score Card */}
        <Card className="p-8 shadow-card-custom mb-8 text-center">
          <div className="space-y-6">
            <div className="flex items-center justify-center mb-4">
              <GradeIcon className={`h-16 w-16 ${gradeInfo.color}`} />
            </div>
            
            <h2 className={`text-4xl font-bold ${gradeInfo.color}`}>
              {gradeInfo.grade}
            </h2>
            
            <div className="space-y-4">
              <div className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {score}/{totalQuestions}
              </div>
              
              <div className="space-y-2">
                <div className="text-2xl font-semibold text-muted-foreground">
                  {percentage}% encerts
                </div>
                <Progress value={percentage} className="h-3 max-w-md mx-auto" />
              </div>
            </div>
            
            <Button
              onClick={onRestart}
              className="gradient-primary text-white shadow-primary"
              size="lg"
            >
              <RotateCcw className="h-5 w-5 mr-2" />
              Tornar a fer el test
            </Button>
          </div>
        </Card>

        {/* Category Analysis */}
        <Card className="p-6 shadow-card-custom mb-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Anàlisi per categories
          </h3>
          
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(categoryStats).map(([category, stats]) => {
              const categoryPercentage = Math.round((stats.correct / stats.total) * 100);
              return (
                <div key={category} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">{category}</span>
                    <Badge variant="secondary">
                      {stats.correct}/{stats.total}
                    </Badge>
                  </div>
                  <Progress value={categoryPercentage} className="h-2" />
                  <div className="text-xs text-muted-foreground text-right">
                    {categoryPercentage}%
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Detailed Results */}
        <Card className="p-6 shadow-card-custom">
          <h3 className="text-xl font-semibold mb-4">Revisió detallada</h3>
          
          <div className="space-y-4">
            {questions.map((question, index) => {
              const userAnswer = userAnswers[index];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div key={question.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-muted-foreground">
                          Pregunta {index + 1}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {question.category}
                        </Badge>
                        {isCorrect ? (
                          <CheckCircle className="h-4 w-4 text-accent" />
                        ) : (
                          <XCircle className="h-4 w-4 text-destructive" />
                        )}
                      </div>
                      <p className="font-medium mb-2">{question.question}</p>
                    </div>
                  </div>
                  
                  <div className="grid gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">La teva resposta:</span>
                      <span className={isCorrect ? 'text-accent font-medium' : 'text-destructive font-medium'}>
                        {question.options[userAnswer]}
                      </span>
                    </div>
                    
                    {!isCorrect && (
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Resposta correcta:</span>
                        <span className="text-accent font-medium">
                          {question.options[question.correctAnswer]}
                        </span>
                      </div>
                    )}
                    
                    <div className="mt-2 p-3 bg-muted/50 rounded-md">
                      <span className="text-muted-foreground text-xs font-medium">Explicació: </span>
                      <span className="text-xs">{question.explanation}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};