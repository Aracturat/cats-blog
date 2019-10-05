import React from "react"
import { Layout } from "../components/Layout"
import { graphql, Link } from "gatsby"

export default ({ data }) => {
  const cats = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <h1>Кошки</h1>
      <div>
        {cats.map(node => (<div key={node.id}>
              <h2>{node.frontmatter.title}</h2>
              <img src={node.frontmatter.image}
                alt={node.frontmatter.title}
                style={{ width: 200, height: 200, objectFit: "cover" }}
              />
              <p>{node.excerpt}</p>
              <Link to={node.fields.slug}>Подробнее</Link>
            </div>
          ),
        )}
      </div>
    </Layout>
  )
}

export const query = graphql`
    query {
        allMarkdownRemark {
            nodes {
                id
                frontmatter {
                    title
                    image
                }
                fields {
                    slug
                }
                excerpt
            }
        }
    }
`
