import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"

export default ({ data }) => {
  const cat = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{cat.frontmatter.title}</h1>
        <img src={cat.frontmatter.image}
          alt={cat.frontmatter.title}
          style={{ width: 200, height: 200, objectFit: "cover" }}
        />
        <div dangerouslySetInnerHTML={{ __html: cat.html }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                image
            }
        }
    }
`
