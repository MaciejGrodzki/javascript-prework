function playGame(playerInput){
    clearMessages();
    let randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('Wylosowana liczba to: ' + randomNumber);

    function getMoveName(argMoveId){
        if(argMoveId == 1){
        return 'kamień';
    }
        if(argMoveId == 2){
        return 'papier';
    }
        if(argMoveId == 3){
        return 'nożyce';
    }
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
    let ComputerMove = getMoveName(randomNumber);
        printMessage('Mój ruch to: ' + ComputerMove);

    //  let argMoveId = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
        // console.log('Gracz wpisał: ' + argMoveId);
    
    let PlayerMove = getMoveName(playerInput);
        printMessage('Twój ruch to: ' + PlayerMove);

    function displayResult(argComputerMove, argPlayerMove){
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
        if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
    }
        else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
            printMessage('Przegrałeś');
    }
        else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            printMessage('Ty, wygrywasz');
    }
        else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            printMessage('Przegałeś');
    }
        else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
            printMessage('Ty, wygrywasz');
    }
        else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            printMessage('Przegrałeś');
    }
        else if(argComputerMove == argPlayerMove ){
            printMessage('Remis !');
    }
        else {
            printMessage('Tym razem przegrywasz :(');
    }   
    }
    displayResult(ComputerMove, PlayerMove);
}


document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
// printMessage('Guzik kamień został kliknięty');
});
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);

// printMessage('Guzik papier został kliknięty');
});
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
// printMessage('Guzik nożyce został kliknięty');
});