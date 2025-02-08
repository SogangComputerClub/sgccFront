import React, { useState } from 'react';

const Write = () => {
    const [Title, setTitle] = useState("");
    const [Contents, setContents] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("글쓰기 : ", { Title, Contents });
    };
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div>
                <h2>글쓰기</h2>
                <input
                    type="title"
                    className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200"
                    value={Title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                >
                    
                </input>
                <input
                    type="contents"
                    className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200"
                    value={Contents}
                    onChange={(e) => setContents(e.target.value)}
                    required
                />
                <button
                    onClick = {handleSubmit}
                    type="submit"
                    className="w-full mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    저장
                </button>
            </div>
        </div>
    )
}

export default Write;