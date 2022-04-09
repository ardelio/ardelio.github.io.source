import React from 'react'
import { graphql } from 'gatsby'
import { Box, Container, Stack } from '@mui/material'

import AppBar from '../components/pages/blog/AppBar'
import { FEATURES } from '../constants'
import Post from '../components/pages/blog/Post'
import TagDrawer from '../components/pages/blog/TagDrawer'

export default function Template({
  data: {
    allPublishedPosts: { distinctTags },
    publishedPost: { frontmatter, html, id },
  },
}) {
  const SPACER = <Box />
  const BOTTOM_SPACER = <Box height="50px" />

  return (
    <Container>
      <AppBar
        pageSubtitle={`(post: ${frontmatter.title})`}
        pageTitle={FEATURES.BLOG.name}
        pageUrl="N/A"
      />
      <Stack spacing={6} sx={{ height: '100%', width: '100%' }}>
        {SPACER}
        <Post {...frontmatter} html={html} id={id} />
        <TagDrawer tags={distinctTags} />
        {BOTTOM_SPACER}
      </Stack>
    </Container>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    allPublishedPosts: allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      distinctTags: distinct(field: frontmatter___tags)
    }
    publishedPost: markdownRemark(
      id: { eq: $id }
      frontmatter: { published: { eq: true } }
    ) {
      html
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        tags
      }
    }
  }
`
