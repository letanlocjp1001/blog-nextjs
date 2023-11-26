import Image from 'next/image'
import classes from './hero.module.css'

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/cat-1.png'
          alt='An image showing Cat'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Kaneki</h1>
      <p>
        I blog about web development - sepecially fontend farmeworks like
        Angular or React
      </p>
    </section>
  )
}

export default Hero
