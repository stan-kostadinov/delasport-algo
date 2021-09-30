// Масив с примерни локации

const ticketsArray = [
    
    {
        start: 'VAR',
        end: 'VRA'
    },
    {
        start: 'PLD',
        end: 'VAR'
    },
    {
        start: 'SOF',
        end: 'PLD'
    },
    {
        start: 'VRA',
        end: 'PER'
    },
    {
        start: 'PER',
        end: 'VID'
    },
    {
        start: 'DOB',
        end: 'BUR'
    },
    {
        start: 'SHU',
        end: 'STZ'
    },
    {
        start: 'VID',
        end: 'DOB'
    },
    {
        start: 'STZ',
        end: 'SEV'
    },
    {
        start: 'BUR',
        end: 'SHU'
    }
];

// Алгоритъмът ще работи без значение колко дестинации е посетил човека.

const sortTickets = (args) => {
    let startPoint;
    
    // Разделям отправните и крайните точки на масиви
    let startPoints = [];
    let endPoints = [];
    args.forEach( item => {
        startPoints.push(item.start);
        endPoints.push(item.end);
    });
    // Намираме първата отправна точка, проверявам за такава, която не се съдържа в масива с крайни точки.
    startPoints.forEach((point, idx) => {
        if ( !endPoints.includes(point) ) {
            startPoint = idx;
        }
    });

    // Добавяме стартовата точка като първа такава от новият масив.
    let sortedTickets = [];
    sortedTickets.push(args[startPoint]);

    // Функция с рекурсия, която минава през масива, намира новата дестинация според крайната точка на старата, след това вика себе си, докато не спре да има съвпадения.
    // Това значи, че сме стигнали крайната точка, съответно спираме с рекурсия и връщаме новият масив с сортираният маршрут.
    // Инициализира се в другата функция, защото иначе startPoint е извън scope-a

    const recursor = (args, startPoint) => {
        for (i = 0; i < args.length; i++ ) {
            
            if ( args[startPoint].end === args[i].start ) {
                sortedTickets.push(args[i]);
                recursor(args, i);
            } 
        }
    }
    
    recursor(args, startPoint);

    return sortedTickets;
}

console.log(sortTickets(ticketsArray));