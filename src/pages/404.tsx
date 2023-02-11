import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Layout } from "../components/shared"


const NotFoundPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <section aria-label="page not found description" className="py-16 w-full h-screen flex flex-col items-center justify-center gap-5 px-8 max-h-screen">
        <h1 className="text-3xl font-semibold">404 page not found</h1>
        <figure>
          <StaticImage src="../images/page-not-found-avatar.png" alt="Dries Delanghe's avatar looking shocked you found this page" className="w-80 aspect-auto objec" />
        </figure>
        <div className="flex flex-col gap-3 items-center max-w-xl">
          <h1 className="text-xl font-semibold text-center">Whoops! It Looks Like You Took a Wrong Turn</h1>
          <p className="text-muted text-center">
            Don't worry, it happens to the best of us. You were cruising along on my website and suddenly found yourself in the wrong place. It's like taking a detour on a road trip, it's all part of the journey!
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
