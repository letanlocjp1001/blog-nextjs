import Hero from '@/components/home-page/hero'
import FeaturedPosts from '@/components/home-page/featured-posts'

const DUMMY_POSTS = [
  {
    slug: 'cat',
    title: 'Getting Started with Nextjs',
    image: 'cat-2.png',
    excerpt: 'Nextjs is a the React framework',
    date: 2022 - 12 - 10,
  },
  {
    slug: 'cat',
    title: 'Getting Started with Nextjs',
    image: 'cat-2.png',
    excerpt: 'Nextjs is a the React framework',
    date: 2022 - 12 - 10,
  },
  {
    slug: 'cat',
    title: 'Getting Started with Nextjs',
    image: 'cat-2.png',
    excerpt: 'Nextjs is a the React framework',
    date: 2022 - 12 - 10,
  },
]

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  )
}

export default HomePage
