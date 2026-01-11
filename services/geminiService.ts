
import { GoogleGenAI } from "@google/genai";

// Initialize with named parameter as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateCaseSummary = async (caseText: string): Promise<string> => {
  if (!process.env.API_KEY) return "API Key not configured. AI features disabled.";

  try {
    // Using gemini-3-flash-preview for basic text task
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert Nigerian legal assistant. 
      Summarize the following legal judgment text into three concise bullet points focusing on the Ratio Decidendi (reason for the decision).
      
      Case Text: ${caseText.substring(0, 5000)}... (truncated for context)`,
    });

    // Access .text property directly
    return response.text || "Could not generate summary.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error communicating with AI service.";
  }
};

export const answerLegalQuestion = async (caseText: string, question: string): Promise<string> => {
  if (!process.env.API_KEY) return "API Key not configured.";

  try {
    // Using gemini-3-pro-preview for complex reasoning task
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `You are a helpful legal assistant analyzing a specific Nigerian court judgment.
      Context (Case Text): "${caseText.substring(0, 8000)}..."
      
      User Question: "${question}"
      
      Answer the user's question based strictly on the provided text. If the answer is not in the text, state that.`,
    });

    // Access .text property directly
    return response.text || "No answer generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error processing your request.";
  }
};
