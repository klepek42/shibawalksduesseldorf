interface DateEntry {
    title: string,
    date: string,
    city: string,
    location: string
}

interface Props {
    date: DateEntry
}

export const DateEntry = ({date}:Props) => {
    return <div>
                <h3>{date.title}</h3>
                <p>{date.date}</p>
                <p>{date.city} - {date.location}</p>
            </div>
}