export const createQueryString = (name: string, value: string, myParams: string = '') => {

    let params;

    if(myParams) {
        params = new URLSearchParams(myParams);
    } else {
        params = new URLSearchParams();
    }

    params.set(name, value);

    return params.toString();
};