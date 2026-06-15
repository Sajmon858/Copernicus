
const KMCR_WEBHOOK = "WSTAW_WEBHOOK_KMCR";
const FAKTURA_WEBHOOK = "WSTAW_WEBHOOK_FAKTURY";

function showTab(id){
 document.getElementById('kmcr').style.display='none';
 document.getElementById('faktura').style.display='none';
 document.getElementById(id).style.display='block';
}

async function sendKMCR(){
 if(KMCR_WEBHOOK.includes('WSTAW')){alert('Ustaw webhook KMCR');return;}
 const content=`🚑 NOWA KMCR
Pacjent: ${imie.value} ${nazwisko.value}
Wiek: ${wiek.value}
Miejsce: ${miejsce.value}
Rozpoznanie: ${rozpoznanie.value}
Tętno: ${tetno.value}
Ciśnienie: ${cisnienie.value}
SpO2: ${saturacja.value}
Kierownik: ${kierownik.value}`;

 await fetch(KMCR_WEBHOOK,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({content})});
 alert('KMCR wysłana');
}

async function sendInvoice(){
 if(FAKTURA_WEBHOOK.includes('WSTAW')){alert('Ustaw webhook Faktury');return;}
 const content=`💰 NOWA FAKTURA
Imię: ${f_imie.value}
Nazwisko: ${f_nazwisko.value}
Powód: ${powod.value}
Kwota: ${kwota.value}
Wystawiający: ${wystawiajacy.value}
Data: ${data.value}`;

 await fetch(FAKTURA_WEBHOOK,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({content})});
 alert('Faktura wysłana');
}
