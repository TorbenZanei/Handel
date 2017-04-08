//Klasse die, die Kopfzeile definiert und verwaltet
function Head_Bar(){
	
	var clock = new Clock();	//Inizialisiere Uhr
	clock.start_clock();		//Starte Uhr
	
	//Zeichnet die Kopfzeile
	this.draw_head_bar = function(){
		ui_canvas.drawImage(image_repository.head_bar_background, 0, 0, 1200, 60);
	}
	
	//Aktualisiert die Geldanzeige
	this.update_money = function(change){
		money += change;
		ui_canvas.clearRect(170, 20 ,100, 20);
		ui_canvas.font = "bold 14px Arial";
		ui_canvas.drawImage(image_repository.head_bar_background, 170, 20, 100, 20 ,170, 20, 100, 20);
		ui_canvas.fillText(money+"$", 170, 35);
	}
}