export default function batting(state = [], action) {
    switch (action.type) {
        case 'ADD_NEW_PLAYER':
            return [...state, {
                name: action.name,
                runs: 0,
                balls: 0,
                isOut: false,
                strike: false,
                inPavilion: true
            }]

        case 'ADD_NEW_BATSMAN':
            return [...state, {
                name: action.name,
                runs: 0,
                balls: 0,
                isOut: false,
                strike: action.strike,
                inPavilion: false
            }]

        case 'BATSMAN_OUT':
            return state.map((bat) => !bat.isOut && !bat.inPavilion && bat.name == action.name ? {
                ...bat,
                isOut: true
            } : bat)

        case 'UPDATE_RUNS':
            return state.map((bat) => bat.strike ? {
                ...bat,
                runs: bat.runs + action.runs,
                balls: bat.balls + action.is_ball
            } : bat)

        case 'WICKET':
            return state.map((bat) => bat.strike &&
                !bat.inPavilion &&
                !bat.isOut ? { ...bat,
                    isOut: true
                } : bat)

        case 'TOOGLE_STRIKE':
            return state.map((bat) => !bat.inPavilion &&
                !bat.isOut ? { ...bat,
                    strike: !bat.strike
                } : bat)

        default:
           return state
    }
}
