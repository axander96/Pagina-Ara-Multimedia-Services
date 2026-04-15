export const siteConfigQuery = `*[_type == "siteConfig"][0] {
  ...,
  logo {
    asset->
  }
}`

export const heroQuery = `*[_type == "hero"][0]`

export const servicesQuery = `*[_type == "service"] | order(order asc) {
  _id,
  title,
  description,
  icon,
  gradient,
  features,
  order
}`

export const projectsQuery = `*[_type == "project"] | order(order asc) {
  _id,
  title,
  category,
  image,
  metric,
  isAraProject,
  order
}`

export const processStepsQuery = `*[_type == "processStep"] | order(stepNumber asc) {
  _id,
  stepNumber,
  title,
  description,
  icon,
  color
}`

export const testimonialsQuery = `*[_type == "testimonial"] | order(order asc) {
  _id,
  name,
  position,
  company,
  image,
  quote,
  rating,
  order
}`

export const aboutQuery = `*[_type == "about"][0] {
  title,
  description,
  image,
  stats,
  features
}`

export const contactQuery = `*[_type == "contact"][0] {
  title,
  subtitle,
  emailPlaceholder,
  messagePlaceholder,
  buttonText,
  pulse
}`
