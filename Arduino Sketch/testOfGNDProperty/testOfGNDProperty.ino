int pin2 = 2;
int pin3 = 3; 

void setup(){
   pinMode(pin2, OUTPUT);
   pinMode(pin3, OUTPUT);
   digitalWrite(pin2, LOW);
   digitalWrite(pin3, LOW);
}

void loop(){
  digitalWrite(pin2, HIGH);
  digitalWrite(pin3, LOW);
}
