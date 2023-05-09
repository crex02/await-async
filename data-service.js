
class DataService{

    static async getData(){
        // return fetch('./fake-data.json').then(resp => resp.json());
        const data = await fetch('./fake-data.json');
        return data;
    }

}
