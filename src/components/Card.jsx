import React from 'react';

export default function Card() {

  const data = [
   {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkddfHSSJIHrMFHt08KEGQ7PDVl0fxIOgHfA&s",
      name: "Objects",
      description: "Some quick example text to build on the card title and make up the bulk of the card’s content."
    },
    {
      image: "https://t4.ftcdn.net/jpg/13/54/24/61/360_F_1354246158_KnRpIb25gULq9vXBeZhyfxzGuIhsd7QL.jpg",
      name: "Daily objects",
      description: "Some quick example text to build on the card title and make up the bulk of the card’s content."
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkddfHSSJIHrMFHt08KEGQ7PDVl0fxIOgHfA&s",
      name: "Objects",
      description: "Some quick example text to build on the card title and make up the bulk of the card’s content."
    }
  ];

  return (
    <div className="w-full d-flex justify-content-center align-items-center gap-2 flex-wrap ">
      {data.map((elem, index) => (
        <div key={index} className="card border-0 shadow" style={{ width: "20rem" }}>
          <img src={elem.image} className="card-img-top" alt={elem.name} />
          <div className="card-body p-0">
            <h2 className="card-title m-0">{elem.name}</h2>
            <p className="card-text m-0">{elem.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
