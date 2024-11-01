

const DisplayCategory = ({cat}) => {

    const {availability, category_name} = cat
    return (
        <div className="border border-purple-600 rounded-xl p-8 shadow-xl">
           
            <h2 className="font-bold text-lg"> {category_name} </h2>
            <p> {availability} </p>
        </div>
    );
};

export default DisplayCategory;