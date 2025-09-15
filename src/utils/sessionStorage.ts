import { supabase } from '@/integrations/supabase/client';

// Generate a unique session token
export const generateSessionToken = (): string => {
  return crypto.randomUUID();
};

// Get or create session token
export const getSessionToken = (): string => {
  const stored = localStorage.getItem('assessment_session_token');
  if (stored) {
    return stored;
  }
  
  const newToken = generateSessionToken();
  localStorage.setItem('assessment_session_token', newToken);
  return newToken;
};

// Create session in database
export const createSession = async (sessionToken: string): Promise<string | null> => {
  try {
    const { data, error } = await supabase
      .from('assessment_sessions')
      .insert([{ session_token: sessionToken }])
      .select('id')
      .single();

    if (error) {
      console.error('Error creating session:', error);
      return null;
    }

    return data?.id || null;
  } catch (error) {
    console.error('Error creating session:', error);
    return null;
  }
};

// Save form responses
export const saveResponses = async (sessionId: string, responses: Record<string, any>): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('assessment_responses')
      .upsert([{
        session_id: sessionId,
        form_data: responses
      }], {
        onConflict: 'session_id'
      });

    if (error) {
      console.error('Error saving responses:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error saving responses:', error);
    return false;
  }
};

// Load form responses
export const loadResponses = async (sessionId: string): Promise<Record<string, any> | null> => {
  try {
    const { data, error } = await supabase
      .from('assessment_responses')
      .select('form_data')
      .eq('session_id', sessionId)
      .single();

    if (error) {
      console.error('Error loading responses:', error);
      return null;
    }

    return (data?.form_data as Record<string, any>) || null;
  } catch (error) {
    console.error('Error loading responses:', error);
    return null;
  }
};

// Save assessment results
export const saveResults = async (sessionId: string, results: any): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('assessment_results')
      .upsert([{
        session_id: sessionId,
        results_data: results
      }], {
        onConflict: 'session_id'
      });

    if (error) {
      console.error('Error saving results:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error saving results:', error);
    return false;
  }
};

// Get session ID from token
export const getSessionId = async (sessionToken: string): Promise<string | null> => {
  try {
    const { data, error } = await supabase
      .from('assessment_sessions')
      .select('id')
      .eq('session_token', sessionToken)
      .single();

    if (error) {
      console.error('Error getting session ID:', error);
      return null;
    }

    return data?.id || null;
  } catch (error) {
    console.error('Error getting session ID:', error);
    return null;
  }
};