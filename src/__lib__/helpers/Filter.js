export const watchlistByLeague = (arr) =>{
    return {
        NBA: arr.filter(pl => pl.league === 'NBA'),
        NFL: arr.filter(pl => pl.league === 'NFL'),
        MLB: arr.filter(pl => pl.league === 'MLB')
    }  
}