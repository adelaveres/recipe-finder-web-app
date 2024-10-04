
import { GoogleGenerativeAI, SchemaType  } from "@google/generative-ai";



export const fetchRecipes = async (query, setLoading) => {

    setLoading(true);

    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);


    const schema = {
        description: "List of recipes",
        type: SchemaType.ARRAY,
        items: {
            type: SchemaType.OBJECT,
            properties: {
                id: {
                    type: SchemaType.STRING,
                    description: "Unique identifier for the recipe",
                    nullable: false,
                },
                title: {
                    type: SchemaType.STRING,
                    description: "Name of the recipe",
                    nullable: false,
                },
                time: {
                    type: SchemaType.NUMBER,
                    description: "Estimated cooking/preparation time in minutes",
                    nullable: false,
                },
                ingredients: {
                    type: SchemaType.ARRAY,
                    description: "List of ingredients required for the recipe",
                    items: {
                        type: SchemaType.STRING,
                    },
                    nullable: false,
                },
                instructions: {
                    type: SchemaType.STRING,
                    description: "Instructions for preparing the recipe",
                    nullable: false,
                },
            },
            required: ["id", "title", "ingredients", "instructions"],
        },
    };

    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-pro",
        generationConfig: {
          responseMimeType: "application/json",
          responseSchema: schema,
        },
      });

      const prompt = `Find 3 recipes with ${query}`;

      try {
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
        const recipes = JSON.parse(result.response.text());

        return recipes;
    } catch (error) {
        console.error('Error fetching recipe:', error);
    } finally {
        setLoading(false);
    }

};
