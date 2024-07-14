import React from "react"
import './index.css';

function App() {
    const data = [
        {
            text: 'Каждый светлячок когда-нибудь перестаёт светить. По крайней мере, на этом свете',
            episode: 'Волшебный кувшинчик',
            img: 'https://images.unsplash.com/photo-1661010854520-32ab127f1783?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            text: 'Наверное, никого нельзя насильно заставить измениться, даже если он сам об этом просит. В конце концов, если ты созрел, то сможешь измениться и без посторонней помощи, сам',
            episode: 'Бутерброд',
            img: 'https://images.unsplash.com/photo-1499244571948-7ccddb3583f1?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            text: 'А всё-таки, наверно, хорошо знать, что там, где горит свет, кто-то может сидеть и думать о тебе',
            episode: 'Думают ли о Вас на звёздах',
            img: 'https://images.unsplash.com/photo-1482061855243-4d326cb25fe2?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            text: 'Иногда случается, что вещи теряют свой смысл. Вот смысл окна, например, чтобы в него смотреть. А порой смотришь в него, а смотреть там нечего. Ничего интересного. Или вот, какой смысл умываться по утрам? Чтобы быть бодрым? А какой смысл быть по утрам бодрым? Какой вообще смысл БЫТЬ по утрам? Непонятно. И непонятно, то ли жизнь всегда была бессмысленной, а ты просто не замечал этого, то ли смысл был, но куда-то затерялся',
            episode: 'Смысл жизни',
            img: 'https://images.unsplash.com/photo-1543251698-10f13f004b0f?q=80&w=2563&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            text: 'Почему я должен делать вид, что мне хорошо, когда мне в действительности плохо?',
            episode: 'Комната грусти',
            img: 'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            text: 'Можно всю жизнь прождать подходящий момент и в итоге так и не сказать друг другу что-то важное',
            episode: 'Подходящий момент',
            img: 'https://images.unsplash.com/photo-1587346279034-e6d85706ba15?q=80&w=2372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            text: 'День рождения — это такой праздник, когда собираются персонажи из настоящего, вспоминают прошлое и желают ещё лучшего будущего',
            episode: 'Эффект бабушки',
            img: 'https://images.unsplash.com/photo-1529994476526-5a7f0737d5f1?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            text: 'Да, иногда для принятия важного решения не хватает самой малости — хорошего пинка',
            episode: 'Аквапарк',
            img: 'https://images.unsplash.com/photo-1584013472280-d1d373c1cdde?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            text: 'А вдруг окажется, что смысл жизни — не есть сладкого и не спать до двенадцати? Я тогда только расстроюсь...',
            episode: 'Смысл жизни',
            img: 'https://images.unsplash.com/photo-1563262924-641a8b3d397f?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }

    ]

    const [count, setCount] = React.useState(window.store.count)

    React.useEffect(() => {
        window.store.subscribe(() => {
            setCount(window.store.count)
        })
    }, [])
    return (
        <div className='block'>
            <p className='subtitle'>
                В React на основе сгенерированого числа выводится элемент массива (карточка).
            </p>
            <p className='subtitle'>
                Рандомное число (вывод из React): {count}</p>
            <article className='card'>
                <h3 className='card__title'>{data[count].text}</h3>
                <p className='card__time'>{data[count].episode}</p>
                <img
                    src={data[count].img}
                    alt={data[count].text}
                    className='card__img'/>
            </article>
        </div>
    )
}

export default App