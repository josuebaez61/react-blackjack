export const getCardValue = ( cardName ) => {

    let cardValue = Number();

    if ( cardName.length === 2 ) {
        const firstChart = cardName.substring(0,1);
        switch (firstChart) {
            case 'A':
                cardValue = 11;
                break;
            case 'J':
                cardValue = 10;
                break;
            case 'Q':
                cardValue = 10;
                break;
            case 'K':
                cardValue = 10;
                break;
            default:
                cardValue = Number(cardName.substring(0,1));
                break;
        }
    } else {
        cardValue = Number(cardName.substring(0,2));
    }
    return cardValue;
}