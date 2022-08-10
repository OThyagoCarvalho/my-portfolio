import type { NextPage } from 'next';
import Hero from '../components/Hero/Hero';
import { Col, Container, Row, Text } from '@nextui-org/react';
import PostPreview from '../components/Post Preview/PostPreview';
import { getPostsForHome } from '../services/contentful/lib/api';

const Home: NextPage = ({ preview, allPosts }: any) => {
    console.log(allPosts);
    return (
        <main>
            <Hero />
            <div className="maxContentContainer">
                <div className="col">
                    <Text className="mostRecentPosts" size={60} weight="bold">
                        Recentes
                    </Text>
                    <div className="row">
                        {allPosts.map((post: any) => (
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
                </div>
            </div>
        </main>
    );
};

export async function getStaticProps({ preview = false }) {
    const allPosts = await getPostsForHome(false);
    console.log(getPostsForHome(false));
    return {
        props: { preview, allPosts }
    };
}

export default Home;
