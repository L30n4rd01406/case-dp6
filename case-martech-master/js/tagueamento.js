// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.
// Iniciando o GA4
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
gtag('js', new Date());
// evento page_view já disparado na instância da biblioteca do GA4
gtag('config', 'G-096NHNN8Q2', {
 // send_page_view: false
});

// bloqueando o disparado da pripriedade
window['ga-disable-G-BZXLFW2C48'] = true;

//Função de formmatação para snake_case
function toSnakeCase(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "_") 
    .replace(/[^\w]/g, "_")
    .replace(/_+/g, "_") 
    .replace(/^_|_$/g, ""); 
}

//window.addEventListener("load", function() {
// 2. Evento de clique
function eventClickGA4(elementText, elementGroup){
    gtag('event', 'click', {
        element_name: toSnakeCase(elementText),
        element_group: toSnakeCase(elementGroup)
    });
}

// 3. Evento de download de arquivo PDF
function eventFileDownloadGA4(elementText, elementGroup){
    gtag('event', 'file_download', {
        element_name: toSnakeCase(elementText),
        element_group: toSnakeCase(elementGroup)
    });
}

// 4. Evento de start do formulario
function formStartGA4(formId, formName, formDestination){
    gtag('event', 'form_start', {
        form_id: toSnakeCase(formId),
        form_name: toSnakeCase(formName),
        form_destination: toSnakeCase(formDestination)
    });
}

// 5. Evento de submit do formulario
function formSubmitGA4(formId, formName, formDestination, formSubmit){
    gtag('event', 'form_submit', {
        form_id: toSnakeCase(formId),
        form_name: toSnakeCase(formName),
        form_destination: toSnakeCase(formDestination),
        form_submit_text: toSnakeCase(formSubmit)
    });
}

// 6. Evento de sucesso do formulario
function viewFormSuccessGA4(formId, formName){
    gtag('event', 'view_form_success', {
        form_id: toSnakeCase(formId),
        form_name: toSnakeCase(formName)
    });
}
//});