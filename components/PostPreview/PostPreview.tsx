import { Text } from '@nextui-org/react';
import Link from 'next/link';
import CoverImage from '../PostComponents/CoverImage';
import DateComponent from '../PostComponents/DateComponent';
import styles from './PostPreview.module.scss';

export default function PostPreview({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug
}: any) {
    return (
        <div className={styles.postPreviewContainer}>
            <div>
                <CoverImage title={title} url={coverImage.url} slug={slug} />
            </div>
            <p className={styles.postPreviewTitle}>
                <Link href={`/posts/${slug}`}>
                    <a aria-label={title}>{title}</a>
                </Link>
            </p>
            <p className={styles.postPreviewExcerpt}>{excerpt}</p>

            <div>
                <Text h6>{author}</Text>
            </div>
            <div>
                <DateComponent dateString={date} />
            </div>
        </div>
    );
}
