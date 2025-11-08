 // Rolagem suave
    $('a.nav-link, .btn').on('click', function (e) {
      if (this.hash !== "") {
        e.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 70
        }, 800);
      }
    });

    // Mostrar/ocultar detalhes dos cards
    $('.ver-mais').on('click', function () {
      const detalhes = $(this).siblings('.detalhes');
      detalhes.toggleClass('d-none');
      $(this).text(detalhes.hasClass('d-none') ? 'Ver mais' : 'Ver menos');
    });

    // Validação do formulário
    $('#formContato').on('submit', function (e) {
      e.preventDefault();
      const nome = $('#nome').val().trim();
      const email = $('#email').val().trim();

      if (!nome || !email) {
        $('#alerta').removeClass('d-none');
      } else {
        $('#alerta').addClass('d-none');
        alert('Mensagem enviada com sucesso! (simulação)');
        this.reset();
      }
    });