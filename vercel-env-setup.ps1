$envName1 = "NEXT_PUBLIC_SANITY_PROJECT_ID"
$envValue1 = "ddona00k"
$envName2 = "NEXT_PUBLIC_SANITY_DATASET"
$envValue2 = "production"
$envName3 = "SANITY_API_TOKEN"
$envValue3 = "sknqmJWQYR8jnlFpUlZtfxKyE879NuPqMzCXS3z1bA8X507ncmZCLipSdL9Rq0ytl777K5XP6LZZfEMVi9vghvyGnYk0HQyUo5013bVRyDR61b0Wp4t8yrTvXbxD7aBcHc1J7jnrwxUuUpPrrzLOFHXbmxWNpTnj5C87Zcs6BqopoBViGYA7"

vercel env add $envName1 production --value $envValue1
vercel env add $envName2 production --value $envValue2
vercel env add $envName3 production --value $envValue3
