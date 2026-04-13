const response = await fetch('https://ddona00k.api.sanity.io/v2022-03-07/data/query/production?query=*[_type == "service"] | order(order asc) { title, icon, gradient }');
const data = await response.json();
console.log('=== SERVICIOS ===');
data.result.forEach(s => console.log(`- ${s.title}: icon=${s.icon}, gradient=${s.gradient}`));

const response2 = await fetch('https://ddona00k.api.sanity.io/v2022-03-07/data/query/production?query=*[_type == "processStep"] | order(stepNumber asc) { title, icon, color }');
const data2 = await response2.json();
console.log('\n=== PASOS DEL PROCESO ===');
data2.result.forEach(s => console.log(`Paso ${s.stepNumber} - ${s.title}: icon=${s.icon}, color=${s.color}`));
