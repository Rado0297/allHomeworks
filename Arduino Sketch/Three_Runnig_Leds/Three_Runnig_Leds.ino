void setup() {
  // put your setup code here, to run once:
  pinMode(11,OUTPUT);
  pinMode(9,OUTPUT);
  pinMode(7,OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(11,HIGH);
  digitalWrite(9,LOW);
  digitalWrite(7,LOW);
  delay(100);
  digitalWrite(11,LOW);
  digitalWrite(9,HIGH);
  digitalWrite(7,LOW);
  delay(100);
  digitalWrite(11,LOW);
  digitalWrite(9,LOW);
  digitalWrite(7,HIGH);
  delay(100);
}
