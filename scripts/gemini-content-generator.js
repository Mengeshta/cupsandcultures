const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Content generation templates
const templates = {
  teaReview: (teaName, origin) => `
    Generate a sophisticated tea review for "${teaName}" from ${origin}.
    Include:
    - Aromatic profile (3-4 distinct notes)
    - Flavor journey (beginning, middle, finish)
    - Cultural context and traditional preparation
    - Pairing suggestions (2-3 specific foods)
    - Meditation/pairing suggestion
    Write in an elegant, sensory-rich style suitable for a luxury tea brand.
    Keep it under 200 words.
  `,
  
  eventBreakdown: (eventName, theme, attendees) => `
    Create a detailed work breakdown structure for a tea event called "${eventName}" 
    with the theme "${theme}" for ${attendees} attendees.
    
    Include:
    1. Pre-event planning (timeline with milestones)
    2. Tea selection and sourcing requirements
    3. Cultural elements and storytelling components
    4. Food pairing menu development
    5. Music and ambiance setup
    6. Guest experience flow (arrival to departure)
    7. Staff roles and responsibilities
    8. Budget considerations (3 tiers)
    
    Format as structured sections with clear action items and timelines.
  `,
  
  instagramContent: (topic) => `
    Generate 3 Instagram post variations about ${topic} for a luxury tea brand.
    Each post should include:
    - Engaging hook (first line)
    - Educational content (2-3 sentences)
    - Call to action
    - 5 relevant hashtags
    
    Topics to consider: tea rituals, cultural tea traditions, health benefits,
    seasonal tea recommendations, tea and mindfulness, tea pairing guides.
  `
};

async function generateContent(template, variables) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = templates[template](...variables);
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating content:', error);
    throw error;
  }
}

// CLI interface
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  if (!command || !templates[command]) {
    console.log('Available commands:', Object.keys(templates));
    console.log('Usage: node gemini-content-generator.js <command> <args...>');
    process.exit(1);
  }
  
  try {
    const content = await generateContent(command, args.slice(1));
    console.log('\n=== Generated Content ===\n');
    console.log(content);
    console.log('\n=== End ===\n');
  } catch (error) {
    console.error('Failed to generate content:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { generateContent, templates };
