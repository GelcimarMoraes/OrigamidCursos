$('a.btn').on('click', function(e) {
	e.preventDefault();
	$('.modal').addClass('modal-ativo');
});

$('.modal').on('click', function(modal) {
	if (modal.target == this) {
		$(this).removeClass('modal-ativo');
	}
});

//Função para determinar o comprimento de cada path
$('svg path').each(function(){
	var comprimento = $(this).get(0).getTotalLength();
	var comprimentoArredondado = Math.round(comprimento);
	$(this).attr('stroke-dasharray', comprimentoArredondado);
	$(this).attr('stroke-dashoffset', comprimentoArredondado);
});

// Função para definir a distancia da box em relação ao topo do documento HTML.
function boxTop(idBox) {
	var boxOffset = $(idBox).offset();
	return boxOffset.top;
}

$(document).scroll(function() {
	var documentTop = $(this).scrollTop();

	if (documentTop > boxTop('.vantagens') - 400) {
		$('svg').addClass('animate');
	} else {
		$('svg').removeClass('animate');
	}
});
