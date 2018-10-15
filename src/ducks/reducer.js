const INITIAL_STATE={
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: "false",
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}

const UPDATE_LOAN_TYPE= 'UPDATE_LOAN_TYPE';
const UPDATE_PROPERTY_TYPE='UPDATE_PROPERTY_TYPE';
const UPDATE_CITY= "UPDATE_CITY";
const UPDATE_PROP = "UPDATE_PROP";
const UPDATE_FOUND = 'UPDATE_FOUND';
const UPDATE_AGENT = 'UPDATE_AGENT';
const UPDATE_COST = 'UPDATE_COST';
const UPDATE_PAYMENT = 'UPDATE_PAYMENT';
const UPDATE_CREDIT = 'UPDATE_CREDIT';
const UPDATE_HISTORY = 'UPDATE_HISTORY';
const UPDATE_ADDRESS1 = "UPDATE_ADDRESS1";
const UPDATE_ADDRESS2 = "UPDATE_ADDRESS2";
const UPDATE_ADDRESS3 = "UPDATE_ADDRESS3";
const UPDATE_FNAME = "UPDATE_FNAME";
const UPDATE_LNAME = "UPDATE_LNAME";
const UPDATE_EMAIL = "UPDATE_EMAIL";



function reducer(state = INITIAL_STATE, action){
    switch(action.type){
        case UPDATE_LOAN_TYPE:
        return Object.assign({}, state, {loanType: action.payload});
        
        case UPDATE_PROPERTY_TYPE:
        return Object.assign({}, state, {propertyType: action.payload});

        case UPDATE_CITY:
        return Object.assign({}, state, {city: action.payload});

        case UPDATE_PROP:
        return Object.assign({}, state, {propToBeUsedOn: action.payload});

        case UPDATE_FOUND:
        return Object.assign({}, state, {found: action.payload});

        case UPDATE_AGENT:
        return Object.assign({}, state, { realEstateAgent: action.payload });

        case UPDATE_COST:
        return Object.assign({}, state, { cost: action.payload });

        case UPDATE_PAYMENT:
        return Object.assign({}, state, { downPayment: action.payload });

        case UPDATE_CREDIT:
        return Object.assign({}, state, { credit: action.payload });

        case UPDATE_HISTORY:
        return Object.assign({}, state, { history: action.payload });
        
        case UPDATE_ADDRESS1:
        return Object.assign({}, state, { addressOne: action.payload });

        case UPDATE_ADDRESS2:
        return Object.assign({}, state, { addressTwo: action.payload });

        case UPDATE_ADDRESS3:
        return Object.assign({}, state, { addressThree: action.payload });

        case UPDATE_FNAME:
        return Object.assign({}, state, { firstName: action.payload });

        case UPDATE_LNAME:
        return Object.assign({}, state, { lastName: action.payload });

        case UPDATE_EMAIL:
        return Object.assign({}, state, { email: action.payload });

        default: return state;
    }
}
export function updateAgent(realEstateAgent){
    return{
        type: UPDATE_AGENT,
        payload: realEstateAgent
    }
}
export function updateCost(cost){
    return{
        type: UPDATE_COST,
        payload: cost
    }
}
export function updateCredit(credit){
    return{
        type: UPDATE_CREDIT,
        payload: credit
    }
}
export function updateDownPay(downPayment){
    return{
        type: UPDATE_PAYMENT,
        payload: downPayment
    }
}
export function updateHistory(history){
    return{
        type: UPDATE_HISTORY,
        payload: history
    }
}
export function updateFound(found){
    return{
        type: UPDATE_FOUND,
        payload: found
    }
}
export function updateAddress1(addressOne){
    return{
        type: UPDATE_ADDRESS1,
        payload: addressOne
    }
}
export function updateAddress2(addressTwo){
    return{
        type: UPDATE_ADDRESS2,
        payload: addressTwo
    }
}
export function updateAddress3(addressThree){
    return{
        type: UPDATE_ADDRESS3,
        payload: addressThree
    }
}
export function updateFirstName(firstName){
    return{
        type: UPDATE_FNAME,
        payload: firstName
    }
}
export function updateLastName(lastName){
    return{
        type: UPDATE_LNAME,
        payload: lastName
    }
}
export function updateEmail(email){
    return{
        type: UPDATE_EMAIL,
        payload: email
    }
}
export function updateProp(prop){
    return {
        type: UPDATE_PROP,
        payload: prop
    }
}

export function updateCity(city){
    return{
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateLoanType(loanType){
    return{
    type: UPDATE_LOAN_TYPE,
    payload: loanType
    }
}

export function updatePropType(property){
    return{
    type: UPDATE_PROPERTY_TYPE,
    payload: property
    }
}

export default reducer;