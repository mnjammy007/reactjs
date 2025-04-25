import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${today.getMonth() < 9 ? 0 : ""}${today.getMonth() + 1}-${today.getDate()}`; // YYYY-MM-DD format for the API,
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${formattedDate}/v1/currencies/${currency}.json`
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
    }, [currency])
    return data;
}

export default useCurrencyInfo;