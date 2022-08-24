export const schoolsByStatus = (arr) =>{
    return {
        pending: arr.filter(sc => sc.status === 'PENDING'),
        approved: arr.filter(sc => sc.status === 'APPROVED'),
        rejected: arr.filter(sc => sc.status === 'REJECTED')
    }  
}