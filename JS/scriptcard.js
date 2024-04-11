$(document).ready(function() {
    $('.elenco').select2({
        templateResult: formatOption
    });
});

function formatOption(state) {
    if (!state.id) {
        return state.text;
    }
    return $('<span><i class="bi bi-star-fill"></i> ' + state.text + '</span>');
}