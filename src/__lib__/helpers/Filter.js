export const sortByStatus = (arr) =>{
    return {
        pending: arr.filter(item => item.status === 'PENDING'),
        approved: arr.filter(item => item.status === 'APPROVED'),
        rejected: arr.filter(item => item.status === 'REJECTED')
    }  
}