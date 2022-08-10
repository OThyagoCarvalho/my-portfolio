import Link from 'next/link';
import CoverImage from '../Post Components/CoverImage';
import DateComponent from '../Post Components/DateComponent';
import styles from './HeroPost.module.scss';

export default function HeroPost({
    title,
    coverImage,
    date,
    excerpt,
    slug
}: any) {
    return (
        <section className="heroPostSection">
            <CoverImage title={title} url={coverImage} />
            <div className={styles.row}>
                <div className={styles.heroPostDetails}>
                    <Link href={`/posts/${slug}`}>
                        <a>
                            <h2 className={styles.heroPostTitle}>{title}</h2>
                        </a>
                    </Link>
                    <DateComponent dateString={date} />
                </div>
                <div className={styles.heroPostDetails}>
                    <p className={styles.heroPostExcerpt}>{excerpt}</p>
                </div>
            </div>
        </section>
    );
}
