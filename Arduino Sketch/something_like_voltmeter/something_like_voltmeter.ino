int pot = A0;
int gled0 = 2; 	//all LEDs are connected with 330Ω resistor
int gled1 = 3;  
int gled2 = 4; 
int yled0 = 5; 
int rled0 = 6; 

void setup(){
   Serial.begin(9600);
   pinMode(pot, INPUT);
   pinMode(gled0, OUTPUT);
   pinMode(gled1, OUTPUT);
   pinMode(gled2, OUTPUT);
   pinMode(yled0, OUTPUT);
   pinMode(rled0, OUTPUT);
   digitalWrite(gled0, LOW);
   digitalWrite(gled1, LOW);
   digitalWrite(gled2, LOW);
   digitalWrite(yled0, LOW);
   digitalWrite(rled0, LOW); 
}

 void loop(){
   Serial.println(analogRead(pot));
   if(analogRead(pot) >= 205){		// 1V
     digitalWrite(gled0, HIGH);
     delay(4);
   }
   if(analogRead(pot) >= 410){		// 2V
     digitalWrite(gled1, HIGH);
     delay(4);
   }
   if(analogRead(pot) >= 615){		// 3V
     digitalWrite(gled2, HIGH);
     delay(4);
   }
   if(analogRead(pot) >= 820){ 		// 4V
     digitalWrite(yled0, HIGH);
     delay(4);
   }
   if(analogRead(pot) >= 1023){		// 5V
     digitalWrite(gled0, HIGH);
     digitalWrite(gled1, HIGH);
     digitalWrite(gled2, HIGH);
     digitalWrite(yled0, HIGH);
     digitalWrite(rled0, HIGH);
     delay(150);
     digitalWrite(gled0, LOW);
     digitalWrite(gled1, LOW);
     digitalWrite(gled2, LOW);
     digitalWrite(yled0, LOW);
     digitalWrite(rled0, LOW);
     delay(150);
   }
   else{				// 0V
     digitalWrite(gled0, LOW);
     digitalWrite(gled1, LOW);
     digitalWrite(gled2, LOW);
     digitalWrite(yled0, LOW);
     digitalWrite(rled0, LOW);
   }
}
