$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });

    $('#contato').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            mensagem: {
                required: true
            }
        },

        messages: {
            nome: 'Por favor, insira seu nome!',
            email: 'Por favor, insira seu e-mail!',
            mensagem: 'Por favor, insira sua mensagem!'
        },

        submitHandler: function(form) {
            form.submit();
        }
    });
});