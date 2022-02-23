# **Mind Reader App**

## **Wireframe**:

<img src = './img/mindReader.png' alt = 'Wireframe Image' width = '100'/>

<br/><br/>

## **Important Items to Remember**:

- Create a single index.html page.

- Update page views with JavaScript state management.

- Do not use the same symbol multiple times.

- Use scroll feature on page containing symbol and number combination.

- When user presses reset it should go back to the first page.

<br/><br/>

<hr>

## **Objects**:

<br/>

- ### **View**

  - Text

    - headingText: Provides instructions to the user on how to play, navigate, find their answer, and reveals the answer. Displayed on all views.

    - helperText: Provides helpful tips to the user on on how to proceed through the application. Hidden on first view.


  - Buttons

    - navButton: Used to change state.
      - navButtonText = 'Go' // Displayed on View 0.
      - navButtonIcon = 'Refresh' // Displayed on View 1 - 5.

    - nextButton: Used to change state.
      - nextButtonText = 'NEXT' // Displayed on View 2 - 3.
      - nextButtonText = 'REVEAL' // Displayed on View 4.

<br/><br/>

<hr>

## **Views**:

<br/>

- ### **View 0**:

  // Properties

  - headingText = visible,
  - nextButton = hidden,
  - helperText = hidden,
  - navButton = visible, // Button Text "GO"
    - navButton -> click changes state view++

<br/>

- ### **View 1 - View 3**:
  // Properties
  - headingText = visible,
  - nextButton = visible, // Button Text "NEXT"
    - nextButton -> click changes state view++
  - helperText = visible,
  - navButton = visible, // Button Text Icon
    - navButton -> click resets state view = 0;

<br/>

- ### **View 4**:
  // Properties
  - headingText = visible,
    - Enable scroll feature, Bootstrap
  - nextButton = visible, // Button Text "REVEAL"
    - nextButton -> click changes state view++
  - helperText = visible,
  - navButton = visible, // Button Text Icon
    - navButton -> click resets state view = 0;

<br/>

- ### **View 5**:
  // Properties
  - headingText = visible,
  - nextButton = hidden,
  - helperText = visible,
  - navButton = visible, // Button Text Icon
    - navButton -> click resets state view = 0;

<br/><br/>

<hr>

```
START

INIT
    Create click handlers navButton and nextButton
    Create variable setting view to zero
    Create empty variable to hold a result symbol
    Create array containing symbols

FUNCTIONS

    randomSymbol -> 
      - Loops through the symbol array to create 99 symbols.
      - Needs to pick specific symbols based on the rule of 9 (n % 9 === 0). 
      - Important, need to make sure not to use same symbol twice.

    updateState -> view++
      updateView

    resetView -> resets State based on the current view.
      IF view === 0 THEN view++;
      ELSE view = 0
      updateView

    updateView -> Updates view based on current state
      - Based on the current state views will be displayed & updated with:
        - headingText.style.display
        - headingText.innerText
        - helperText.style.display
        - helperText.innerText
        - nextButton.style.display
        - nextButton.innerText
        - navButton.style.display
        - navButton.style.display

END

```
<br/><br/>
<hr>

## **HTML Layout**:

  - ### **Bootstrap Integration**:

    - Main Container
      - row
        - col
          - headingText ->Centered on page
          - **Note**: Enable overflow on View 4 for scroll

      - row
        - col
          - nextButton -> Centered on page
      
      - row
        - col 
          - helperText -> Centered on page
      
      - navButton -> Positioned bottom right on all views