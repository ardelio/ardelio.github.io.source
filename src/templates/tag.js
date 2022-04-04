import React from 'react'
import { graphql } from 'gatsby'
import { Box, Container, Stack } from '@mui/material'
import startcase from 'lodash.startcase';

import AppBar from '../components/pages/blog/AppBar'
import TagDrawer from '../components/pages/blog/TagDrawer'
import Post from '../components/pages/blog/Post'
import { FEATURES } from '../constants'

export default function Tag({
  data: {
    allPosts: { distinctTags },
    filteredPosts: { edges },
  },
  pageContext: {
    tag
  }
}) {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <Post key={edge.node.id} post={edge.node} />)

  const SPACER = <Box />

  return (
    <Container>
      <AppBar pageName={`${FEATURES.BLOG.name} (tag: ${startcase(tag)})`} pageUrl="N/A" />
      <Stack spacing={6} sx={{ height: '100%', width: '100%' }}>
        {SPACER}
        {Posts}
      </Stack>
      <TagDrawer tags={distinctTags} /> {/*add a focus here*/}
    </Container>
  )
}

export const pageQuery = graphql`
  query ($tag: String!) {
    allPosts: allMarkdownRemark {
      distinctTags: distinct(field: frontmatter___tags)
    }
    filteredPosts: allMarkdownRemark(
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            slug
            tags
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  width: 500
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, PNG]
                  layout: FIXED
                )
              }
            }
            featuredImageAlt
          }
        }
      }
    }
  }
`
