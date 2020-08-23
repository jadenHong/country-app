

export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
export const COUNTER_CHANGE = 'COUNTER_CHANGE';
export const ADD_TEXT = 'ADD_TEXT';


export const fetchCountries = () => ({
    type: FETCH_COUNTRIES,
    payload: new Promise(async (resolve, reject) => { // new Promise 없애면 Promise 객체를 리턴하는게 아니라 함수를 사용하게 되는거라서 반드시 new Promise 해줘야함
        try {
            const data = await (await fetch(`http://localhost:7778/country/`)).json();
            console.log(data);
            resolve(data);
        } catch (err) {
            reject(err.message);
        }
    })
});

export const changeCounter = (amount) => ({
    type: COUNTER_CHANGE,
    amount,
});

export const addText = (text) => ({
    type: ADD_TEXT,
    text,
});

