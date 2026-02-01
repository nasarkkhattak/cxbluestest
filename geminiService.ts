import { GoogleGenAI, Type } from "@google/genai";

// Fix: Moved GoogleGenAI instance creation inside the function and added response.text validation to prevent potential null/undefined errors
export const generateCXStrategy = async (companyInfo: string, industry: 'fintech' | 'prop-firm') => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a detailed Customer Experience (CX) strategy for a company in the ${industry} sector. 
      Company Context: ${companyInfo}.
      Focus on compliance, rapid support resolution, and user trust.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            industry: { type: Type.STRING },
            analysis: { type: Type.STRING },
            recommendations: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            metrics: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  label: { type: Type.STRING },
                  value: { type: Type.STRING }
                },
                required: ["label", "value"]
              }
            }
          },
          required: ["industry", "analysis", "recommendations", "metrics"]
        }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response text returned from the model.");
    }
    
    return JSON.parse(text.trim());
  } catch (error) {
    console.error("Error generating strategy:", error);
    throw error;
  }
};