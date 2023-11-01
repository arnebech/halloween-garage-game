/*
  Translate button press into serial letter. 
  Debounced. 
  Button should be normally open, and close to ground when pressed.
  Chip uses internal pull-up resitor.
*/

int BTN_INPUT = 7;

void setup() {
  pinMode(BTN_INPUT, INPUT_PULLUP);
  Serial.begin(38400);
}

int buttonState = LOW;
int lastInput = HIGH;
unsigned long lastChangeTime = 0;
unsigned long debounceDelay = 25;

void loop() {
  int input = digitalRead(BTN_INPUT);

  if (input != lastInput) {
    lastChangeTime = millis();
  }

  if ((millis() - lastChangeTime) > debounceDelay) {
    if (buttonState == input) {
      return;
    }
    // input is stable
    if (input == LOW) {
      // when button is pressed input is brough low
      Serial.println('p');
    }

    buttonState = input;

  }

  lastInput = input;
}
