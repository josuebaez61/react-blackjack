export const getRounds = ( results, rounds ) => {
    console.log('results', results)
    let { ia_rounds, player_rounds } = rounds;
    let res = {};
    switch (results) {
        case null:
            res = {
                ia_rounds,
                player_rounds
            }
            console.log('res', res)
            return {
                ia_rounds,
                player_rounds
            };
        case true:
            res = {
                ia_rounds,
                player_rounds: player_rounds + 1
            };
            console.log('res', res)
            return {
                ia_rounds,
                player_rounds: player_rounds + 1
            };
        case false:
            res = {
                ia_rounds: ia_rounds + 1,
                player_rounds
            }
            console.log('res', res)

            return {
                ia_rounds: ia_rounds + 1,
                player_rounds
            };
        default:
            return rounds;
    }
}