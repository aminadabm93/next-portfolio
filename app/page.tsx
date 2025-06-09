import Intro from '@/components/intro'

export default function Home() {
  return (
    <section className='pt-[20%]'>
      <div className='container max-w-4xl'>
        <Intro />

        {/* <RecentPosts />
        <RecentProjects /> */}
        {/* maybe show something in desktop*/}
        {/* <NewsletterForm /> */}
      </div>
    </section>
  )
}
