import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const generateLuxuryContent = async (prompt: string) => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      systemInstruction: "أنت كاتب محتوى مبدع متخصص في الفخامة والتصميم الداخلي الراقي في الكويت. لغتك عربية فصحى بلمسة خليجية أنيقة ومحترفة. ركز على الجودة، التفاصيل، والتميز.",
    },
  });
  return response.text;
};
