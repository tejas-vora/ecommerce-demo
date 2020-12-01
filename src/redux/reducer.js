import {add_data} from "../redux/type"
import {get_data} from "../redux/type"
import {create_newdata} from "../redux/type"
import db from "../db.json";

const initialstate = {
    data:[],
    cart:[],
    newdata:{}
    
}

export const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case add_data:
            return {
                ...state,
                cart: action.payload
            }
            case create_newdata:
                return {
                    ...state,
                    newdata: action.payload
                }
            case get_data:
      return {
        ...state,
        data:action.payload,
      };
        default: return state
    }

}