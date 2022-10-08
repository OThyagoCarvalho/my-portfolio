import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { Loading, Text } from '@nextui-org/react';

import {
    getAllPostsWithSlug,
    getPostAndMorePosts
} from '../../services/contentful/lib/api';

//  treating post content
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES, MARKS } from '@contentful/rich-text-types';

// Used to render images inside the post
// import RichTextAsset from './rich-text-asset'
// see example at: https://github.com/vercel/next.js/blob/canary/examples/cms-contentful/components/rich-text-asset.js

import CoverImage from '../../components/PostComponents/CoverImage';
import DateComponent from '../../components/PostComponents/DateComponent';

// Code block component bellow
const Code = ({ children }: any) => (
    <div className="codeBlock">
        <code className="codeText"> {children} </code>
    </div>
);

const options = {
    renderMark: {
        [MARKS.CODE]: (code: any) => <Code>{code}</Code>
    },

    // hyperlink block component bellow
    renderNode: {
        [INLINES.HYPERLINK]: (node: any) => {
            return (
                <span className="styledLink">
                    <a href={node.data.uri} target="_blank" rel="noreferrer">
                        {JSON.stringify(node.content[0].value).replace(
                            /"/g,
                            ''
                        )}
                    </a>
                </span>
            );
        }
    }
};

export default function PostPage({ post }: any) {
    const router = useRouter();
    if (!router.isFallback && !post) {
        return <ErrorPage statusCode={404} />;
    }
    return (
        <>
            {router.isFallback ? (
                <section className="mainContent">
                    <div className="maxContentContainer">
                        <Loading color="success" />
                    </div>
                </section>
            ) : (
                <section className="mainContent">
                    <div className="maxContentContainer">
                        <div className="col">
                            <h2 className="post-page-title">{post.title}</h2>
                            <CoverImage
                                title={post.title}
                                url={post.coverImage.url}
                            />
                            <DateComponent dateString={post.date} />
                            <Text size={24} className="post-page-content">
                                {documentToReactComponents(
                                    post.content.json,
                                    options
                                )}
                            </Text>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

export async function getStaticProps({ params, preview = false }: any) {
    const data = await getPostAndMorePosts(params.slug, preview);
    return {
        props: {
            preview,
            post: data?.post ?? null,
            morePosts: data?.morePosts ?? null
        }
    };
}

export async function getStaticPaths() {
    const allPosts = await getAllPostsWithSlug();
    return {
        paths: allPosts?.map(({ slug }: any) => `/posts/${slug}`) ?? [],
        fallback: true
    };
}
