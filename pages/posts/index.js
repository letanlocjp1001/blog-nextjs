import Head from 'next/head'

import AllPosts from '@/components/posts/all-posts'
import { getAllPosts } from '@/lib/posts-util'

function AllPostsPage(props) {
  return (
    <>
      <Head>
        <title>ALL MY POST </title>
        <meta
          name='description'
          content='A list of all programming-related tutorials and posts'
        />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  )
}

export function getStaticProps() {
  const AllPosts = getAllPosts()

  return {
    props: {
      posts: AllPosts,
    },
  }
}

export default AllPostsPage
