import { SET_CATEGORIES } from "../Actions/types";

export default function Categories(state = [], action) {
    switch (action.type) {
        case SET_CATEGORIES:
            return [...action.categories];
        default:
            return state;
    }
}
