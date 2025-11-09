import { GoogleGenAI, Type } from "@google/genai";
import { MarketAnalysisResult } from '../types';

const getGeminiService = () => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const fetchMarketAnalysis = async (productIdea: string): Promise<MarketAnalysisResult> => {
  try {
    const ai = getGeminiService();
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are an expert market analyst specializing in the organic and sustainable products industry. A user wants to launch a new product.

        Product Idea: "${productIdea}"

        Please provide a concise market analysis.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            targetAudience: {
              type: Type.STRING,
              description: "A description of the ideal customer demographic and psychographic profile.",
            },
            potentialCompetition: {
              type: Type.STRING,
              description: "A summary of potential competitor types or brands.",
            },
            marketingSuggestions: {
              type: Type.STRING,
              description: "A list of actionable marketing tips for this product.",
            },
          },
        },
      },
    });

    const jsonString = response.text.trim();
    const result: MarketAnalysisResult = JSON.parse(jsonString);
    return result;
  } catch (error) {
    console.error("Error fetching market analysis:", error);
    throw new Error("Failed to get market analysis from AI. Please check your API key and try again.");
  }
};

export const generateBrandDescription = async (brandName: string): Promise<string> => {
    try {
      const ai = getGeminiService();
      
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `You are an expert brand copywriter specializing in the organic and sustainable products industry. 
        A seller needs a compelling brand description for their landing page.
        
        Brand Name: "${brandName}"
  
        Please generate a short, engaging, and welcoming brand description (around 30-50 words) that captures the essence of this brand. 
        Focus on natural, authentic, and high-quality aspects. Do not use JSON, just return the plain text of the description.`,
      });
  
      return response.text.trim();
    } catch (error) {
      console.error("Error generating brand description:", error);
      throw new Error("Failed to generate brand description from AI.");
    }
  };
