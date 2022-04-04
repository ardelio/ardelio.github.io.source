import React from 'react'
import { graphql } from 'gatsby'
import { Box } from '@mui/material'

export default function Tag({ data }) {
  return <Box>Template</Box>
}

export const pageQuery = graphql`
  query ($tag: String!) {
    allMarkdownRemark(filter: { frontmatter: { tags: { eq: $tag } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            date
            featuredImageAlt
          }
        }
      }
    }
  }
`
