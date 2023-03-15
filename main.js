function changeStatistics(player){
    var statistics = document.getElementById("player_statistics");
    if (player == 1){
        statistics.querySelector('h4').innerHTML = 'Jackson';
        statistics.querySelectorAll('td')[0].innerHTML = '682W - 324L';
        statistics.querySelectorAll('td')[1].innerHTML = '67.8%';
        statistics.querySelectorAll('td')[2].innerHTML = '4.3';
        statistics.querySelectorAll('td')[3].innerHTML = '8.9';
        statistics.querySelectorAll('td')[4].innerHTML = '412';
        statistics.querySelectorAll('td')[5].innerHTML = '22.1%';
        statistics.querySelectorAll('td')[6].innerHTML = '64.7%';
    }
    else if (player == 2){
        statistics.querySelector('h4').innerHTML = 'Anderson';
        statistics.querySelectorAll('td')[0].innerHTML = '632W - 288L';
        statistics.querySelectorAll('td')[1].innerHTML = '73.5%';
        statistics.querySelectorAll('td')[2].innerHTML = '4.4';
        statistics.querySelectorAll('td')[3].innerHTML = '9.0';
        statistics.querySelectorAll('td')[4].innerHTML = '356';
        statistics.querySelectorAll('td')[5].innerHTML = '22.0%';
        statistics.querySelectorAll('td')[6].innerHTML = '55.1%';
    }
    else if (player == 3){
        statistics.querySelector('h4').innerHTML = 'Ajay';
        statistics.querySelectorAll('td')[0].innerHTML = '572W - 355L';
        statistics.querySelectorAll('td')[1].innerHTML = '58.8%';
        statistics.querySelectorAll('td')[2].innerHTML = '4.9';
        statistics.querySelectorAll('td')[3].innerHTML = '8.7';
        statistics.querySelectorAll('td')[4].innerHTML = '392';
        statistics.querySelectorAll('td')[5].innerHTML = '21.1%';
        statistics.querySelectorAll('td')[6].innerHTML = '52.7%';
    }
    else if (player == 4){
        statistics.querySelector('h4').innerHTML = 'Desmin';
        statistics.querySelectorAll('td')[0].innerHTML = '589W - 299L';
        statistics.querySelectorAll('td')[1].innerHTML = '66.3%';
        statistics.querySelectorAll('td')[2].innerHTML = '4.1';
        statistics.querySelectorAll('td')[3].innerHTML = '8.1';
        statistics.querySelectorAll('td')[4].innerHTML = '365';
        statistics.querySelectorAll('td')[5].innerHTML = '23.4%';
        statistics.querySelectorAll('td')[6].innerHTML = '60.0%';
    }
    else if (player == 5){
        statistics.querySelector('h4').innerHTML = 'Joffry';
        statistics.querySelectorAll('td')[0].innerHTML = '578W - 314L';
        statistics.querySelectorAll('td')[1].innerHTML = '64.8%';
        statistics.querySelectorAll('td')[2].innerHTML = '4.0';
        statistics.querySelectorAll('td')[3].innerHTML = '8.2';
        statistics.querySelectorAll('td')[4].innerHTML = '455';
        statistics.querySelectorAll('td')[5].innerHTML = '22.5%';
        statistics.querySelectorAll('td')[6].innerHTML = '61.7%';
    }

    if (window.getComputedStyle(statistics).display == "none") {
        toggleStatistics('show');
    }
}
function toggleStatistics(toggle){
    var statistics = document.getElementById("player_statistics");
    if (window.getComputedStyle(statistics).display == "none") {
        if(toggle == "show" || toggle == "both"){
            statistics.style.display = "block";
            document.getElementById("show_statistics_button").style.display = "none";
        }
    } else {
        if(toggle == "hide" || toggle == "both"){
            statistics.style.display = "none";
            document.getElementById("show_statistics_button").style.display = "block";
        }
    }
}