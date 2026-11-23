// Free tools shown on the /tools page. Edit prices in `pricing` to match your real rates (INR).
export const tools = [
  { id: 'cost', title: 'Website cost calculator', text: 'Get a rough price range for your website or web app.' },
  { id: 'words', title: 'Word & character counter', text: 'Count words, characters, sentences and reading time.' },
  { id: 'password', title: 'Password generator', text: 'Create strong, random passwords in one click.' },
]

export const pricing = {
  types: [
    { id: 'landing', label: 'Landing page', base: 2500 },
    { id: 'business', label: 'Business website', base: 6000 },
    { id: 'ecom', label: 'E-commerce store', base: 15000 },
    { id: 'webapp', label: 'Custom web app', base: 25000 },
  ],
  pagePrice: 500, // per extra page beyond 5 (not for web apps)
  addons: [
    { id: 'cms', label: 'Admin panel to edit content', price: 3000 },
    { id: 'seo', label: 'SEO setup', price: 1500 },
    { id: 'pay', label: 'Online payments', price: 2500 },
    { id: 'multi', label: 'Multi-language', price: 2000 },
    { id: 'form', label: 'Contact form with email alerts', price: 500 },
  ],
  rush: 0.25, // +25% for faster delivery
  range: 0.2, // show price ±20%
}
