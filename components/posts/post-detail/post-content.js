import PostHeader from './post-header'
import classes from './post-content.module.css'

const DUMMY_POSTS = {
  slug: 'cat',
  title: 'Getting Started with Nextjs',
  image: 'cat-2.png',
  date: 2022 - 12 - 10,
  content: '# This is a first post',
}

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
      {DUMMY_POSTS.content}
    </article>
  )
}

export default PostContent
