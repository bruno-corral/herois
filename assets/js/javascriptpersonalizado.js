$(function() {
	$("$palavra").keyup(function() {

		var palavra = $(this).val();

		if(palavra != '') {
			var dados = {
				palavra : palavra
			}
			$.post('busca.php', dados, function(retorna) {
				$(".resultado").html(retorna);
			});
		} else {
			$(".resultado").html(retorna);
		}
	});
});