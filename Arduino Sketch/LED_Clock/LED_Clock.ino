int pin6 = 6;
int pin7 = 7;
int pin8 = 8;
int pin9 = 9;
int pin10 = 10;
int pin11 = 11;
int pin12 = 12;
int pin13 = 13;

void setup() {
  // put your setup code here, to run once:
  pinMode(pin6, OUTPUT);
  pinMode(pin7, OUTPUT);
  pinMode(pin8, OUTPUT);
  pinMode(pin9, OUTPUT);
  pinMode(pin10, OUTPUT);
  pinMode(pin11, OUTPUT);
  pinMode(pin12, OUTPUT);
  pinMode(pin13, OUTPUT);
  
  //checks all leds from array
  digitalWrite(pin6,LOW);
  digitalWrite(pin7,LOW);
  digitalWrite(pin8,LOW);
  digitalWrite(pin9,LOW);
  digitalWrite(pin10,LOW);
  digitalWrite(pin11,LOW);
  digitalWrite(pin12,LOW);
  digitalWrite(pin13,LOW);
}

void loop() {
  // put your main code here, to run repeatedly:
  
  //NEED MORE CODE FOR CLOCK FUNCTIONALITY
  
  //print 0
  digitalWrite(pin6,LOW);
  digitalWrite(pin7,LOW);
  digitalWrite(pin8,LOW);
  digitalWrite(pin9,LOW);
  digitalWrite(pin10,LOW);
  digitalWrite(pin11,HIGH);
  digitalWrite(pin12,LOW);
  digitalWrite(pin13,HIGH);
  delay(1000);
  
  //print 1
  digitalWrite(pin6,HIGH);
  digitalWrite(pin7,HIGH);
  digitalWrite(pin8,LOW);
  digitalWrite(pin9,HIGH);
  digitalWrite(pin10,HIGH);
  digitalWrite(pin11,HIGH);
  digitalWrite(pin12,LOW);
  digitalWrite(pin13,HIGH);
  delay(1000);
  
  //print 2
  digitalWrite(pin6,LOW);
  digitalWrite(pin7,HIGH);
  digitalWrite(pin8,LOW);
  digitalWrite(pin9,LOW);
  digitalWrite(pin10,LOW);
  digitalWrite(pin11,HIGH);
  digitalWrite(pin12,HIGH);
  digitalWrite(pin13,LOW);
  delay(1000);
  
  //print 3
  digitalWrite(pin6,LOW);
  digitalWrite(pin7,HIGH);
  digitalWrite(pin8,LOW);
  digitalWrite(pin9,HIGH);
  digitalWrite(pin10,LOW);
  digitalWrite(pin11,HIGH);
  digitalWrite(pin12,LOW);
  digitalWrite(pin13,LOW);
  delay(1000);
  
  //print 4
  digitalWrite(pin6,HIGH);
  digitalWrite(pin7,LOW);
  digitalWrite(pin8,LOW);
  digitalWrite(pin9,HIGH);
  digitalWrite(pin10,HIGH);
  digitalWrite(pin11,HIGH);
  digitalWrite(pin12,LOW);
  digitalWrite(pin13,LOW);
  delay(1000);
  
  //print 5
  digitalWrite(pin6,LOW);
  digitalWrite(pin7,LOW);
  digitalWrite(pin8,HIGH);
  digitalWrite(pin9,HIGH);
  digitalWrite(pin10,LOW);
  digitalWrite(pin11,HIGH);
  digitalWrite(pin12,LOW);
  digitalWrite(pin13,LOW);
  delay(1000);
  
  //print 6
  digitalWrite(pin6,LOW);
  digitalWrite(pin7,LOW);
  digitalWrite(pin8,HIGH);
  digitalWrite(pin9,LOW);
  digitalWrite(pin10,LOW);
  digitalWrite(pin11,HIGH);
  digitalWrite(pin12,LOW);
  digitalWrite(pin13,LOW);
  delay(1000);
  
  //print 7
  digitalWrite(pin6,LOW);
  digitalWrite(pin7,HIGH);
  digitalWrite(pin8,LOW);
  digitalWrite(pin9,HIGH);
  digitalWrite(pin10,HIGH);
  digitalWrite(pin11,HIGH);
  digitalWrite(pin12,LOW);
  digitalWrite(pin13,HIGH);
  delay(1000);
  
  //print 8
  digitalWrite(pin6,LOW);
  digitalWrite(pin7,LOW);
  digitalWrite(pin8,LOW);
  digitalWrite(pin9,LOW);
  digitalWrite(pin10,LOW);
  digitalWrite(pin11,HIGH);
  digitalWrite(pin12,LOW);
  digitalWrite(pin13,LOW);
  delay(1000);
  
  //print 9
  digitalWrite(pin6,LOW);
  digitalWrite(pin7,LOW);
  digitalWrite(pin8,LOW);
  digitalWrite(pin9,HIGH);
  digitalWrite(pin10,LOW);
  digitalWrite(pin11,HIGH);
  digitalWrite(pin12,LOW);
  digitalWrite(pin13,LOW);
  delay(1000);
}
