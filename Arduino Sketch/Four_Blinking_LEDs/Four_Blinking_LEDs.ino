void setup() {
  // put your setup code here, to run once:
  pinMode(8,OUTPUT);
  pinMode(7,OUTPUT);
  pinMode(9,OUTPUT);
  pinMode(6,OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(8,HIGH);
  digitalWrite(7,LOW);
  digitalWrite(9,HIGH);
  digitalWrite(6,LOW);
  delay(600);
  digitalWrite(8,LOW);
  digitalWrite(7,HIGH);
  digitalWrite(9,LOW);
  digitalWrite(6,HIGH);
  delay(600);
}
