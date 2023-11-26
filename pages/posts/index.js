import AllPosts from '@/components/posts/all-posts'

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

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />
}

export default AllPostsPage
