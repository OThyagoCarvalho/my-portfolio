import { Button } from '@nextui-org/react';
import { NextPage } from 'next';
import { useState } from 'react';
import HeroPost from '../components/Hero Post/HeroPost';
import PostPreview from '../components/Post Preview/PostPreview';
import { getAllPostsForBlog } from '../services/contentful/lib/api';
import styles from '../styles/BlogPage.module.scss';

const Blog: NextPage = ({ allPosts }: any) => {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1, 5);
    const olderPosts = allPosts.slice(5);
    const [showMorePosts, setShowMorePosts] = useState(false);

    return (
        <main className={styles.blogPageMainSection}>
            <div className={styles.maxContentContainer}>
                {/* <h2 className={styles.blogPageTitle}> Blog.</h2> */}
                <HeroPost
                    title={heroPost.title}
                    coverImage={heroPost.coverImage.url}
                    date={heroPost.date}
                    excerpt={heroPost.excerpt}
                    slug={heroPost.slug}
                />
                <h2 className={styles.moreStories}>Mais Histórias</h2>
                <div className="row">
                    {morePosts.map((post: any) => (
                        <PostPreview
                            key={post.slug}
                            title={post.title}
                            coverImage={post.coverImage}
                            date={post.date}
                            excerpt={post.excerpt}
                            slug={post.slug}
                        />
                    ))}
                    {showMorePosts &&
                        olderPosts.map((post: any) => (
                            <PostPreview
                                key={post.slug}
                                title={post.title}
                                coverImage={post.coverImage}
                                date={post.date}
                                excerpt={post.excerpt}
                                slug={post.slug}
                            />
                        ))}
                </div>
                {olderPosts.length > 0 && (
                    <div className={styles.row}>
                        <Button
                            type="button"
                            color="success"
                            className={styles.showMorePostsButton}
                            onClick={() => setShowMorePosts(true)}
                        >
                            Mostrar Mais
                        </Button>
                    </div>
                )}
            </div>
        </main>
    );
};

export async function getStaticProps({ preview = false }: any) {
    const allPosts = (await getAllPostsForBlog(preview)) || [];

    return {
        props: {
            preview: false,
            allPosts
        }
    };
}

export default Blog;
