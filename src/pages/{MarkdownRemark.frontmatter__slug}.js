import React from 'react'
import { graphql } from 'gatsby'
import { Box, Container, Stack } from '@mui/material'

import AppBar from '../components/pages/blog/AppBar'
import { FEATURES } from '../constants'
import Post from '../components/pages/blog/Post'
import TagDrawer from '../components/pages/blog/TagDrawer'

export default function Template({
  data: {
    allPosts: { distinctTags },
    post: { frontmatter, html, id },
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
    allPosts: allMarkdownRemark {
      distinctTags: distinct(field: frontmatter___tags)
    }
    post: markdownRemark(id: { eq: $id }) {
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
