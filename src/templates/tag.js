import React from 'react'
import { graphql } from 'gatsby'
import { Box, Container, Stack } from '@mui/material'
import startcase from 'lodash.startcase'

import AppBar from '../components/pages/blog/AppBar'
import TagDrawer from '../components/pages/blog/TagDrawer'
import PostCard from '../components/pages/blog/PostCard'
import { FEATURES } from '../constants'

export default function Tag({
  data: {
    allPublishedPosts: { distinctTags },
    publishedPostsForTag: { edges },
  },
  pageContext: { tag },
}) {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostCard key={edge.node.id} post={edge.node} />)

  const SPACER = <Box />
  const BOTTOM_SPACER = <Box height="50px" />

  return (
    <Container>
      <AppBar
        pageSubtitle={`(tag: ${startcase(tag)})`}
        pageTitle={FEATURES.BLOG.name}
        pageUrl="N/A"
      />
      <Stack spacing={6} sx={{ height: '100%', width: '100%' }}>
        {SPACER}
        {Posts}
        {BOTTOM_SPACER}
      </Stack>
      <TagDrawer selected={tag} tags={distinctTags} />
    </Container>
  )
}

export const pageQuery = graphql`
  query ($tag: String!) {
    allPublishedPosts: allMarkdownRemark(
      filter: {frontmatter: {published: {eq: true}}}
    ) {
      distinctTags: distinct(field: frontmatter___tags)
    }
    publishedPostsForTag: allMarkdownRemark(
      filter: { frontmatter: { tags: { eq: $tag }, published: {eq: true} } }
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
