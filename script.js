let alarmTime = null;
let alarmTimeout = null;
let audio = document.getElementById('alarmSound');

// Função para definir o alarme
function setAlarm() {
    const timeInput = document.getElementById("alarmTime").value;
    const soundSelected = document.getElementById("soundSelect").value;

    if (!timeInput) {
        alert("Por favor, defina um horário para o alarme.");
        return;
    }

    alarmTime = timeInput;
    audio.src = soundSelected;
    alert(`Alarme definido para ${alarmTime} com o som: ${soundSelected}`);

    checkAlarm(); // Inicia a verificação do alarme
}

// Função para parar o som do alarme
function stopSound() {
    audio.pause();
    audio.currentTime = 0;
    clearTimeout(alarmTimeout);
}

// Função para verificar se é a hora do alarme
function checkAlarm() {
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const currentFormattedTime = `${hours}:${minutes}`;

    document.getElementById("currentTime").innerText = currentFormattedTime;

    if (alarmTime === currentFormattedTime) {
        audio.play();
    }

    alarmTimeout = setTimeout(checkAlarm, 1000);
}

// Função para testar o som selecionado
function testSound() {
    const soundSelected = document.getElementById("soundSelect").value;
    audio.src = soundSelected;
    audio.play();
}
