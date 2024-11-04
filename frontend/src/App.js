import React, { useState } from 'react';

function App() {
    const [code, setCode] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        let formData = new FormData();
        formData.append("code", code);

        try {
            const response = await fetch("http://localhost:5000/submit", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                setResult(`Status: ${result.status}, Output: ${result.output}`);
            } else {
                setResult("Error: Could not connect to the server.");
            }
        } catch (error) {
            setResult("Error: Could not connect to the server.");
        }
    };

    return (
        <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
            <h1 style={{ color: "#333" }}>Submit Your Code</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="code">Code:</label><br />
                <textarea
                    id="code"
                    name="code"
                    rows="10"
                    cols="30"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    style={{ width: "100%" }}
                /><br />
                <input type="submit" value="Submit" />
            </form>
            <div id="result" style={{ marginTop: "20px", color: "#006400" }}>{result}</div>
        </div>
    );
}

export default App;
