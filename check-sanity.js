const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'ddona00k',
  dataset: 'production',
  apiVersion: '2024-03-12',
  token: 'sknqmJWQYR8jnlFpUlZtfxKyE879NuPqMzCXS3z1bA8X507ncmZCLipSdL9Rq0ytl777K5XP6LZZfEMVi9vghvyGnYk0HQyUo5013bVRyDR61b0Wp4t8yrTvXbxD7aBcHc1J7jnrwxUuUpPrrzLOFHXbmxWNpTnj5C87Zcs6BqopoBViGYA7',
  useCdn: false,
});

async function checkData() {
  console.log('Verificando datos en Sanity...\n');
  
  try {
    // Check Hero
    const hero = await client.fetch(`*[_type == "hero"][0]`);
    console.log('Hero:', JSON.stringify(hero, null, 2));
    
    // Check Site Config
    const siteConfig = await client.fetch(`*[_type == "siteConfig"][0]`);
    console.log('\nSite Config:', JSON.stringify(siteConfig, null, 2));
    
    // Check About
    const about = await client.fetch(`*[_type == "about"][0]`);
    console.log('\nAbout:', JSON.stringify(about, null, 2));
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

checkData();
