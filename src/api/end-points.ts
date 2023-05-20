const MAIN_URL = 'https://api.extrazone.com'

export const END_POINTS = {
    TAGS:{
        GET_TAGS:`${MAIN_URL}/tags/list`,
    },
    PROMOTIONS:{
        PROMOTIONS_LIST:`${MAIN_URL}/promotions/list?Channel=PWA`,
        PROMOTIONS_BY_ID:`${MAIN_URL}/promotions?Id=`,
    }
   
}