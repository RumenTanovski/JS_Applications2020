function host(endpoint) {
    return `https://judgetests.firebaseio.com/${endpoint}.json`;
}

const api = {
    locations: 'locations',
    today: 'forecast/today/',
    upcoming: 'forecast/upcoming/'
};

export async function getCode(name) {
    const response = await fetch(host(api.locations));
    const data = await response.json();

    return data.find(l => l.name.toLowerCase() == name.toLowerCase()).code;
}

export async function getToday(code) {
    const response = await fetch(host(api.today + code));
    const data = await response.json();

    return data;
}

export async function getUpcoming(code) {
    const response = await fetch(host(api.upcoming + code));
    const data = await response.json();

    return data;
}