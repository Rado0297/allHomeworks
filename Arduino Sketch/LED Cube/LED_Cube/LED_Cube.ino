// First Layer Diods
int Layer1Diod1 = 10;
int Layer1Diod2 = 9;
int Layer1Diod3 = 8;
int Layer1Diod4 = 11;

// Second Layer Diods
int Layer2Diod1 = 4;
int Layer2Diod2 = 5;
int Layer2Diod3 = 6;
int Layer2Diod4 = 7;

void setup() {
  pinMode(Layer2Diod1, OUTPUT);
  pinMode(Layer2Diod2, OUTPUT);
  pinMode(Layer2Diod3, OUTPUT);
  pinMode(Layer2Diod4, OUTPUT);
  pinMode(Layer1Diod3, OUTPUT);
  pinMode(Layer1Diod2, OUTPUT);
  pinMode(Layer1Diod1, OUTPUT);
  pinMode(Layer1Diod4, OUTPUT);
  
  // All LEDs are turned off
  digitalWrite(Layer2Diod1, LOW);
  digitalWrite(Layer1Diod1, LOW);
  digitalWrite(Layer2Diod2, LOW);
  digitalWrite(Layer1Diod2, LOW);
  digitalWrite(Layer2Diod3, LOW);
  digitalWrite(Layer1Diod3, LOW);
  digitalWrite(Layer2Diod4, LOW);
  digitalWrite(Layer1Diod4, LOW);
  delay(600);
  
  // Effect 1 - Start Up
  digitalWrite(Layer2Diod1, HIGH);
  delay(100);
  
  digitalWrite(Layer2Diod2, HIGH);
  delay(100);
  
  digitalWrite(Layer2Diod3, HIGH);
  delay(100);
  
  digitalWrite(Layer2Diod4, HIGH);
  delay(100);
  
  digitalWrite(Layer1Diod1, HIGH);
  delay(100);
   
  digitalWrite(Layer1Diod2, HIGH);
  delay(100);
  
  digitalWrite(Layer1Diod3, HIGH);
  delay(100);
  
  digitalWrite(Layer1Diod4, HIGH);
  delay(100);
}

