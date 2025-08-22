// import { openai } from '@ai-sdk/openai';
import { google } from '@ai-sdk/google';
import { streamObject } from 'ai';
import { starWarsFilmSchema } from '../../../schema/starWarsFilmSchema';

export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json();
  try {
    const result = streamObject({
      // model: openai('gpt-4-turbo'),
      model: google('gemini-2.0-flash'),
      schema: starWarsFilmSchema,
      prompt,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error(error);
  }
}
