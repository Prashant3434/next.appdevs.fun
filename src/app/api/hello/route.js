export function GET(req){
    return new Response(JSON.stringify({name:'Prashant'}),{
        headers:{
            'Content-Type':'application/json'
        }
    });
}