/*

  Tutorial 5: Volt Meter

*/

 

int sensorPin = A0;    // select the analog input pin

int sensorValue = 0;   // variable to store the value coming from the sensor

float sensorVoltage = 0; // variable to store the voltage coming from the sensor

 

void setup() {

 

  Serial.begin(9600);  // start serial for output

}

 

void loop() {

  // Read the value from the analog input pin

  // A value of 1023 = 5V, a value of 0 = 0V

  int sensorValue = analogRead(sensorPin);   

 

  // Convert sensor value to voltage

  float sensorVoltage= sensorValue*(5.0/1023.0);

 

  // print sensor value

  Serial.print("The voltage is ");

  Serial.println(sensorVoltage);

 

  // delay by 1000 milliseconds:

  delay(1000);                 

}

