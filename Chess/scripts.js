@charset "utf-8";
/* CSS Document */

.borda{border:#F00;}
.tabPreto{background:#03C;}

/* TABULEIRO*/
#tabuleiro{width: 577px; height: 577px; border:#000 solid 1px; margin:auto;}

#tabuleiro div{width:70px; height:70px; float:left; margin:1px; font-size: 48px; text-align:center;}

#t11, #t13, #t15, #t17, #t22, #t24, #t26, #t28, #t31, #t33, #t35, #t37, #t42, #t44, #t46, #t48, #t51, #t53, #t55, #t57, #t62, #t64, #t66, #t68, #t71, #t73, #t75, #t77, #t82, #t84, #t86, #t88{background-color:#FFF;}

#t12, #t14, #t16, #t18, #t21, #t23, #t25, #t27, #t32, #t34, #t36, #t38, #t41, #t43, #t45, #t47, #t52, #t54, #t56, #t58, #t61, #t63, #t65, #t67, #t72, #t74, #t76, #t78, #t81, #t83, #t85, #t87{background-color:#999;} 


div{ cursor:pointer;}


#fundo{background:#000; position:fixed; width:100%; height:100%; z-index:999; top:0; left:0; opacity:0.50;-moz-opacity: 0.50;filter: alpha(opacity=50);}
.escolhe{position:fixed;top:20%;left:40%;display:none;z-index:1000;background:#FFF;border:#000 solid 1px;}
.escolhe div{width:70px; height:70px; float:left; margin:1px; font-size: 48px; text-align:center; float:left; margin:5px;}
#escolhecor-inicio{ display:block; left:45%;}
	
	
		
//posiciona as pecas pretas no array
	peca[1][1]['peca']="torre";		peca[1][1]['cor']="preto";	peca[1][1]['mov']=0; il['preto']['torre'] = "&#9820;";
	peca[1][2]['peca']="cavalo";	peca[1][2]['cor']="preto";	peca[1][2]['mov']=0; il['preto']['cavalo'] = "&#9822;";
	peca[1][3]['peca']="bispo"; 	peca[1][3]['cor']="preto";	peca[1][3]['mov']=0; il['preto']['bispo'] = "&#9821;";
	peca[1][4]['peca']="rainha";	peca[1][4]['cor']="preto";	peca[1][4]['mov']=0; il['preto']['rainha'] = "&#9819;";
	peca[1][5]['peca']="rei";		peca[1][5]['cor']="preto";	peca[1][5]['mov']=0; il['preto']['rei'] = "&#9818;";
	peca[1][6]['peca']="bispo";		peca[1][6]['cor']="preto";	peca[1][6]['mov']=0; 
	peca[1][7]['peca']="cavalo";	peca[1][7]['cor']="preto";	peca[1][7]['mov']=0; 
	peca[1][8]['peca']="torre";		peca[1][8]['cor']="preto";	peca[1][8]['mov']=0; 

	peca[2][1]['peca']="peao";		peca[2][1]['cor']="preto";	peca[2][1]['mov']=0; il['preto']['peao'] = "&#9823;";
	peca[2][2]['peca']="peao";		peca[2][2]['cor']="preto";	peca[2][2]['mov']=0;
	peca[2][3]['peca']="peao"; 		peca[2][3]['cor']="preto";	peca[2][3]['mov']=0;
	peca[2][4]['peca']="peao";		peca[2][4]['cor']="preto";	peca[2][4]['mov']=0;
	peca[2][5]['peca']="peao";		peca[2][5]['cor']="preto";	peca[2][5]['mov']=0;
	peca[2][6]['peca']="peao";		peca[2][6]['cor']="preto";	peca[2][6]['mov']=0;
	peca[2][7]['peca']="peao";		peca[2][7]['cor']="preto";	peca[2][7]['mov']=0;
	peca[2][8]['peca']="peao";		peca[2][8]['cor']="preto";	peca[2][8]['mov']=0;	

//posiciona as pecas brancas no array	
	peca[8][1]['peca']="torre";		peca[8][1]['cor']="branco";	peca[8][1]['mov']=0; il['branco']['torre'] = "&#9814;";
	peca[8][2]['peca']="cavalo";	peca[8][2]['cor']="branco";	peca[8][2]['mov']=0; il['branco']['cavalo'] = "&#9816;";
	peca[8][3]['peca']="bispo"; 	peca[8][3]['cor']="branco";	peca[8][3]['mov']=0; il['branco']['bispo'] = "&#9815;";
	peca[8][4]['peca']="rainha";	peca[8][4]['cor']="branco";	peca[8][4]['mov']=0; il['branco']['rainha'] = "&#9813;";
	peca[8][5]['peca']="rei";		peca[8][5]['cor']="branco";	peca[8][5]['mov']=0; il['branco']['rei'] = "&#9812;";
	peca[8][6]['peca']="bispo";		peca[8][6]['cor']="branco";	peca[8][6]['mov']=0;
	peca[8][7]['peca']="cavalo";	peca[8][7]['cor']="branco";	peca[8][7]['mov']=0;
	peca[8][8]['peca']="torre";		peca[8][8]['cor']="branco";	peca[8][8]['mov']=0;

	peca[7][1]['peca']="peao";		peca[7][1]['cor']="branco";	peca[7][1]['mov']=0; il['branco']['peao'] = "&#9817;";
	peca[7][2]['peca']="peao";		peca[7][2]['cor']="branco";	peca[7][2]['mov']=0;
	peca[7][3]['peca']="peao"; 		peca[7][3]['cor']="branco";	peca[7][3]['mov']=0;
	peca[7][4]['peca']="peao";		peca[7][4]['cor']="branco";	peca[7][4]['mov']=0;
	peca[7][5]['peca']="peao";		peca[7][5]['cor']="branco";	peca[7][5]['mov']=0;
	peca[7][6]['peca']="peao";		peca[7][6]['cor']="branco";	peca[7][6]['mov']=0;
	peca[7][7]['peca']="peao";		peca[7][7]['cor']="branco";	peca[7][7]['mov']=0;
	peca[7][8]['peca']="peao";		peca[7][8]['cor']="branco";	peca[7][8]['mov']=0;	



///aray para movimentar as pecas
	movimenta = new Array();
	
	movimenta['selecionada'] = new Array();
	movimenta['selecionada']['x'] =0;
	movimenta['selecionada']['y'] =0;
	movimenta['selecionada']['peca']="0";
	movimenta['selecionada']['cor']="0";
	
	movimenta['destino'] = new Array();
	movimenta['destino']['x'] =0;
	movimenta['destino']['y'] =0; 
	movimenta['destino']['peca'] ="0";
	movimenta['destino']['cor']="0";

///aray para os possiveis movimentos
	possiveis = new Array();


function possiveis_movimentos(){
		var x,y;
		var c =0; //contador pro array possiveis
		var i; //contador pros for
		x = movimenta['selecionada']['x'];
		y = movimenta['selecionada']['y'];

		document.getElementById('t'+x+y).style.backgroundColor = "#3C9"; //muda cor de fundo
		possiveis[c] = "t"+x+y; c++;

///////////////////////////////////////////////////////////////////////////////////PEAO////////////////////////////////
	if(peca[x][y]['peca']=='peao'){
		if(peca[x][y]['cor']=="branco"){

				if(!peca[x-1][y]['peca']){
					possivel(x-1,y);
				}if(y-1>0 && peca[x-1][y-1]['peca']){
					possivel(x-1,y-1);						
				}
				if(y+1<9 && peca[x-1][y+1]['peca']){
					possivel(x-1,y+1);					
				}					

				if(x==7){				
					if(!peca[x-2][y]['peca'] && !peca[x-1][y]['peca']){
						possivel(x-2,y);
					}
				}

		}
		
		
		if(peca[x][y]['cor']=="preto"){
				
				if(!peca[x+1][y]['peca']){
					possivel(x+1,y);
				}if(y-1>0 && peca[x+1][y-1]['peca']){
					possivel(x+1,y-1);						
				}
				if(y+1<9 && peca[x+1][y+1]['peca']){
					possivel(x+1,y+1);					
				}					

				if(x==2){
				
					if(!peca[x+2][y]['peca'] && !peca[x+1][y]['peca']){
						possivel(x+2,y);
					}
		
				}

		}
	}
///////////////////////////////////////////////////////////////////////////////////////FIM PEAO//////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////CAVALO ////////////////////////////////

	if(peca[x][y]['peca']=='cavalo'){
		
		possivel(x-1,y-2);
		possivel(x+1,y+2);
		possivel(x+1,y-2);
		possivel(x-1,y+2);
		possivel(x-2,y-1);
		possivel(x+2,y+1);
		possivel(x+2,y-1);
		possivel(x-2,y+1);
		
	}
//////////////////////////////////////////////////////////////////////////////////////FIM CAVALO ////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////REI ///////////////////////////////////
	if(peca[x][y]['peca']=='rei'){
		possivel(x-1,y);
		possivel(x,y-1);
		possivel(x-1,y-1);
		possivel(x+1,y);
		possivel(x,y+1);
		possivel(x+1,y+1);
		possivel(x-1,y+1);
		possivel(x+1,y-1);
	}
//////////////////////////////////////////////////////////////////////////////////////FIM REI ////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////TORRE ///////////////////////////////////
	if(peca[x][y]['peca']=='torre'){
		
		for(i=1;possivel(x-i,y);i++);
		for(i=1;possivel(x+i,y);i++);
		for(i=1;possivel(x,y-i);i++);
		for(i=1;possivel(x,y+i);i++);
	}
//////////////////////////////////////////////////////////////////////////////////////FIM TORRE ////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////BISPO ///////////////////////////////////
	if(peca[x][y]['peca']=='bispo'){
		
		for(i=1;possivel(x-i,y-i);i++);
		for(i=1;possivel(x+i,y+i);i++);
		for(i=1;possivel(x-i,y+i);i++);
		for(i=1;possivel(x+i,y-i);i++);
	}
//////////////////////////////////////////////////////////////////////////////////////FIM BISPO ////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////RAINHA ///////////////////////////////////
	if(peca[x][y]['peca']=='rainha'){
		
		for(i=1;possivel(x-i,y-i);i++);
		for(i=1;possivel(x+i,y+i);i++);
		for(i=1;possivel(x-i,y+i);i++);
		for(i=1;possivel(x+i,y-i);i++);
		for(i=1;possivel(x-i,y);i++);
		for(i=1;possivel(x+i,y);i++);
		for(i=1;possivel(x,y-i);i++);
		for(i=1;possivel(x,y+i);i++);
		
	}
//////////////////////////////////////////////////////////////////////////////////////FIM RAINHA ////////////////////////////



function possivel(px,py){
		if(px>0 && px <9 && py>0 && py <9 && peca[px][py]['cor']!= movimenta['selecionada']['cor']){
			document.getElementById('t'+(px)+(py)).style.backgroundColor = "#3C9"; //muda cor de fundo
			possiveis[c] = "t"+(px)+(py); c++;
			
			if(!peca[px][py]['peca']){
				return true;
			}
		}else{
			return false;
		}

	
	}

	return c;
}

function volta_fundo(){
	var cf;
	for(cf=0;cf<possiveis.length;cf++){
		document.getElementById(possiveis[cf]).style.backgroundColor = "";
	}	
}

function verifica_possivel(x,y,c){
	var pode=0;
	var cp;
	var div = "t"+x+y;
	
	for(cp=1;cp<c;cp++){
		
		if(possiveis[cp]==div){
			pode ++;
		}
		if(pode>0){
			return 1;
		}
	}	
	
}

function seleciona(x,y){
	
		
		if((movimenta['selecionada']['x']==0 || peca[x][y]['cor'] == movimenta['selecionada']['cor']) && peca[x][y]['cor']==vez){
			if(movimenta['selecionada']['x']!=0){
				volta_fundo(); //volta a cor de fundo normal
			}
			if(peca[x][y]['peca']){ //se tiver uma peca nessa posição
				movimenta['selecionada']['x'] = x;	//recebe x selecionado
				movimenta['selecionada']['y'] = y;  //recebe y selecionado
				movimenta['selecionada']['peca'] = peca[x][y]['peca']; //recebe a peca selecionada
				movimenta['selecionada']['cor'] = peca[x][y]['cor'];	//recebe a cor selecionada
				
				cont_possiveis = possiveis_movimentos();	
			}
			
		}else if(verifica_possivel(x,y,cont_possiveis)){ //se for segundo clique e a cor da peca destino for diferente da selecionada
			
			if(peca[x][y]['peca']=="rei"){
				alert(movimenta['selecionada']['cor']+" venceu (:");
				
			}
			
			//Pra trocar de peça quando o peão chegar do outro lado
			if(movimenta['selecionada']['peca']=='peao' && movimenta['selecionada']['cor']=='branco' && x==1){
				document.getElementById('escolhebranco').style.display='block';	
				document.getElementById('fundo').style.display='block';	
				xe=x;ye=y;
			}
			if(movimenta['selecionada']['peca']=='peao' && movimenta['selecionada']['cor']=='preto' && x==8){
				document.getElementById('escolhepreto').style.display='block';	
				document.getElementById('fundo').style.display='block';					
				xe=x;ye=y;
			}
			
			if(peca[x][y]['cor'] != movimenta['selecionada']['cor']){
				movimenta['destino']['x'] =x;	//recebe o x do destino(segundo clique)
				movimenta['destino']['y'] =y;  //recebe y do destino(segundo clique)
				
				if(peca[x][y]['peca']){  //se tiver alguma peca nessa posição
					movimenta['destino']['peca'] = peca[x][y]['peca'];	//destino recebe a peca selecionada
					movimenta['destino']['cor'] = peca[x][y]['cor'];	//destino recebe a cor selecionada
				}
				
				
				document.getElementById("t"+movimenta['selecionada']['x']+""+movimenta['selecionada']['y']).innerHTML = ""; //selcionada fica sem imagem
				document.getElementById("t"+x+""+y).innerHTML = il[movimenta['selecionada']['cor']][movimenta['selecionada']['peca']]; //destino recebe a imagem da peça selecinada
				peca[x][y]['peca']=movimenta['selecionada']['peca'];	//posicao destino recebe a peca
				peca[x][y]['cor']=movimenta['selecionada']['cor'];		//posicao destino recebe a cor
								
				peca[movimenta['selecionada']['x']][movimenta['selecionada']['y']]['peca'] = false;		//peca selecionada recebe 0
				peca[movimenta['selecionada']['x']][movimenta['selecionada']['y']]['cor'] = false;		//cor selecionada recebe 0
					
				movimenta['selecionada']['x'] =0;	//selecionada x recebe 0 (pra na proxima ver q é o primeiro movimento)
				movimenta['selecionada']['y'] =0;	//selecionada y recebe 0 (pra na proxima ver q é o primeiro movimento)
				movimenta['selecionada']['peca']="0";	//selecionada peca recebe 0 (pra na proxima ver q é o primeiro movimento)
				movimenta['selecionada']['cor']="0";	//selecionada cor recebe 0 (pra na proxima ver q é o primeiro movimento)
				
				
			}

			volta_fundo(); //volta a cor de fundo normal
			
			if(vez=="branco"){vez="preto";}else{vez="branco";} //troca a vez

		}
		
		

	
}

	function escolhe(pecae,core){
			peca[xe][ye]['peca']=pecae;
			document.getElementById("t"+xe+""+ye).innerHTML = il[core][pecae];
			document.getElementById('escolhe'+core).style.display='none';
			document.getElementById('fundo').style.display='none';
	}

	function escolhecor_incio(cor){
			document.getElementById('escolhecor-inicio').style.display='none';
			document.getElementById('fundo').style.display='none';
			vez = cor; //vez de quem jogar

	}