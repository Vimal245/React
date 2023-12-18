import React from 'react';

export default function List1()
{
    const college=[{id:1, stuName:"Vimal", age:20},
                    {id:2, stuName:"Vishal", age:19},
                    {id:3, stuName:"Sukhesh", age:18},
                    {id:4, stuName:"Shri", age:19}]
    const disp=college.map((col)=><li key={col.id}> {col.stuName} {col.age}</li>)
    return (
        <div>
            <h1>
                List of Students!
                {disp}
            </h1>
        </div>
    )
}