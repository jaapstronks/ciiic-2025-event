import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import OpenAI from 'openai';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const illustrationsDir = path.join(
  __dirname,
  '../public/images/illustrations'
);
const outputFile = path.join(
  __dirname,
  '../src/data/illustrations.ts'
);

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getImageDimensions(imagePath) {
  try {
    const metadata = await sharp(imagePath).metadata();
    return {
      width: metadata.width,
      height: metadata.height,
    };
  } catch (error) {
    console.error(
      `Error getting dimensions for ${imagePath}:`,
      error
    );
    return { width: 1920, height: 1080 }; // fallback dimensions
  }
}

async function generateAltText(imagePath, filename) {
  try {
    // Read the image file
    const imageBuffer = fs.readFileSync(imagePath);

    // Convert image to base64
    const base64Image = imageBuffer.toString('base64');

    // Prepare the prompt
    const prompt = `Please provide ALT text for this illustration from the CIIIC Annual Meet-up event. This is a professional illustration. Please provide concise ALT text that we can use so that blind/visually impaired people have an idea of what is in the illustration. Focus on the main subject, style, and context. Keep it under 125 characters.`;

    console.log(`Processing: ${filename}`);

    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: prompt },
            {
              type: 'image_url',
              image_url: {
                url: `data:image/jpeg;base64,${base64Image}`,
              },
            },
          ],
        },
      ],
      max_tokens: 300,
    });

    const altText =
      response.choices[0].message.content.trim();
    console.log(
      `Generated alt text for ${filename}: ${altText}`
    );
    return altText;
  } catch (error) {
    console.error(
      `Error generating alt text for ${filename}:`,
      error
    );
    if (error.response) {
      console.error('API Response:', error.response.data);
    }
    // Fallback to basic alt text if AI generation fails
    return filename
      .replace(/_/g, ' ')
      .replace(/\.[^/.]+$/, '')
      .trim();
  }
}

async function generateIllustrationData() {
  const files = fs.readdirSync(illustrationsDir);
  const illustrationData = [];
  let processedCount = 0;
  const totalIllustrations = files.filter((file) =>
    file.match(/\.(jpeg|jpg|png)$/i)
  ).length;

  for (const file of files) {
    if (file.match(/\.(jpeg|jpg|png)$/i)) {
      processedCount++;
      console.log(
        `\nProcessing illustration ${processedCount} of ${totalIllustrations}`
      );

      const imagePath = path.join(illustrationsDir, file);
      const { width, height } = await getImageDimensions(
        imagePath
      );

      // Generate AI-powered alt text
      const altText = await generateAltText(
        imagePath,
        file
      );

      illustrationData.push({
        src: `/images/illustrations/${file}`,
        alt: altText,
        width,
        height,
      });
    }
  }

  // Sort by filename to maintain consistent order
  illustrationData.sort((a, b) =>
    a.src.localeCompare(b.src)
  );

  const output = `export interface IllustrationData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const illustrations: IllustrationData[] = ${JSON.stringify(
    illustrationData,
    null,
    2
  )};
`;

  fs.writeFileSync(outputFile, output);
  console.log(
    `\nCompleted! Generated illustration data for ${illustrationData.length} illustrations`
  );
}

generateIllustrationData().catch(console.error);
