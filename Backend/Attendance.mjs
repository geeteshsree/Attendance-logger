import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    const { studentID, name, timestamp } = JSON.parse(event.body);

    const params = {
        TableName: "AttendanceRecords",
        Item: {
            studentID: `${studentID}_${timestamp}`, // ✅ fixed here
            name,
            timestamp
        }
    };

    try {
        await docClient.send(new PutCommand(params));
        return {
            statusCode: 200,
            body: JSON.stringify({ message: `Attendance marked for ${name}` }) // ✅ fixed here
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
