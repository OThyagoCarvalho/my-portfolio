import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { Loading, Text, useTheme } from '@nextui-org/react';

import {
    getAllPostsWithSlug,
    getPostAndMorePosts
} from '../../services/contentful/lib/api';

//  treating post content
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import CoverImage from '../../components/Post Components/CoverImage';
// import RichTextAsset from './rich-text-asset'

export default function PostPage({ post }: any) {
    const router = useRouter();
    if (!router.isFallback && !post) {
        return <ErrorPage statusCode={404} />;
    }
    return (
        <>
            {router.isFallback ? (
                <Loading />
            ) : (
                <section className="mainContent">
                    <div className="maxContentContainer">
                        <div className="col">
                            <Text
                                size={60}
                                weight="bold"
                                className="post-page-title"
                            >
                                {post.title}
                            </Text>
                            <CoverImage
                                title={post.title}
                                url={post.coverImage.url}
                            />
                            <Text size={24} className="post-page-content">
                                {documentToReactComponents(post.content.json)}
                            </Text>
                            <Text>{post.date}</Text>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

export async function getStaticProps({ params, preview = false }: any) {
    const data = await getPostAndMorePosts(params.slug, preview);
    console.log(data);
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
