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

const imagesDir = path.join(
  __dirname,
  '../src/assets/images'
);
const outputFile = path.join(
  __dirname,
  '../src/data/images.ts'
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
    const prompt = `Please provide ALT text for this image from the CIIIC Annual Meet-up event. This is a professional event photo. Please provide concise ALT text that we can use so that blind/visually impaired people have an idea of what is in the image. Focus on the main subject, action, and context. Keep it under 125 characters.`;

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
      .replace(/^\d+_/, '')
      .replace(/_/g, ' ')
      .replace(/\.[^/.]+$/, '')
      .replace(/Photo-Ben-Houdijk_lr_\d+/, '')
      .trim();
  }
}

async function generateImageData() {
  const files = fs.readdirSync(imagesDir);
  const imageData = [];
  let processedCount = 0;
  const totalImages = files.filter((file) =>
    file.match(/\.(jpeg|jpg|png)$/i)
  ).length;

  for (const file of files) {
    if (file.match(/\.(jpeg|jpg|png)$/i)) {
      processedCount++;
      console.log(
        `\nProcessing image ${processedCount} of ${totalImages}`
      );

      const imagePath = path.join(imagesDir, file);
      const { width, height } = await getImageDimensions(
        imagePath
      );

      // Generate AI-powered alt text
      const altText = await generateAltText(
        imagePath,
        file
      );

      imageData.push({
        src: `/src/assets/images/${file}`,
        alt: altText,
        width,
        height,
      });
    }
  }

  // Sort by filename to maintain consistent order
  imageData.sort((a, b) => a.src.localeCompare(b.src));

  const output = `export interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const images: ImageData[] = ${JSON.stringify(
    imageData,
    null,
    2
  )};
`;

  fs.writeFileSync(outputFile, output);
  console.log(
    `\nCompleted! Generated image data for ${imageData.length} images`
  );
}

generateImageData().catch(console.error);
