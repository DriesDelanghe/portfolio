import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Layout } from "../components/shared"
import { LinkPrimary } from "../components/shared/link-primary.component"
import { LinkSecondary } from "../components/shared/link-secondary.component"
//@ts-ignore
import HomepageAvatar from '../images/homepage-avatar.png';
//@ts-ignore
import AboutAvatar from '../images/about-me-avatar.png';

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <main>
      <Layout location={location}>
        <div className="snap-mandatory snap-y scroll-smooth overflow-scroll h-screen flex flex-col px-8">
          <LandingSection />
          <AboutSection />
        </div>
      </Layout>
    </main>
  )
}

const LandingSection = () => {

  return (
    <section className="h-screen flex flex-col snap-always snap-start shrink-0" aria-label="landing page">
      <div className="flex md:items-center h-full lg:px-24">
        <div className="flex gap-10 flex-col md:flex-row items-center md:items-start pt-10 md:pt-0">
          <figure>
            <img src={HomepageAvatar} className="w-52 aspect-square" alt="avatar of Dries Delanghe holding a cup of tea" />
          </figure>
          <section aria-label="welcome text" className="max-w-xl flex flex-col gap-10">
            <div className="flex gap-2 md:gap-5 flex-col">
              <h1 className="text-3xl font-semibold">
                Hi I'm <span className="text-theme">Dries Delanghe</span> <br />
                A frontend webdeveloper and designer <br />
                based in Belgium
              </h1>
              <p className="text-muted">
                Whether you're here to learn more about my skills and experience, or simply to admire the work I've created, I'm glad you're here.
              </p>
            </div>
            <div className="flex gap-5 items-center justify-center md:justify-start">
              <LinkPrimary path="/work" title="View my work" />
              <LinkSecondary path="mailto:dries.delanghe@nara.to" title="Get in touch" />
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

const AboutSection = () => {

  return (
    <section aria-label="about me" className="min-h-screen flex flex-col items center snap-always snap-start shrink-0">
      <div className="flex flex-col items-center gap-10 pt-10 md:pt-20">
        <figure>
          <img src={AboutAvatar} className="w-52 aspect-square" alt="avatar of Dries Delanghe waving at you" />
        </figure>
        <div className="flex flex-col items-center gap-5 max-w-xl">
          <h2 className="text-3xl font-semibold">
            About me
          </h2>
          <p className="text-muted">
            My name is Dries Delanghe, and I'm a frontend web developer and designer with a knack for turning complex problems into beautiful, user-friendly solutions. I see an opportunity in everything, and it drives me to always strive for excellence in my work.
            <br /> <br />
            With experience in fullstack web development and mobile app development, I bring a diverse skill set to the table. My ultimate goal is to help businesses like yours succeed by creating digital solutions that are not only visually appealing but also highly functional and user-friendly.
            <br /><br />
            I'm a dreamer at heart, and I'm always looking for new ways to push the boundaries of what's possible in the digital world. So, if you're looking for a frontend developer and designer who is dedicated to turning your vision into reality, look no further.
          </p>
        </div>
      </div>
    </section>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Portfolio - Dries Delanghe</title>
