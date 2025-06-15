'use client'
import React, { useState, useEffect, useMemo } from 'react';
import { Chrono } from 'react-chrono';
import { useTheme } from 'next-themes';
export const runtime = "edge";

export default function ExperiencesPage() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  // Memoize dark theme based on resolvedTheme
  const dark_theme = useMemo(
    () => ({
      primary: 'grey',
      cardBgColor: resolvedTheme === 'dark' ? '#191919' : 'white',
      titleColor: resolvedTheme === 'dark' ? 'white' : 'black',
      titleColorActive: 'red',
      cardDetailsColor: resolvedTheme === 'dark' ? '#dddddd' : 'black',
      cardSubtitleColor: 'orange',
      cardTitleColor: resolvedTheme === 'dark' ? '#dddddd' : 'black',
      detailsColor: 'black',
    }),
    [resolvedTheme]
  );
  if (!mounted) {
    return null;
  }

  const items = [
    {
      title: 'May 2017',
      cardTitle: 'Graduated University',
      cardSubtitle: 'University of Texas at Austin',
      cardDetailedText: 'B.S. Physics - Minor in Mathematics, Computer Science Certificate, Teaching Certificate',
    },
    {
      title: 'August 2017',
      cardTitle: 'Cedars International Next Generation High School Teacher',
      cardSubtitle: 'Algebra 2 & Statistics',
      cardDetailedText:
        'Project-Based Learning is easily the coolest way to teach. In each class, students are grouped in teams of 2-4, collaborating to create a product and present it to a professional in the field. This experience taught me a lot about project planning, creating timelines, and countless other management skills.',
    },
    {
      title: 'December 2020',
      cardTitle: 'Full-Stack Web Development Certificate',
      cardSubtitle: 'University of Texas C.E. Certificate',
      cardDetailedText:
        "Wanted to refresh my CS skills so I enrolled in a Web Dev bootcamp. MERN stack. Created a website for a local sushi restaurant that is no longer in business. Here's the repo INSERT REPO LINK",
    },
    {
      title: 'March 2021',
      cardTitle: 'Associate Technical Consultant',
      cardSubtitle: 'Salesforce',
      cardDetailedText: 'Consulted and worked with health & energy clients. Omnistudio & LWC specialist',
    },
    {
      title: 'March 2022',
      cardTitle: 'Software Engineer II',
      cardSubtitle: 'H-E-B',
      cardDetailedText:
        'Corporate communications team. Developed Java backends and frontends using LWC and React for over 140k users. Played a pivotal role as part of a strong product and engineering team whose main goals were to inform employees and promote their support.',
    },
    {
      title: 'June 2024',
      cardTitle: 'Moved to R.I.',
      cardSubtitle: 'Wife and I wanted a change in scenery :)',
      cardDetailedText: 'Previous company would not keep me remote',
    },
    {
      title: 'November 2024',
      cardTitle: 'Salesforce Developer & Technical Consultant',
      cardSubtitle: 'Clarus Group',
      cardDetailedText:
        'In addition to being a developer, I had the opportunity to truly own the product and project process. Working in a smaller team allowed me to wear many hats, and I loved engaging with clients. Understanding their business processes and crafting technical solutions felt almost like an art. It reminded me of teaching—where you have to speak another language while also explaining complex logic.',
    },
  ];


  return (
    <section className="pt-[10%]">
      <div className='container max-w-3xl mb-8'>
                <h1 className='title mb-8'>Life Timeline</h1>
                Just some important times in my life. If you&apos;d like my resume you can <a className="underline" target='_blank' href='https://drive.google.com/file/d/1Ng3ihEDXu4IPFtgJX6XFJJ0lTWNwfuDj/view?usp=sharing'>click here</a>
            </div>
      <div className="container max-w-screen">
        <Chrono
          key={resolvedTheme}
          items={items}
          theme={dark_theme}
          mode="VERTICAL_ALTERNATING"
          toolbarPosition="BOTTOM"
          disableInteraction
          disableToolbar
          enableDarkToggle
          showAllCardsHorizontal
        />
      </div>
    </section>
  );
}