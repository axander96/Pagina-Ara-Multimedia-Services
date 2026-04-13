// Corregir iconos en Sanity y verificar Contacto
const token = 'sknqmJWQYR8jnlFpUlZtfxKyE879NuPqMzCXS3z1bA8X507ncmZCLipSdL9Rq0ytl777K5XP6LZZfEMVi9vghvyGnYk0HQyUo5013bVRyDR61b0Wp4t8yrTvXbxD7aBcHc1J7jnrwxUuUpPrrzLOFHXbmxWNpTnj5C87Zcs6BqopoBViGYA7';

// 1. Primero obtener todos los pasos del proceso
const stepsRes = await fetch('https://ddona00k.api.sanity.io/v2022-03-07/data/query/production?query=*[_type == "processStep"] | order(stepNumber asc) { _id, stepNumber, title, icon }', {
  headers: { 'Authorization': `Bearer ${token}` }
});
const stepsData = await stepsRes.json();

console.log('Pasos actuales:', stepsData.result);

// Iconos correctos para cada paso
const correctIcons = {
  1: 'fa-magnifying-glass',  // Descubrimiento
  2: 'fa-chess-knight',      // Estrategia (era fa-chess)
  3: 'fa-paintbrush',        // Creación (FontAwesome 6 usa paintbrush sin guión)
  4: 'fa-rocket',            // Lanzamiento
  5: 'fa-chart-line'         // Crecimiento
};

// 2. Actualizar cada paso con el icono correcto
for (const step of stepsData.result) {
  const correctIcon = correctIcons[step.stepNumber];
  if (correctIcon && step.icon !== correctIcon) {
    console.log(`Actualizando Paso ${step.stepNumber}: ${step.icon} → ${correctIcon}`);
    
    const mutation = {
      mutations: [{
        patch: {
          id: step._id,
          set: { icon: correctIcon }
        }
      }]
    };
    
    const updateRes = await fetch('https://ddona00k.api.sanity.io/v2022-03-07/data/mutate/production', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mutation)
    });
    
    const updateData = await updateRes.json();
    console.log(`✅ Paso ${step.stepNumber} actualizado:`, updateData);
  }
}

// 3. Verificar/crear documento de Contacto
const contactRes = await fetch('https://ddona00k.api.sanity.io/v2022-03-07/data/query/production?query=*[_type == "contact"][0]', {
  headers: { 'Authorization': `Bearer ${token}` }
});
const contactData = await contactRes.json();

if (!contactData.result) {
  console.log('⚠️ No existe documento de Contacto, creando...');
  
  const createContact = {
    mutations: [{
      create: {
        _type: 'contact',
        title: '¿LISTO PARA TU EVOLUCIÓN DIGITAL?',
        subtitle: 'Cuéntanos sobre tu proyecto y te enviaremos una propuesta gratuita en menos de 24 horas.',
        emailPlaceholder: 'Tu correo electrónico',
        messagePlaceholder: 'Cuéntanos sobre tu proyecto...',
        buttonText: 'Quiero mi propuesta',
        pulse: {
          projects: '+12',
          growth: '+340%',
          response: '< 2h'
        }
      }
    }]
  };
  
  const createRes = await fetch('https://ddona00k.api.sanity.io/v2022-03-07/data/mutate/production', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(createContact)
  });
  
  const createData = await createRes.json();
  console.log('✅ Contacto creado:', createData);
} else {
  console.log('✅ Contacto ya existe:', contactData.result.title);
}

console.log('\n🎉 Todos los cambios aplicados en Sanity!');
console.log('⏳ Ahora espera 1-2 minutos y refresca la página web.');
