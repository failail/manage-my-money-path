-- Create assessment sessions table for anonymous users
CREATE TABLE public.assessment_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_token TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create assessment responses table
CREATE TABLE public.assessment_responses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID NOT NULL REFERENCES public.assessment_sessions(id) ON DELETE CASCADE,
  form_data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create assessment results table
CREATE TABLE public.assessment_results (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID NOT NULL REFERENCES public.assessment_sessions(id) ON DELETE CASCADE,
  results_data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.assessment_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assessment_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assessment_results ENABLE ROW LEVEL SECURITY;

-- Create policies for anonymous access
CREATE POLICY "Allow anonymous access to sessions" 
ON public.assessment_sessions 
FOR ALL 
USING (true);

CREATE POLICY "Allow anonymous access to responses" 
ON public.assessment_responses 
FOR ALL 
USING (true);

CREATE POLICY "Allow anonymous access to results" 
ON public.assessment_results 
FOR ALL 
USING (true);

-- Create indexes for performance
CREATE INDEX idx_assessment_responses_session_id ON public.assessment_responses(session_id);
CREATE INDEX idx_assessment_results_session_id ON public.assessment_results(session_id);
CREATE INDEX idx_assessment_sessions_token ON public.assessment_sessions(session_token);