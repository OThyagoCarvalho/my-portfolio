const POST_PREVIEW_GRAPHQL_FIELDS = `
title
slug
coverImage {
url
}
date
excerpt
`;

const SINGLE_POST_GRAPHQL_FIELDS = `
title
slug
coverImage {
url
}
date
excerpt
content {
  json
  links {
    assets {
      block {
        sys {
          id
        }
        url
        description
      }
    }
  }
}
`
// author {
//   name
//   picture {
//     url
//   }
// }

async function fetchGraphQL(query, preview = false) {
    return fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${
                    preview
                        ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
                        : process.env.CONTENTFUL_ACCESS_TOKEN
                }`
            },
            body: JSON.stringify({ query })
        }
    ).then(response => response.json());
}

function extractPost(fetchResponse) {
    return fetchResponse?.data?.postCollection?.items?.[0];
}

function extractPostEntries(fetchResponse) {
    return fetchResponse?.data?.postCollection?.items;
}

export async function getPreviewPostBySlug(slug) {
    const entry = await fetchGraphQL(
        `query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${SINGLE_POST_GRAPHQL_FIELDS}
        }
      }
    }`,
        true
    );
    console.log(entry);
    return extractPost(entry);
}

export async function getAllPostsWithSlug() {
    const entries = await fetchGraphQL(
        `query {
      postCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          ${SINGLE_POST_GRAPHQL_FIELDS}
        }
      }
    }`
    );
    return extractPostEntries(entries);
}

export async function getPostsForHome(preview = false) {
    const entries = await fetchGraphQL(
        `query {
      postCollection(order: date_DESC, preview: ${preview ? 'true' : 'false'}, limit: 4) {
        items {
          ${POST_PREVIEW_GRAPHQL_FIELDS}
        }
      }
    }`,
        preview
    );
    return extractPostEntries(entries);
}

export async function getPostAndMorePosts(slug, preview) {
    const entry = await fetchGraphQL(
        `query {
      postCollection(where: { slug: "${slug}" }, preview: ${
            preview ? 'true' : 'false'
        }, limit: 1) {
        items {
          ${SINGLE_POST_GRAPHQL_FIELDS}
        }
      }
    }`,
        preview
    );
    const entries = await fetchGraphQL(
        `query {
      postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
            preview ? 'true' : 'false'
        }, limit: 2) {
        items {
          ${SINGLE_POST_GRAPHQL_FIELDS}
        }
      }
    }`,
        preview
    );
    return {
        post: extractPost(entry),
        morePosts: extractPostEntries(entries)
    };
}
