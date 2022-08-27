
function validarDados(cliente){

	
    var nome = validarNome(cliente.nome);
    var email = validarEmail(cliente.email);
    var telefone = validarTelefone(cliente.telefone);
	var sexo = cliente.sexo == 'F' || cliente.sexo == 'M'
    var data_de_nascimento = cliente.data_de_nascimento != undefined || cliente.data_de_nascimento != "";
	return nome  && email && telefone && sexo && data_de_nascimento 

}

function validarNome(nome){
	var regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
    return regex.test(nome) && nome != undefined && nome != "";
}

function validarCPF(cpf) {	
	cpf = cpf.replace(/[^\d]+/g,'');	

	if(cpf == '') return false;	

	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;		

	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	

		rev = 11 - (add % 11);	

		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			return false;		

	add = 0;	

	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	

	if (rev == 10 || rev == 11)	
		rev = 0;	

	if (rev != parseInt(cpf.charAt(10)))
		return false;	
		
	return cpf;   
}

function validarEmail(email) {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email) && email != undefined && email != "";
}

function validarTelefone (telefone) {
    var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');
    return regex.test(telefone) && telefone != undefined && telefone != "";
}

module.exports =  {validarDados,validarCPF};