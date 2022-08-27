import ContentfulImage from './ContentfulImage';
import Link from 'next/link';

export default function CoverImage({ title, url, slug }: any) {
    const image = (
        <ContentfulImage
            width={1220}
            height={610}
            alt={`Capa do post ${title}`}
            src={url}            
        />
    );

    return (
        <div>
            {slug ? (
                <Link href={`/posts/${slug}`}>
                    <a aria-label={title}>{image}</a>
                </Link>
            ) : (
                image
            )}
        </div>
    );
}
