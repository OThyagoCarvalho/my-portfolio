import { format } from 'date-fns';

export default function DateComponent({ dateString }: any) {
    return (
        <time dateTime={dateString}>
            {format(new Date(dateString), 'MM/dd/yyyy')}
        </time>
    );
}
