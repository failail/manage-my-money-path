import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Question } from "@/data/questionGroups";

interface QuestionRendererProps {
  question: Question;
  value: any;
  onChange: (value: any) => void;
}

const QuestionRenderer = ({ question, value, onChange }: QuestionRendererProps) => {
  const renderInput = () => {
    switch (question.type) {
      case 'text':
        return (
          <Input
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Enter your answer..."
            className="w-full"
          />
        );

      case 'number':
        return (
          <Input
            type="number"
            value={value || ''}
            onChange={(e) => onChange(e.target.value ? Number(e.target.value) : '')}
            placeholder="Enter a number..."
            min={question.validation?.min}
            max={question.validation?.max}
            className="w-full"
          />
        );

      case 'radio':
        return (
          <RadioGroup
            value={value || ''}
            onValueChange={onChange}
            className="space-y-3"
          >
            {question.options?.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`${question.id}-${option}`} />
                <Label 
                  htmlFor={`${question.id}-${option}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );

      case 'select':
        return (
          <Select value={value || ''} onValueChange={onChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please select an option..." />
            </SelectTrigger>
            <SelectContent>
              {question.options?.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case 'date':
        return (
          <Input
            type="date"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            className="w-full"
          />
        );

      default:
        return (
          <Input
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Enter your answer..."
            className="w-full"
          />
        );
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-start gap-2">
        <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-md">
          Q{question.questionNumber}
        </span>
        <div className="flex-1">
          <Label className="text-base font-medium text-foreground">
            {question.title}
            {question.required && <span className="text-destructive ml-1">*</span>}
          </Label>
        </div>
      </div>
      
      <div className="ml-12">
        {renderInput()}
      </div>
      
      {question.validation && (
        <div className="ml-12 text-xs text-muted-foreground">
          {question.validation.min !== undefined && question.validation.max !== undefined && (
            <>Value should be between {question.validation.min} and {question.validation.max}</>
          )}
          {question.validation.min !== undefined && question.validation.max === undefined && (
            <>Minimum value: {question.validation.min}</>
          )}
          {question.validation.max !== undefined && question.validation.min === undefined && (
            <>Maximum value: {question.validation.max}</>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionRenderer;