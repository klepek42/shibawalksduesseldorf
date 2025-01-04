import { DateList } from "./DateList";

const dates = [{title: 'Shiba Walk 01/25', date: '04.01.2025', city: 'Düsseldorf', location: 'Grafenberger Wald'},{title: 'Shiba Walk 02/25', date: '12.02.2025', city: 'Hilden', location: 'Hildener Stadtwald'},{title: 'Shiba Walk 03/25', date: '20.03.2025', city: 'Düsseldorf', location: 'Grafenberger Wald'}];

export default function Dates() {
    return (<div>
        <main>
            <DateList dates={dates} />
            <div></div>
        </main>
    </div>);
}