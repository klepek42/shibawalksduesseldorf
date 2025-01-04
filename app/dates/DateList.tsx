import { DateEntry } from "./DateEntry"

interface DateEntry {
    title: string,
    date: string,
    city: string,
    location: string
}


interface Props {
    dates: DateEntry[]
}

export const DateList = ({dates}:Props) => {
    return (<>
        {dates.map(date => <DateEntry date={date} />)}
    </>)
}