void loop() {
  
  
  // Effect 2 - Two Running LEDs Left and Right (Horizontal)
  digitalWrite(Layer2Diod1, HIGH);
  digitalWrite(Layer1Diod1, HIGH);
  digitalWrite(Layer2Diod2, LOW);
  digitalWrite(Layer1Diod2, LOW);
  digitalWrite(Layer2Diod3, LOW);
  digitalWrite(Layer1Diod3, LOW);
  digitalWrite(Layer2Diod4, LOW);
  digitalWrite(Layer1Diod4, LOW);
  delay(100);
  
  digitalWrite(Layer2Diod1, LOW);
  digitalWrite(Layer1Diod1, LOW);
  digitalWrite(Layer2Diod2, HIGH);
  digitalWrite(Layer1Diod2, HIGH);
  digitalWrite(Layer2Diod3, LOW);
  digitalWrite(Layer1Diod3, LOW);
  digitalWrite(Layer2Diod4, LOW);
  digitalWrite(Layer1Diod4, LOW);
  delay(100);
  
  digitalWrite(Layer2Diod1, LOW);
  digitalWrite(Layer1Diod1, LOW);
  digitalWrite(Layer2Diod2, LOW);
  digitalWrite(Layer1Diod2, LOW);
  digitalWrite(Layer2Diod3, HIGH);
  digitalWrite(Layer1Diod3, HIGH);
  digitalWrite(Layer2Diod4, LOW);
  digitalWrite(Layer1Diod4, LOW);
  delay(100);
  
  digitalWrite(Layer2Diod1, LOW);
  digitalWrite(Layer1Diod1, LOW);
  digitalWrite(Layer2Diod2, LOW);
  digitalWrite(Layer1Diod2, LOW);
  digitalWrite(Layer2Diod3, LOW);
  digitalWrite(Layer1Diod3, LOW);
  digitalWrite(Layer2Diod4, HIGH);
  digitalWrite(Layer1Diod4, HIGH);
  delay(100);
  
  digitalWrite(Layer2Diod1, HIGH);
  digitalWrite(Layer1Diod1, HIGH);
  digitalWrite(Layer2Diod2, LOW);
  digitalWrite(Layer1Diod2, LOW);
  digitalWrite(Layer2Diod3, LOW);
  digitalWrite(Layer1Diod3, LOW);
  digitalWrite(Layer2Diod4, LOW);
  digitalWrite(Layer1Diod4, LOW);
  delay(100);
  
  digitalWrite(Layer2Diod1, LOW);
  digitalWrite(Layer1Diod1, LOW);
  digitalWrite(Layer2Diod2, HIGH);
  digitalWrite(Layer1Diod2, HIGH);
  digitalWrite(Layer2Diod3, LOW);
  digitalWrite(Layer1Diod3, LOW);
  digitalWrite(Layer2Diod4, LOW);
  digitalWrite(Layer1Diod4, LOW);
  delay(100);
  
  digitalWrite(Layer2Diod1, LOW);
  digitalWrite(Layer1Diod1, LOW);
  digitalWrite(Layer2Diod2, LOW);
  digitalWrite(Layer1Diod2, LOW);
  digitalWrite(Layer2Diod3, HIGH);
  digitalWrite(Layer1Diod3, HIGH);
  digitalWrite(Layer2Diod4, LOW);
  digitalWrite(Layer1Diod4, LOW);
  delay(100);
  
  digitalWrite(Layer2Diod1, LOW);
  digitalWrite(Layer1Diod1, LOW);
  digitalWrite(Layer2Diod2, LOW);
  digitalWrite(Layer1Diod2, LOW);
  digitalWrite(Layer2Diod3, LOW);
  digitalWrite(Layer1Diod3, LOW);
  digitalWrite(Layer2Diod4, HIGH);
  digitalWrite(Layer1Diod4, HIGH);
  delay(100);
  
  digitalWrite(Layer2Diod1, HIGH);
  digitalWrite(Layer1Diod1, HIGH);
  digitalWrite(Layer2Diod2, LOW);
  digitalWrite(Layer1Diod2, LOW);
  digitalWrite(Layer2Diod3, LOW);
  digitalWrite(Layer1Diod3, LOW);
  digitalWrite(Layer2Diod4, LOW);
  digitalWrite(Layer1Diod4, LOW);
  delay(100);
  
  digitalWrite(Layer2Diod1, LOW);
  digitalWrite(Layer1Diod1, LOW);
  digitalWrite(Layer2Diod2, HIGH);
  digitalWrite(Layer1Diod2, HIGH);
  digitalWrite(Layer2Diod3, LOW);
  digitalWrite(Layer1Diod3, LOW);
  digitalWrite(Layer2Diod4, LOW);
  digitalWrite(Layer1Diod4, LOW);
  delay(100);
  
  digitalWrite(Layer2Diod1, LOW);
  digitalWrite(Layer1Diod1, LOW);
  digitalWrite(Layer2Diod2, LOW);
  digitalWrite(Layer1Diod2, LOW);
  digitalWrite(Layer2Diod3, HIGH);
  digitalWrite(Layer1Diod3, HIGH);
  digitalWrite(Layer2Diod4, LOW);
  digitalWrite(Layer1Diod4, LOW);
  delay(100);
  
  digitalWrite(Layer2Diod1, LOW);
  digitalWrite(Layer1Diod1, LOW);
  digitalWrite(Layer2Diod2, LOW);
  digitalWrite(Layer1Diod2, LOW);
  digitalWrite(Layer2Diod3, LOW);
  digitalWrite(Layer1Diod3, LOW);
  digitalWrite(Layer2Diod4, HIGH);
  digitalWrite(Layer1Diod4, HIGH);
  delay(100);
  
  // Effect 3 - Runnig LEDs Up and Down (Vertical)
  digitalWrite(Layer2Diod1, HIGH);
  digitalWrite(Layer1Diod1, LOW);
  digitalWrite(Layer2Diod2, LOW);
  digitalWrite(Layer1Diod2, LOW);
  digitalWrite(Layer2Diod3, LOW);
  digitalWrite(Layer1Diod3, LOW);
  digitalWrite(Layer2Diod4, HIGH);
  digitalWrite(Layer1Diod4, LOW);
  delay(100);
  
  digitalWrite(Layer2Diod1, LOW);
  digitalWrite(Layer1Diod1, LOW);
  digitalWrite(Layer2Diod2, HIGH);
  digitalWrite(Layer1Diod2, LOW);
  digitalWrite(Layer2Diod3, HIGH);
  digitalWrite(Layer1Diod3, LOW);
  digitalWrite(Layer2Diod4, LOW);
  digitalWrite(Layer1Diod4, LOW);
  delay(100);
  
  digitalWrite(Layer2Diod1, LOW);
  digitalWrite(Layer1Diod1, LOW);
  digitalWrite(Layer2Diod2, LOW);
  digitalWrite(Layer1Diod2, HIGH);
  digitalWrite(Layer2Diod3, LOW);
  digitalWrite(Layer1Diod3, HIGH);
  digitalWrite(Layer2Diod4, LOW);
  digitalWrite(Layer1Diod4, LOW);
  delay(100);
  
  digitalWrite(Layer2Diod1, LOW);
  digitalWrite(Layer1Diod1, HIGH);
  digitalWrite(Layer2Diod2, LOW);
  digitalWrite(Layer1Diod2, LOW);
  digitalWrite(Layer2Diod3, LOW);
  digitalWrite(Layer1Diod3, LOW);
  digitalWrite(Layer2Diod4, LOW);
  digitalWrite(Layer1Diod4, HIGH);
  delay(100);
  
  digitalWrite(Layer2Diod1, HIGH);
  digitalWrite(Layer1Diod1, LOW);
  digitalWrite(Layer2Diod2, LOW);
  digitalWrite(Layer1Diod2, LOW);
  digitalWrite(Layer2Diod3, LOW);
  digitalWrite(Layer1Diod3, LOW);
  digitalWrite(Layer2Diod4, HIGH);
  digitalWrite(Layer1Diod4, LOW);
  delay(100);
  
  digitalWrite(Layer2Diod1, LOW);
  digitalWrite(Layer1Diod1, LOW);
  digitalWrite(Layer2Diod2, HIGH);
  digitalWrite(Layer1Diod2, LOW);
  digitalWrite(Layer2Diod3, HIGH);
  digitalWrite(Layer1Diod3, LOW);
  digitalWrite(Layer2Diod4, LOW);
  digitalWrite(Layer1Diod4, LOW);
  delay(100);
  
  digitalWrite(Layer2Diod1, LOW);
  digitalWrite(Layer1Diod1, LOW);
  digitalWrite(Layer2Diod2, LOW);
  digitalWrite(Layer1Diod2, HIGH);
  digitalWrite(Layer2Diod3, LOW);
  digitalWrite(Layer1Diod3, HIGH);
  digitalWrite(Layer2Diod4, LOW);
  digitalWrite(Layer1Diod4, LOW);
  delay(100);
  
  digitalWrite(Layer2Diod1, LOW);
  digitalWrite(Layer1Diod1, HIGH);
  digitalWrite(Layer2Diod2, LOW);
  digitalWrite(Layer1Diod2, LOW);
  digitalWrite(Layer2Diod3, LOW);
  digitalWrite(Layer1Diod3, LOW);
  digitalWrite(Layer2Diod4, LOW);
  digitalWrite(Layer1Diod4, HIGH);
  delay(100);
  
  digitalWrite(Layer2Diod1, HIGH);
  digitalWrite(Layer1Diod1, LOW);
  digitalWrite(Layer2Diod2, LOW);
  digitalWrite(Layer1Diod2, LOW);
  digitalWrite(Layer2Diod3, LOW);
  digitalWrite(Layer1Diod3, LOW);
  digitalWrite(Layer2Diod4, HIGH);
  digitalWrite(Layer1Diod4, LOW);
  delay(100);
  
  digitalWrite(Layer2Diod1, LOW);
  digitalWrite(Layer1Diod1, LOW);
  digitalWrite(Layer2Diod2, HIGH);
  digitalWrite(Layer1Diod2, LOW);
  digitalWrite(Layer2Diod3, HIGH);
  digitalWrite(Layer1Diod3, LOW);
  digitalWrite(Layer2Diod4, LOW);
  digitalWrite(Layer1Diod4, LOW);
  delay(100);
  
  digitalWrite(Layer2Diod1, LOW);
  digitalWrite(Layer1Diod1, LOW);
  digitalWrite(Layer2Diod2, LOW);
  digitalWrite(Layer1Diod2, HIGH);
  digitalWrite(Layer2Diod3, LOW);
  digitalWrite(Layer1Diod3, HIGH);
  digitalWrite(Layer2Diod4, LOW);
  digitalWrite(Layer1Diod4, LOW);
  delay(100);
  
  digitalWrite(Layer2Diod1, LOW);
  digitalWrite(Layer1Diod1, HIGH);
  digitalWrite(Layer2Diod2, LOW);
  digitalWrite(Layer1Diod2, LOW);
  digitalWrite(Layer2Diod3, LOW);
  digitalWrite(Layer1Diod3, LOW);
  digitalWrite(Layer2Diod4, LOW);
  digitalWrite(Layer1Diod4, HIGH);
  delay(100);
}
