import cookie from 'js-cookie'
export default{

    auth(to,from,next){
       
        const token = cookie.get('_my_token')
        console.log(token)

        if(!token){
            next('/')
        }else{
            console.log('nasjdbhsdb')
            next();
        }
    }
}