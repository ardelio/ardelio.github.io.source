import React from 'react'
import { graphql } from 'gatsby'
import { Box, Container, Stack, Typography } from '@mui/material'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'

import AppBar from '../components/pages/blog/AppBar'
import { FEATURES } from '../constants'
import Post from '../components/pages/blog/Post'
import Socials from '../components/pages/home/Socials'
import TagDrawer from '../components/pages/blog/TagDrawer'

deckDeckGoHighlightElement()

export default function Template({
  data: {
    allPublishedPosts: { distinctTags },
    publishedPost,
  },
}) {
  const SPACER = <Box />
  const BOTTOM_SPACER = <Box height="50px" />

  return (
    <Container>
      <AppBar
        pageSubtitle={`(post: ${publishedPost?.frontmatter.title})`}
        pageTitle={FEATURES.BLOG.name}
        pageUrl="N/A"
      />
      <Stack spacing={6} sx={{ height: '100%', width: '100%' }}>
        {SPACER}
        <Socials />
        {publishedPost ? (
          <Post
            {...publishedPost.frontmatter}
            html={publishedPost.html}
            id={publishedPost.id}
          />
        ) : (
          <Typography>Something went wrong...</Typography>
        )}
        <Socials />
        {BOTTOM_SPACER}
      </Stack>
      <TagDrawer tags={distinctTags} />
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
