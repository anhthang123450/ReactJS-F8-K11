import React from "react";

const data = [
    {
        id: 1,
        name: "Hoang",
        age: 33,
    },
    {
        id: 2,
        name: "Hoa",
        age: 34,
    },
    {
        id: 3,
        name: "Hoan",
        age: 35,
    },
];

const HomePage = () => {
    const [show, setShow] = React.useState(false);

    function handleClick() {
        setShow(!show);
    }

    return (
        <div>
            <button onClick={handleClick}>{show ? "Hidden" : "Show"} </button>
            {show &&
                data.map((item) => {
                    return (
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <p>{item.age}</p>
                        </div>
                    );
                })}
        </div>
    );
};

export default HomePage;
