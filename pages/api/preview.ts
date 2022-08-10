import type { NextApiRequest, NextApiResponse } from 'next';
import { getPreviewPostBySlug } from '../../services/contentful/lib/api';

export default async function preview(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { secret, slug } = req.query;

    if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    const post = await getPreviewPostBySlug(slug);

    if (!post) {
        return res.status(401).json({ message: "Coudn't retrieve post" });
    }

    // Enable Preview Mode by setting the cookies
    res.setPreviewData({})

    // Redirect to the path from the fetched post
    // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
    // res.writeHead(307, { Location: `/posts/${post.slug}` })
    const url = `/posts/${post.slug}`
    res.setHeader('Content-Type', 'text/html')
    res.write(
      `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
      <script>window.location.href = '${url}'</script>
      </head>
      </html>`
    )
    res.end()
}

