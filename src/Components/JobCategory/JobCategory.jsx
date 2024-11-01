import { useEffect, useState } from "react";
import DisplayCategory from "../DisplayCategory/DisplayCategory";



const JobCategory = () => {

    const [category, setCategory] = useState([])

    useEffect(() => {

        fetch('/categories.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
    



    return (
        <div className="my-10">
            <h2 className="text-4xl text-white text-center font-bold">Job Category List {category.length} </h2>
            <p className="text-center mb-10">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20">
                {
                    category.map(cat => <DisplayCategory

                         key={cat.id} 
                         cat={cat}
                         
                         ></DisplayCategory>)
                }
            </div>
        </div>
    );
};

export default JobCategory;