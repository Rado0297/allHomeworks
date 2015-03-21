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
}

void loop() {
  digitalWrite(Layer2Diod1, HIGH);
  digitalWrite(Layer1Diod1, HIGH);
}
