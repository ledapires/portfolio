import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
   stages: [
    { duration: '1s', target: 1 }, 
    { duration: '10s', target: 1 },  
    { duration: '1s', target: 0 } // Diminui gradualmente para 0 usuários 
   ]
}    

export default function () {    
    const url = http.get('http://127.0.0.1:8080');
    console.log(JSON.stringify(url.headers))

}