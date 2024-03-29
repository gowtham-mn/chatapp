import { useContext, useEffect, useState } from "react"
import { chatContext } from "../context/chatContext"
import { baseUrl, getRequest } from "../utils/services";

export const useFetchLatestMessage = (chat) => {
    const {newMessage, notifications} = useContext(chatContext);
    const [latestMessage, setLatestMessage] = useState(null);

    useEffect(() => {
        const getMessages = async () => {
            const response = await getRequest(`${baseUrl}/messages/${chat?._id}`);

            if(response.error){
                return console.log("error getting messages", error);
            }

            const lastMessage = response[response?.length - 1];

            setLatestMessage(lastMessage);
        };
        getMessages();
    }, [newMessage, notifications]);

    return {latestMessage};
};