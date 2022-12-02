import CategoryCard from '../Category_card'
import "./style.css"

export default function Categories({data}) {
    return (
        <>
            <div className='categories_container__sx'>
                {data.map((category) => {
                    return <CategoryCard key={category._id} data={category} />
                })}
            </div>
        </>
    )
}
