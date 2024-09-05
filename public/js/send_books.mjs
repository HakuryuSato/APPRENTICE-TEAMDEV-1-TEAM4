export async function sendBooks(sendData) {
    try {
        const response = await fetch("http://localhost:80/src/routes/sendBooks.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            sendData = [{
                
            }]

            body: JSON.stringify(sendData)
        });
        
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Send error:", error);
        return null;
    }
}