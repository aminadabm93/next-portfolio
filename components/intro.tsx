import Image from 'next/image'
import authorImage from '@/public/images/authors/dab_headshot.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Howdy, I&#39;m Aminadab Morales</h1>
        <p className='mt-3 font-light text-muted-foreground'>
           Software engineer, technical consultant, former teacher, and so much more. Based in Providence, RI. I&apos;m passionate
           about helping, collaborating, and educating people.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg'
          src={authorImage}
          alt='Aminadab Morales'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
