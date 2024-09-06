export async function postStudyData(studyData) {
    try {
        
        // テスト用の学習データ
        // const studyData = [
        //     {
        //         category_name: "PHP",
        //         session_duration_minutes: 30,
        //     },
        //     {
        //         category_name: "Laravel",
        //         session_duration_minutes: 138,
        //     },
        // ];

        const response = await fetch(
            "http://localhost:80/src/routes/sendStudyData.php",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(studyData),
            },
        );

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
