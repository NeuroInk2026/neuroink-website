const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

// Vérifier que le token existe
if (!process.env.SANITY_API_TOKEN) {
  console.error('❌ ERREUR: SANITY_API_TOKEN non trouvé dans .env.local');
  console.error('Vérifiez que le fichier .env.local existe et contient SANITY_API_TOKEN');
  process.exit(1);
}

// Configuration Sanity avec le token depuis .env.local
const client = createClient({
  projectId: 'ao0f751d',
  dataset: 'production',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2024-01-01',
});

// Charger les données
const dataPath = path.join(__dirname, 'sanity-data.json');

if (!fs.existsSync(dataPath)) {
  console.error('❌ ERREUR: Fichier sanity-data.json non trouvé');
  console.error('Assurez-vous que sanity-data.json est dans le même dossier que ce script');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

async function importData() {
  console.log('🚀 Début de l\'import des données dans Sanity...\n');

  try {
    // Import des formations
    console.log('📚 Import des formations...');
    for (const formation of data.formations) {
      try {
        const result = await client.create(formation);
        console.log(`   ✅ Formation créée : ${formation.title}`);
      } catch (error) {
        console.error(`   ❌ Erreur pour ${formation.title}:`, error.message);
      }
    }

    // Import des articles
    console.log('\n📰 Import des articles...');
    for (const article of data.articles) {
      try {
        const result = await client.create(article);
        console.log(`   ✅ Article créé : ${article.title}`);
      } catch (error) {
        console.error(`   ❌ Erreur pour ${article.title}:`, error.message);
      }
    }

    console.log('\n🎉 Import terminé avec succès !');
    console.log('\n📝 Résumé :');
    console.log(`   - ${data.formations.length} formations importées`);
    console.log(`   - ${data.articles.length} articles importés`);
    console.log('\n✅ Allez sur votre site pour voir le résultat !');
    console.log('   - Formations : https://neuroink-website.vercel.app/formations');
    console.log('   - Blog : https://neuroink-website.vercel.app/blog');

  } catch (error) {
    console.error('\n❌ Erreur générale:', error);
  }
}

// Lancer l'import
importData();
